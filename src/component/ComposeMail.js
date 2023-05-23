import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { useRef,useState } from 'react'
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { EditorState } from 'react-draft-wysiwyg';

const ComposeMail = () => {
    const emailRef = useRef("")
    const titleRef = useRef("")
    const mailDataRef = useRef("")
    const getemail = JSON.parse(localStorage.getItem('data')).email;
    const emailUrl = getemail.replace(/[@.]/g, '');

    const submitHandler = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const title = titleRef.current.value;
        const maildata = mailDataRef.current.value;
    
       
      
    
        try {
          
          const res = await fetch(
            `https://mail-client-9351a-default-rtdb.firebaseio.com//${emailUrl}mailbox.json`,
            {
              method: "POST",
              body: JSON.stringify({
                to: email,
                from: getemail,
                title: title,
                maildata: maildata
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
    
          const data = await res.json();
          if (res.ok) {
            const newData = {
              email: emailRef.current.value,
              title: titleRef.current.value,
              maildata:  mailDataRef.current.value,
            } ;
            // dispatch(
            //   expenseAction.addExpense({
            //     expenses: [newData],
            //     totalAmount: newData.amount,
            //   })
            // );
    
            emailRef.current.value = "";
            titleRef.current.value = "";
            mailDataRef.current.value = "";
          } else {
            throw data.error;
          }
        } catch (err) {
          console.log(err.message);
        }
      };
   

  return (
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" ref={emailRef} placeholder="name@example.com" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Subject</Form.Label>
      <Form.Control as="textarea" ref={titleRef} rows={1} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Mail data</Form.Label>
      <Form.Control as="textarea" ref={mailDataRef} rows={4} />
{/*       
    <Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={handleEditorChange}
 
/> */}

  
    </Form.Group>
    <Button variant="primary" type='submit'>Send mail</Button>

  </Form>
  )
}

export default ComposeMail

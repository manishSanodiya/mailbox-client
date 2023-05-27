import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { useRef,useState } from 'react'
import { useDispatch } from 'react-redux'

import JoditEditor from 'jodit-react'
import { addMail } from '../store/mail-action'

const ComposeMail = () => {
  const dispatch = useDispatch();
 
  const [content,setcontent] = useState('');
    const emailRef = useRef("")
    const titleRef = useRef("")
    const editorRef = useRef("")

    const clearInputFields = () => {
      emailRef.current.value = '';
      titleRef.current.value = '';
      editorRef.current.value = '';
    
    };
    // const getemail = JSON.parse(localStorage.getItem('data')).email;
    // const emailUrl = getemail.replace(/[@.]/g, '');

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     const email = emailRef.current.value;
    //     const title = titleRef.current.value;
    //     const editor = editorRef.current.value;
    
       
      
    
    //     try {
          
    //       const res = await fetch(
    //         `https://mail-client-9351a-default-rtdb.firebaseio.com//${emailUrl}mailbox.json`,
    //         {
    //           method: "POST",
    //           body: JSON.stringify({
    //             to: email,
    //             from: getemail,
    //             title: title,
    //             Text: editor
    //           }),
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //         }
    //       );
    
    //       const data = await res.json();
    //       if (res.ok) {
    //         const newData = {
    //           email: emailRef.current.value,
    //           title: titleRef.current.value,
    //           editor:  editorRef.current.value,
    //         } ;
    //         // dispatch(
    //         //   expenseAction.addExpense({
    //         //     expenses: [newData],
    //         //     totalAmount: newData.amount,
    //         //   })
    //         // );
    
    //         emailRef.current.value = "";
    //         titleRef.current.value = "";
    //         editorRef.current.value = "";
    //       } else {
    //         throw data.error;
    //       }
    //     } catch (err) {
    //       console.log(err.message);
    //     }
    //   };

    const submitHandler= async (e)=>{
       e.preventDefault();
       const mailData = {
        from: JSON.parse(localStorage.getItem('data')).email,
        to: emailRef.current.value,
        title: titleRef.current.value,
        text: editorRef.current.value,
       }
       dispatch(addMail(mailData,clearInputFields));
    }
   

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
      <Form.Label>Message</Form.Label>
      
      
      <JoditEditor 
        ref={editorRef}
        value={content}
        onChange={newContent => setcontent(newContent)}
      />

  
    </Form.Group>
    <Button variant="primary" type='submit'>Send mail</Button>

  </Form>
  )
}

export default ComposeMail

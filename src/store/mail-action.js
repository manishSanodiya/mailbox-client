import { mailActions } from "./mail-slice";


export const addMail=(mail,clearInput)=>{
    const senderEmail = mail.from.replace(/[@.]/g, '');
    const recieverEmail = mail.to.replace(/[@.]/g, '');

    return async (dispatch)=>{
        try{
            const response= await fetch(`https://mail-client-9351a-default-rtdb.firebaseio.com/${senderEmail}.json`,
            {
                method:'POST',
                body:JSON.stringify({...mail,read:true}),
                headers: {
                    'Content-Type': 'application/json',
                  },

              
            });
            if(senderEmail !== recieverEmail){
                await fetch(`https://mail-client-9351a-default-rtdb.firebaseio.com/${recieverEmail}.json`,{
                    method: 'POST',
                        body: JSON.stringify({...mail, read: false}),
                        headers: {
                            'Content-Type': 'application/json',
                          },
                });
            };
            const data = await response.json();

            if (response.ok) {
                dispatch(
                  mailActions.add({
                    id: data.name,
                    ...mail,
                  })
                );
                clearInput();
              }else{
                throw data.error;
                        }
        }catch (error) {
            console.log(error.message);
          }
    }
}
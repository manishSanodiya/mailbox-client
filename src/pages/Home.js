import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


import Sidebar from '../component/Sidebar';

import ComposeMail from '../component/ComposeMail';
import Sent from '../component/Sent';
import Received from '../component/Received';
import { replaceMail } from '../store/mail-action';
import { updateMail } from '../store/mail-action';

const Home = () => {
  const state = useSelector((state) => state.show);
  const isLoggedIn = useSelector((state) => state.login.isloggedIn);
  const firstTime = useSelector((state) => state.mail.firstTime);
  const currentMailData = useSelector((state) => state.mail.mailData);
  const dispatch = useDispatch();

  if (isLoggedIn && firstTime) {
    const loggedUserEmail = JSON.parse(localStorage.getItem('data')).email;
    const emailUrl = loggedUserEmail.replace('@', '').replace('.', '');
    dispatch(replaceMail(emailUrl, loggedUserEmail));
  }

  setInterval(() => {
    if (isLoggedIn) {
      const loggedUserEmail = JSON.parse(localStorage.getItem('data')).email;
      // const emailUrl = loggedUserEmail.replace('@', '').replace('.', '');
      const emailUrl = loggedUserEmail.replace(/[@.]/g, '');
      dispatch(updateMail(emailUrl, loggedUserEmail, currentMailData));
    }
  }, 5000);

  return (
    <React.Fragment>
      <Sidebar />
      {state.compose && <ComposeMail />}
      {state.sent && <Sent />}
      {state.received && <Received />}
    </React.Fragment>
  );
};

export default Home;
import React,{useState} from 'react';
// import { NavLink } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import classes from './MainNavigation.module.css';
import { loginActions } from '../store/loginSlice';
import { showActions } from '../store/show-slice';
import { Button,Offcanvas } from 'react-bootstrap';

const MainNavigation = () => {
  //side nav
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //

  const isLoggedIn = useSelector((state) => state.login.isloggedIn);
  const dispatch = useDispatch();

  const authHandler = () => {
    if (isLoggedIn) {
      dispatch(loginActions.logout());
      dispatch(showActions.compose());
    }
  };

  return (
    <>
     <div className={classes.mainNav}>
      <nav>
     
        <ul>
          <li>
          <>
 <Button variant="primary" onClick={handleShow} className="me-2">
       Menu
      </Button>
      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Select</Offcanvas.Title>
        </Offcanvas.Header>
       <ul>
        <li className={classes.sidenav}>
      <NavLink to='/out' >Sent mail</NavLink>
        </li>
        <li className={classes.sidenav}>
      <NavLink to='/in' >Recieved mails</NavLink>
        </li>
        <li className={classes.sidenav}>
      <NavLink to='/compose' >Compose</NavLink>
        </li>
       </ul>
      </Offcanvas>
    </>
          </li>
          <li className={classes.welcome}>
          <NavLink
              to='/welcome'
              className={classes.active}
            >
              <i className='ri-mail-line'></i>
              Mail Box
            </NavLink>
          </li>
          <li className={classes.auth}>
            <NavLink
              onClick={authHandler}
              to='/'
              className={classes.active}
            >
              {!isLoggedIn ? 'Login' : 'Logout'}
              {!isLoggedIn ? (
                <i className='ri-login-circle-line'></i>
              ) : (
                <i className='ri-logout-circle-line'></i>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
   
    </>
   
  );
};

export default MainNavigation;

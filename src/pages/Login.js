import Axios from 'axios';
//import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';
import { Store } from '..//context/store';
import base_url from '../base_url';
import styles from "../pages/Login.module.css";
import expireToken from "../global_function/unauthorizedToken"


export default function Login(){

    const navigate = useNavigate();
  
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const submitHandler = async (e) => {

      e.preventDefault();

      Axios.post(`${base_url}/auth/api/login/`,{
        "email":  email,
         "password":password        
      })
      .then((response)=>{
        ctxDispatch({ type: 'USER_SIGNIN', payload: response });
     
        navigate('/home')
      })
      .catch((error)=>{
        console.log(error);
        if(error.response.status === 401){
            expireToken(localStorage.getItem('refreshToken'),(error,result)=>{
              if(error){
                console.log("someting went worng");
              }
              ctxDispatch({ type: 'USER_SIGNIN', payload: result });
              localStorage.setItem('userInfo', JSON.stringify(result.data.access));
              localStorage.setItem('refreshToken', JSON.stringify(result.data.refresh));
            })
        }
      })

    };
  
    useEffect(() => {
      if (userInfo) {
        console.log(localStorage.getItem('refreshToken'));
      }
    }, [userInfo]);
  
  return (

    <div className={styles.login}>
      <div className={styles.illustration}>
        <img
          className={styles.mobileLoginRafiki1}
          alt=""
          src="/images/mobile-loginrafiki-1.svg"
        />
      </div>
      <div className={styles.frame} />
      {/* <div className={styles.login1}>Login</div> */}

<form onSubmit={submitHandler}>

<div className={styles.frame1}>
        <div className={styles.email}>
          <div className={styles.password}>Email</div>
          <div className={styles.content}>
            <img className={styles.vectorIcon} alt="" src="/images/vector.svg" />
            <div className={styles.adornStartContainer}>
              <div className={styles.icon}>
                <img
                  className={styles.starsharpIcon}
                  alt=""
                  src="/images/starsharp.svg"
                />
              </div>
            </div>
            <div className={styles.placeholder}>Placeholder</div>
            <div className={styles.adornEndContainer}>
              <img
                className={styles.removeredeyefilledIcon}
                alt=""
                src="/images/removeredeyefilled.svg"
              />
            </div>
            <div> <input type="text" id="usermail "name="email" onChange={e => setEmail(e.target.value)} className={[styles.examplegmailcom]} placeholder="example@gmail.com"></input></div>
          </div>
          
        </div>
      </div>
   
      <div className={styles.frame2}>
        <div className={styles.input}>
          <div className={styles.password}>Password</div>
          <div className={styles.content}>
            <img
              className={styles.iconlockround}
              alt=""
              src="/images/iconlockround.svg"
            />
            <div className={styles.adornStartContainer}>
              <div className={styles.icon}>
                <img
                  className={styles.starsharpIcon}
                  alt=""
                  src="/images/starsharp.svg"
                />
              </div>
            </div>
            <div className={styles.div}><input type="password" onChange={e => setPassword(e.target.value)} className={styles.examplegmailcom} placeholder="Password" name="password"></input></div>
          </div>
        </div>
      </div>
      
      <div className={styles.frame5}>
        <div className={styles.button}>
          <div className={styles.base}>
            <img className={styles.maskedIcon} alt="" src="/images/masked-icon.svg" />
            <button type='submit' className={styles.button1}>Login</button>
            <img className={styles.maskedIcon} alt="" src="/images/masked-icon1.svg" />
          </div>
        </div>
      </div>

</form>

    </div>
  );
};
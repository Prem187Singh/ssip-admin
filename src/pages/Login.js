import styles from "./Login.module.css";

const Login = () => {
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
            <div> <input type="text" className={[styles.examplegmailcom]} placeholder="example@gmail.com"></input></div>
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
            <div className={styles.div}><input type="password" className={styles.examplegmailcom} placeholder="Password"></input></div>
          </div>
        </div>
      </div>
      
      <div className={styles.frame5}>
        <div className={styles.button}>
          <div className={styles.base}>
            <img className={styles.maskedIcon} alt="" src="/images/masked-icon.svg" />
            <buttom  className={styles.button1}>Login</buttom>
            <img className={styles.maskedIcon} alt="" src="/images/masked-icon1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

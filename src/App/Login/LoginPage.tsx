import React, {ChangeEvent, useState} from 'react';
import style from './Login.module.css';
import {Button, Input} from '@material-ui/core';
import {Redirect} from 'react-router-dom';

type LoginPageType = {
  loginHandler: () => void,
  loading: boolean,
  isLoggedFromStorage: string | null
}

export const LoginPage = (props: LoginPageType) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)

  if (props.isLoggedFromStorage) {
    return <Redirect to={'/graphQL-test'}/>
  }

  return (
    <div>
      <div className={style.loginContainer}>
        <div className={style.login}>
          <Input placeholder={'Fake email'} type={'email'} className={style.input} value={email} onChange={emailHandler}/>
          <Input placeholder={'Fake password'} type={'password'} className={style.input} value={password} onChange={passwordHandler}/>
          <Button color={"primary"}
                  variant={"contained"}
                  disabled={props.loading}
                  onClick={props.loginHandler}
                  className={style.btn}>
            LOG IN
          </Button>
        </div>
      </div>
    </div>
  )
}
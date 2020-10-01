import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
  onLogout: () => void
  isLoggedFromStorage: string | null
}

export const Header = (props: HeaderPropsType) => {



  return (
    <div className={style.headerContainer}>
      <span> GraphQL Test </span>
      { props.isLoggedFromStorage
        ? <NavLink to={'/graphQL-test/login'} onClick={props.onLogout} className={style.navLinkHeader}> LogOut </NavLink>
        : <span> Not Authorised </span> }
    </div>
  )
}
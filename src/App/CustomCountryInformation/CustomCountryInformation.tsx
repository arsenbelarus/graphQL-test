import React from "react";
import style from './CustomCountryInformation.module.css'
import {useParams, Link} from "react-router-dom";



export const CustomCountryInformation = () => {

  const {id} = useParams()


  return (
    <div className={style.customCountryContainer}>
      <h2> Hello. This is a page related with country-code: {id}</h2>
      <Link to={'/graphQL-test'} className={style.navLinkToMain}> Back to country list </Link>
    </div>
  )
}
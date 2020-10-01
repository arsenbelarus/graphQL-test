import React from "react";
import {Switch, Route} from "react-router-dom";
import {CustomCountryInformation} from "../App/CustomCountryInformation/CustomCountryInformation";
import {Main} from "../App/Main/Main";
import {LoginPage} from "../App/Login/LoginPage";

type RoutesType = {
  logInHandler: () => void
  loadingProgress: boolean
  isLoggedFromStorage: string | null
}

export const Routes = (props: RoutesType) => {
  return (
    <Switch>
      <Route  exact path='/graphQL-test' render={ () => <Main isLoggedFromStorage={props.isLoggedFromStorage}/> }/>
      <Route  exact path='/' render={ () => <Main isLoggedFromStorage={props.isLoggedFromStorage}/> }/>
      <Route  path='/login' render={ () => <LoginPage loginHandler={props.logInHandler} loading={props.loadingProgress} isLoggedFromStorage={props.isLoggedFromStorage}/> }/>
      <Route  path='/:id' render={ () => <CustomCountryInformation /> }/>
    </Switch>
  )
}
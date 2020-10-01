import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
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
      <Route  exact path='/' render={ () => <Redirect to={'/graphQL-test'}/> }/>
      <Route  exact path='/graphQL-test' render={ () => <Main isLoggedFromStorage={props.isLoggedFromStorage}/> }/>
      <Route  exact path='/graphQL-test/login' render={ () => <LoginPage loginHandler={props.logInHandler} loading={props.loadingProgress} isLoggedFromStorage={props.isLoggedFromStorage}/> }/>
      <Route  exact path='/graphQL-test/:id' render={ () => <CustomCountryInformation /> }/>
    </Switch>
  )
}
import React, {useState} from 'react';
import {ApolloProvider} from '@apollo/client';
import {Header} from './Header/Header';
import {client} from "../Utils/apolloClient";
import {Routes} from "../Utils/routes";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(false)
  const isLoggedFromStorage = localStorage.getItem('loggedIn')
  const logInHandler = () => {
    debugger
    setLoadingProgress(true)
    localStorage.setItem('loggedIn', 'true')
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1000)
  }
  const logoutHandler = () => {
    setLoadingProgress(false)
    localStorage.removeItem('loggedIn')
    setIsLoggedIn(true)
  }

  return (
    <ApolloProvider client={client}>
        <Header onLogout={logoutHandler} isLoggedFromStorage={isLoggedFromStorage} />
        <Routes isLoggedFromStorage={isLoggedFromStorage} logInHandler={logInHandler} loadingProgress={loadingProgress}/>
    </ApolloProvider>
  );
}

export default App;

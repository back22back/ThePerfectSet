import React, {useState, useContext} from 'react';
import {Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';
import SplashPage from './SplashPage.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import TestHome from './../test/TestHome.jsx'

const RegistrationLogin = () => {
  let [component, setComponent] = useState([''])

  var pageChanger = (page) => {
    setComponent(page)
    console.log (component)
  }

//   useEffect(()=> {
//     setComponent('splash')
//   })

//   console.log (component)
// var renderPage = (page) => {
//   if(component === 'splash') {
//     return (<SplashPage pageChanger={pageChanger}/>)
//   } else if (component === 'login') {
//     return (<Login pageChanger={pageChanger}/>);
//   } else if(component === 'register') {
//     return <Register pageChanger={pageChanger}/>
//   }
// }
  return (
    <div className="rl">
    <Router>
      <Switch>
        <Route path="/" exact component={SplashPage} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/TestHome" exact component={TestHome} />
      </Switch>
    </Router>
    {/* {renderPage()} */}
      {/* {component === 'splash' && <SplashPage pageChanger={pageChanger}/>}
      {component === 'login' && <Login pageChanger={pageChanger}/>}
      {component === 'register' && <Register pageChanger={pageChanger}/>} */}


    </div>
  )
};

export default RegistrationLogin;
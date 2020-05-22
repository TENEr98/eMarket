import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import '../assets/tailwind.scss'
import { Header } from './Header'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from './HomePage'
import { Products } from './Products'
import { SignIn } from './Auth'
import { FirebaseState } from '../context/firebase/FirebaseState'
import { UserProfile } from './Profile'

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>e-Market</title>
      </Helmet>
      <FirebaseState>
        <HashRouter>
          <Header />
          <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/products'} component={Products} />
            <Route exact path={'/how-to'} />
            <Route exact path={'/sign-in'} component={SignIn} />
            <Route exact path={'/cart'} />
            <Route exact path={'/profile'} component={UserProfile} />
          </Switch>
        </HashRouter>
      </FirebaseState>
    </HelmetProvider>
  )
}

export default App

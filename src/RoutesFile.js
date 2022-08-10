import React from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import Content from './component/content'
import Footer from './component/footer'
import Header from './component/header'

const RoutesFile = () => {
  return (
    <div>
      <Router >
        <div style={{ height: '5rem'}}>
            <Header />
        </div>
        <div style={{ height: 'calc(100vh - 10rem)'}}>
            <Content />    
        </div>
        
        <Switch>
            <Route exact={true} path="/" render={() => <Redirect to='/' />} />
            
        </Switch>
        <div style={{ height: '5rem'}}>
        <Footer />
        </div>
      </Router>
    </div>
  )
}

export default RoutesFile

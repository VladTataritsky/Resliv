import React from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import './App.css';
import MainPage from './components/MainPage/MainPage'
import Actors from './components/Actors/Actors'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <h1>logo</h1>
                </div>
                <div className="col-8 ">
                  <ul className="d-flex">
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/actors">Actors</Link></li>
                  </ul>

                  {/*  <Route path="/kek" exact render={() => null}/>*/}
                </div>
              </div>
            </div>
          </header>
        </div>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/actors" component={Actors}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;

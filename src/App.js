import React from 'react';
import './App.css';
import Tab from './components/Tab';
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Featured from './pages/Featured';



function App() {
  
  return (
    <BrowserRouter>
      <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab>
            <Link to="/">Home</Link>
          </Tab>
          <Tab>
            <Link to="/about">About</Link>
          </Tab>
          <Tab>
            <Link to="/featured">Featured</Link>
          </Tab>

          
        </div>

        <div className="viewport">
          <Switch>
          
          <Route path="/about">
            <About />
          </Route>
          <Route path="/featured">
            <Featured />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          </Switch>
        </div>
      </div>
    </div>



  </BrowserRouter>
  );
}

export default App;

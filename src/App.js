import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css'
import Users from './Users.js';
import Posts from "./Posts";
import Post from "./Post";

import Counter from "./Counter";
import CreatePost from "./CreatePost";

function App() {

  const isLogged = useSelector(state => state.isLogged)



  return (<Router><div>
    { isLogged ? <h3>Secret Info</h3> : ''}
  <Switch>
    <Route path="/posts/create"><CreatePost></CreatePost></Route>
    <Route path="/posts/:id"><Post></Post></Route>
    <Route path="/posts"><Posts></Posts></Route>

    <Route path="/users"><Users></Users></Route>
    <Route path="/counter"><Counter></Counter></Route>
  </Switch>
  </div>
  </Router>);
}

export default App;

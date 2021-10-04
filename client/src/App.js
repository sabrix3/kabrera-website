import {Switch, Route} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './JS/actions/AuthActions';
import './App.css';
import Add from "./Components/Add";

import VideosList from './Components/VideosList';
import Home from './Components/Pages/Home';
import Music from './Components/Pages/Music';
import Dashboard from './Components/Pages/Dashboard';
import PrivateRoute from './Components/Routes/PrivateRoute';
import Contact from './Components/Pages/Contact';




function App() {
  const dispatch = useDispatch()
  const getUser = ()=>dispatch(getAuthUser())
  useEffect(()=>{
    getUser()
  },[])
  return (
    <div className="App">
        <Route path={["/add","/edit/:id"]} component={Add}/>
        
  
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/videos" component={VideosList}/>
       <PrivateRoute path="/dashboard" component={Dashboard}/>
       <Route path="/music" component={Music}/>
       <Route path="/contact" component={Contact}/>
      </Switch>
     
      
    </div>
  );
}

export default App;

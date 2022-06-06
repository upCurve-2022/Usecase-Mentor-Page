
import './App.css';

import {BrowserRouter as Router, Route, Switch}from 'react-router-dom'
import FrontPageComponent from './components/FrontPageComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListMentorComponent from './components/ListMentorComponent';
import CreateMentorComponent from './components/CreateMentorComponent';
import UpdateMentorComponent from './components/UpdateMentorComponent';


function App() {
  return (  
    <Router>
          <HeaderComponent />
            <div className="App">
              <Switch>
                <Route  exact path="/" component={FrontPageComponent}></Route>
                 <Route exact path="/mentors"  component={ListMentorComponent}></Route>
                 <Route path="/mentor" component={CreateMentorComponent}></Route>
                <Route path="/mentors/:id" component={UpdateMentorComponent}></Route>  
              </Switch>
           </div>
          <FooterComponent/>
      </Router>
  );
}

export default App;

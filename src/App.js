import React, {Component} from 'react';
import routes from './route';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            {this.showContentMenu(routes)}
          </Switch>
        </div>
      </Router>
    );
  }

  showContentMenu = (routes) => {
    let result = null;
    if(routes.length > 0){
      result = routes.map((route, key)=>{
        return (
          <Route key={key} path={route.path} exact={route.exact} component={route.main}></Route>
        )
      })
    }
    return result;
  }
}

export default App;

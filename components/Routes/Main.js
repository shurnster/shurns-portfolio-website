import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../Page/Home';
import Projects from '../Page/Projects';
import Contact from '../Page/Contact';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <Home data={this.props.data} />}/>
        <Route path='/Projects' render={() => <Projects data={this.props.data}/>}/>
        <Route path='/Contact' component={Contact}/>
      </Switch>
    );
  }
}

export default Main;

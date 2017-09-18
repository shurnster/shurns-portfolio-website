import React from 'react';
import Header from './Routes/Header';
import Main from './Routes/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
};

export default App;

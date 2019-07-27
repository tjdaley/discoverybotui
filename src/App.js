import React from 'react';
import NavigationBar from './lib/NavigationBar';
import './App.css';

class App extends React.Component
{
  constructor(props)
  {
      super(props);
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <NavigationBar />
        </header>
      </div>
    );
  }
}

export default App;

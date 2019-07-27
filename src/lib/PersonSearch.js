import React from 'react';
import NavigationBar from './lib/NavigationBar';
import PersonQuery from './lib/PersonQuery';
import Utilities from './lib/Utilities';
import './App.css';

class PersonSearch extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state = {
          searchCriteria: {
            names: [],
          },
      }
  }

  searchPerson(form)
  {
    console.log("Processing Button Click");
    console.log(form);
    let searchName = Utilities.cleanString(form.name);
    console.log("Cleaned name: "+searchName);
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <PersonQuery doSearch={this.searchPerson} />
        </header>
      </div>
    );
  }
}

export default PersonSearch;

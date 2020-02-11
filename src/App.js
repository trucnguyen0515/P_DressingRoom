import React, { Component } from 'react';
import './App.css';
import General from './Components/General/General'
import ButtonGroup from './Components/Accessory/ButtonGroup/ButtonGroup';
import Accessory from './Components/Accessory/Accessory';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenItem: []
    }
  }

  // Truyen du lieu tu component Item qua component Contain
  transferItem = (item) => {
      this.setState({
        choosenItem : [...this.state.choosenItem,item]
      }) 
  }

  reset = () => {
    this.setState({
      choosenItem : []
    })
  }

  render() {
    
    return (
      <div className="App container-fluid">
        <h1>Phong Thay Do</h1>
        <button onClick={this.reset} className="mt-3">Reset</button>
        <div className="row" style={ {marginTop:"30px"} }>
          <div className="col-md-8">
            <ButtonGroup/>
            <Accessory transferItem={this.transferItem} choosenItem={this.state.choosenItem}/>
          </div>
          <div className="col-md-4">
            <General choosenItem={this.state.choosenItem}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

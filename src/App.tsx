import React, {Component} from 'react';
import {Output} from './Terminal-Output/Output'
import './App.css';



export class App extends Component<{},{inputList:string[], value:string}>{

  constructor(props:any)
  {
    super(props);
    this.state = {inputList:["Input1", "Input2"],value:"" };
  }

  
  addList()
  {
    this.setState(prevState => ({
      inputList: [...prevState.inputList, prevState.value],
      value: ""
    }))
  }
  updateInput = (event: React.ChangeEvent<HTMLInputElement>)=> {
    this.setState({
      value: event.target.value
    })
  }
  onEnterPress = (e:any) => {
    if(e.keyCode == 13) {
      if(this.state.value!="")
      this.addList()
    }
  }

  render() {
    return (  
          <div className="App-body">
                    {Output(this.state.inputList)}

        <div className="fill-space">
        </div>
        <footer>
        <input  onChange={this.updateInput} onKeyDown={this.onEnterPress} type="text" value={this.state.value} ></input>
        </footer>
        </div>
        
        
    )
    
  }

}

export default App;

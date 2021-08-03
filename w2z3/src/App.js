import './App.css';
import React  from "react"; 
//cd SRweek2zad3\w2z3

class Timex extends React.Component {
  constructor(props){
    super(props);
    this.state={
      timestart : 0;
    };
  }
  render(){
    const { timestart } = this.state
    
    return(
      <div>
        <h1>Hello R</h1>
        <p>{timer}</p>
      </div>
    )
  }
}


function App() {
  return (
    <div>
        <Timex />
    </div>
  );
}

export default App;

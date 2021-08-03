import './App.css';
import React, {useState, useEffect} from "react";


class TimexClass extends React.Component {
  constructor(props){
    super(props);
    this.state={
      time:0,
    };
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  setTime() {
    this.setState({
      time: this.state.time + 1,
    });
  }
  render() {
    return (
      <div>
        <h2>Timer in Class Components</h2>
        <p>Time: {this.state.time} sec</p>
      </div>
    );
  }
}


function TimexFunction() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div>
      <h2>Timer in Functional Components</h2>
      <p>Time: {time} sec</p>
    </div>
  );
}

function App() {
  return (
    <div>
        <TimexClass />
        <TimexFunction />
    </div>
  );
}
export default App;
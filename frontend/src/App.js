import React, { useState, useEffect, Component } from "react";
import Contacts from "./components/contacts";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  state = {contacts: []}

  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }

  componentDidMount() {
    fetch("/contacts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
  }
}

// function App() {
//   const [currentTime, setCurrentTime] = useState(0);

//   useEffect(() => {
//     fetch("/time")
//       .then((res) => res.json())
//       .then((data) => {
//         setCurrentTime(data.time);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         ... no changes in this part ...
//         <p>The current time is {currentTime}.</p>
//       </header>
//     </div>
//   );
// }

export default App;

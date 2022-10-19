import "./App.css";
import { useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Routes,Route, json } from "react-router-dom";
import Issueboard from "./components/Issueboard";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";


function App() {
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const [showdata, setShowData] = useState([]);

  useEffect(() => {
    localStorage.setItem("showdata", JSON.stringify(showdata));
  }, [showdata]);
  //github.com/charles16987/react_project.git

  // useEffect(() => {
  //   const localstor = JSON.parse(localStorage.getItem("showdata")); git remote add origin https://github.com/charles16987/react_project.git
  //   console.log(localstor)
  //   if (localstor) {
  //     setShowData(localstor);
  //   }
  // }, []);

  https: return (
    <Router>
      <div className="App">
        <Nav />

        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Homepage
                  input={input}
                  setInput={setInput}
                  input1={input1}
                  setInput1={setInput1}
                  showdata={showdata}
                  setShowData={setShowData}
                />
              }
            />
            <Route
              path="/Issueboard"
              element={
                <Issueboard
                  input={input}
                  setInput={setInput}
                  input1={input1}
                  setInput1={setInput1}
                  showdata={showdata}
                  setShowData={setShowData}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}








export default App;

import React from 'react'
import { useState ,useEffect } from 'react'



const Issueboard = ({input,input1,setInput,setInput1,showdata,setShowData}) => {
  


 const clickText = (e) => {
  
  setInput(e.target.value)
 
 // console.log(e.target.value);
 }

  const clickText1 = (e) => {
    setInput1(e.target.value);
   // console.log(e.target.value);
  };
  

 const clickSave = (e) => {
 
  e.preventDefault();
   if (input == "") {
     return alert("fill Title and Description");
   }
   
  setShowData([...showdata, { text:input,text1:input1 ,id:Math.floor(Math.random()*1000),}]);
     setInput1('');
    setInput('');
 }
  


  return (
    <div>
      <h1 className="h1">Create issue Board</h1>

      <form className="inputcontainer">
        <div className="inputbox">
          <label>Title</label>
          <input type="text" value={input} onChange={clickText} name="text" />
        </div>
        <div className="inputbox">
          <label>Description</label>
          <textarea
            rows="4"
            cols="50"
            name="text1"
            onChange={clickText1}
            value={input1}
            placeholder="Enter text here..."
          ></textarea>
        </div>

        <div className="inputbtn">
          <button onClick={clickSave}>save</button>
        </div>
      </form>
    </div>
  );
}

export default Issueboard

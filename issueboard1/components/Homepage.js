import React from 'react'
import { createElement } from 'react';

const Homepage = ({
  input,
  input1,
  setInput,
  setInput1,
  showdata,
  setShowData,
}) => {



 const editBtn =()=>{
  let span = document.querySelector(".title");
  const inputEl = document.createElement('input')
  console.log(inputEl)
   inputEl.appendChild(span)


  }

  
  return (
    <div>
      <h1>
        {showdata[0] == undefined ? "No List To Show  issue Data" : "list Issue Data"}
      </h1>
      <>
        {showdata.map((show) => {
          return (
            <div key={show.id} className="showdata">
              <div className="showtext">
                <h2>
                  Title: <span className='title'>{show.text}</span>
                </h2>
                <h2>
                  Description: <span className='description'>{show.text1}</span>
                </h2>
              </div>
              <div>
                <i className="fas fa-sharp fa-solid fa-pen-to-square" onClick={editBtn}></i>
                <i
                  className="fas fa-solid fa-xmark"
                  onClick={() => {
                    setShowData(
                      showdata.filter((e) => {
                        console.log(e.id, show.id);
                        return e.id !== show.id;
                      })
                    );
                  }}
                ></i>
              </div>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Homepage

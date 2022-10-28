import React from 'react'

const List = () => {
 var arr =["name","bio","date",'MOnth']
 var add =0;
    for(var i =0;i<arr.length;i++){
       add += <h1>{arr[i]}</h1>
       
    }
  return (
    <div>
        
    </div>
  )
}

export default List

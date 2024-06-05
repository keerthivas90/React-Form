import React from 'react'
 
const Loading = ({setLoader}) => {
  return (
    <div>
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
       
    <h2>Thank you! Form Submitted Successfully </h2>
   <center> <button onClick={()=>setLoader(false)}>Home</button> </center>
    
    </div>
  )
}

export default Loading
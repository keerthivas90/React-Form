import React, { useReducer, useState } from 'react';
import './App.css'
import Loading from './Loading';

const initialstate = {
name:"",
email:"",
phone:"",
password:""
}

const reducer =(state,action)=>{
    switch(action.type){
        case "changeFieldValue":
            return{
                ...state,
                [action.field]:action.payload
            }
        case "reset":
            return{
               state:initialstate
                }
        default :
        return initialstate;
    }
}

const Form = () => {
    const [state,dispatch]=useReducer(reducer,initialstate);
    const [loader,setLoader]=useState(false);
    const changeFieldValue = (field)=>(event)=>{
        dispatch({ type:"changeFieldValue",field,payload:event.target.value})
    }
     
    const FormSubmit = (e)=>{
        e.preventDefault();
       console.log(state)
        setLoader(true);
        dispatch("reset");
      
    }
   
   
  return (
    <div className='App'>
        <h1> Form  </h1>   
      
        {loader===true? <Loading setLoader={setLoader}/> : 
        <div>
        <center>  <form onSubmit={FormSubmit}>
            <label> Name </label>
            <input type="text"  placeholder="Name" value={state.name}  title="Name" name='name' onChange={changeFieldValue('name')}  required />
            <label> Email </label>
            <input type="email"  placeholder="name@mail.com"  value={state.email} title="Email ID"  name='email' onChange={changeFieldValue('email')} required />
            <label> Phone </label>
            <input type="tel" name="phone" placeholder="888 888 8888"  value={state.phone}  maxLength="10"  title="Ten digits code"  onChange={changeFieldValue('phone')} required/>  
            <label> Password </label>
            <input type="password"  name="password"  value={state.password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="password" onChange={changeFieldValue('password')}  required />
            <button type='submit'> Submit </button>            
        </form>
        <button onClick={()=>dispatch("reset")} > Reset </button>
        </center>
        </div>
    }      
        
        
    </div>
  )
}

export default Form
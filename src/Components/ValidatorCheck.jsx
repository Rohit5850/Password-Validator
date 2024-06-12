import React, { useEffect, useState } from "react";
import './ValidatorApp.css'
import validator from "validator";

const ValidatorCheck = () =>{

    const [err,setErr] = useState('')

   

    function Validate (value){

        if(validator.isStrongPassword(value,{minLength:8, minLowercase: 1, minUppercase :1, minNumbers:1 , minSymbols:1})){
            setErr('Is Storng Password') 
        }else{
            setErr('Is Not Strong Password')
        }

        if(value === ''){
            setErr('Enter Some Word')
        }

        console.log(value)
    }




    return(

        <div className="validatorCheck">
               <div className="app_heading">
                    <h2>Checking Password Strength</h2>
               </div>

               <div className="enterData">
                   <label>Enter Password:</label>
                   <input type="text" onChange={(e)=>Validate(e.target.value)}/>

                      {err === '' ? null : <div style={{fontWeight:'bold', color : 'red'}}>{err}</div>}
               </div>



        </div>
    )
}

export default ValidatorCheck;
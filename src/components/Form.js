import React, { useState,useEffect } from 'react'
import {Box,TextField,Typography,Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './App.css';
import Validation from './Validation';


const Form = () => {
  const [isSignup,setIsSignup]= useState(false);
  const [inputs,setInputs]=useState({
            fname:"",lname:'', email:"",password:"",phone:'',date:'',gender:'',date:'',

  });
  const handlechange=(e)=>{
            setInputs((prevState)=>({
             ...prevState,
             [e.target.name]:[e.target.value]

            }))

  }
  const [records,setRecords]=useState([]);
  const handlesubmit=(e)=>{
            e.preventDefault();
            console.log(inputs);    
            setErrors(Validation(inputs));
            setDataIsCorrect(true);
            const newRecords={...inputs, id:new Date().getTime().toString()};
            setRecords([...records,newRecords])

  }
  
  const resetstate=()=>{
    setIsSignup(!isSignup);

    setInputs({fname:'',lname:'',email:'',password:'',phone:'',gender:'',date:'',})
    setErrors({fname:'',lname:'',email:'',password:'',phone:'',gender:'',date:'',})
   
  }
  const [errors,setErrors]=useState({});
  
  const [dataIsCorrect, setDataIsCorrect]=useState(false);

  useEffect(()=>{
    if(Object.keys(errors).length===0 && dataIsCorrect) {
    //  submitForm(true);

    }
   },[errors]);
  console.log(isSignup);
  return (
    
    <div>
      <form onSubmit={handlesubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center" justifyContent={"center"}
          margin="auto" marginTop={3} padding={3}
          borderRadius={5} boxShadow={"10px 10px 10px #ccc"}
          sx={{":hover":{
                    boxShadow:"20px  20px 20px #ccc"
                        }
                        }}>
            <Typography variant="h3" padding={3} textAlign="center">
              {isSignup? "SignUp":"Login"}
            </Typography>
            {isSignup &&<TextField autoComplete="off" fullWidth onChange={handlechange} name="fname" margin="normal" type={'text'} variant="outlined" placeholder="First Name" value={inputs.fname}/>}
            { isSignup && errors.fname && <p className="error">{errors.fname}</p>}

            {isSignup && <TextField fullWidth onChange={handlechange} name="lname" margin="normal" type={'text'} variant="outlined" placeholder="Last Name" value={inputs.lname}/>}
            {isSignup && errors.lname && <p className="error">{errors.lname}</p>}

            <TextField fullWidth onChange={handlechange} value={inputs.email} name="email" margin="normal" type={'email'} variant="outlined" placeholder="Email"/>
            {errors.email && <p className="error">{errors.email}</p>} 

            <TextField fullWidth onChange={handlechange} value={inputs.password} name="password" margin="normal" type={'password'} variant="outlined" placeholder="Password"/>
            {errors.password && <p className="error">{errors.password}</p>}

            {isSignup && <TextField fullWidth onChange={handlechange} value={inputs.phone} name="phone" margin="normal" type={'phone'} variant="outlined" placeholder="Phone No."/>}
            {isSignup && errors.phone && <p className="error">{errors.phone}</p>}

            {isSignup && <FormControl  fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label" name="gender">Gender</InputLabel>
                <Select
                  textAlign="center"
                  justifyContent="center"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={inputs.gender}
                  label="Gender"
                  onChange={handlechange}
                  name="gender"

                >
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={'Male'}>Male</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
            </FormControl>}
            {isSignup && errors.gender && <p className="error">{errors.gender}</p>}
            

            {isSignup && <Typography  onChange={handlechange}
                   fullWidth padding={3} margin="normal" maxHeight={5} >
              Birthday:
              <input type="date" id="birthday" name="date" value2={inputs.date}></input>

            </Typography>}
            {isSignup && errors.date && <p className="error">{errors.date}</p>}

            <Button  onClick={handlesubmit} onChange={resetstate} type="submit" sx={
              {marginTop:5, backgroundColor:"#c24450",borderRadius:2}
            }variant="contained">
              {isSignup?"Signup":"Login"}
              </Button>

            <Typography sx={
              {marginTop:4}
            }>{isSignup? "Go back to the login page":" Are you a new user?"}
          </Typography>

          <Button  onClick={resetstate} sx={
              {color:"blue"}
            }>
              {isSignup? "Login": "Signup"}  
          </Button>

          </Box>
      </form>
    </div>
  )
}

export default Form



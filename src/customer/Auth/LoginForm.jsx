import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {Button,Grid,TextField} from '@mui/material'
import { getUser, login} from '../../State/Auth/Action';

const LoginForm = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt")
    const {auth}=useSelector(store=>store)

   useEffect(()=>{
      if(jwt){
        dispatch(getUser(jwt))
      }
    
   },[jwt,auth.jwt])

    

    

    const handleSubmit=(event)=>{
    event.preventDefault()

    const data=new FormData(event.currentTarget);

    const userData={
       
        email:data.get("email"),
        password:data.get("password")

    }
    dispatch(login(userData))
     console.log("userData",userData)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
           
           
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id='email'
                name='email'
                label='Email'
                fullWidth
                autocomplete='email'
                />
            </Grid>
            <Grid item xs={12} >
                <TextField
                required
                id='password'
                name='password'
                label='Password'
                fullWidth
                autocomplete='password'
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                className='bg-[#9155FD] w-full'
                type='submit'
                variant='contained'
                size='large'
                sx={{padding:".8rem 0",bgcolor:"#9155FD"}}>
                    Login
                </Button>
            </Grid>
        </Grid>

      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
            <p>if you dont have  account?</p>
            <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button>
        </div>
      </div>
    </div>

  )
}

export default LoginForm

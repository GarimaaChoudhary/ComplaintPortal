import React, { useEffect, useState } from 'react'
import './Navigation.css'
import {Avatar,Button,Menu,MenuItem} from "@mui/material";
import {deepPurple} from "@mui/material/colors";
import AuthModal from '../../Auth/AuthModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../State/store';
import { getUser, logout } from '../../../State/Auth/Action';


const Navigation = () => {
  const[open,setOpen]=useState(false);
  const [openAuthModal,setOpenAuthModal]=useState(false);
  const [anchorEl,setAnchorEl] =useState(null);
  const openUserMenu = Boolean(anchorEl);
  const {auth}=useSelector(store=>store)
  const navigate=useNavigate();
  const jwt=localStorage.getItem("jwt");
  const dispatch=useDispatch();
  const location=useLocation();
  
  
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null); 
  };
  const handleOpen=()=>{
    setOpenAuthModal(true);
  }
  const handleClose=() => {
    setOpenAuthModal(false);
    
  }

  useEffect(()=> {
    if(jwt){
      dispatch(getUser(jwt))
    }
  },[jwt,auth.jwt])

  useEffect(()=>{
   if(auth.user){
    handleClose()
   }
   if(location.pathname==="/login" || location.pathname==="/register"){
    navigate(-1)
   }
  },[auth.user])

  const handleLogout=()=>{
    dispatch(logout())
    handleCloseUserMenu()
  }
  return (
   <>
     <nav className='main-nav'>
     <div className='logo'>
     Welcome to Indian Oil Complaint Portal
      </div>

     <div className='SignIn' >
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user?.firstName ? (
                    <div>
                      <Avatar
                      className="text-white"
                      onClick={handleUserClick}
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}

                      sx={{
                        bgcolor:deepPurple[500],
                        color:"white",
                        cursor: "pointer"

                      }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                      <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openUserMenu}
                      onClose={handleCloseUserMenu}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                      >
                      <MenuItem onClick={handleCloseUserMenu}>
                        Profile
                      </MenuItem>

                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                     

                     
                      </Menu>
                      </div>

                  ):(
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                     >
                      Signin
                     </Button>
                      )} 
                    </div>
                      </div>

                  
     </div>
     <AuthModal handleClose={handleClose} open={openAuthModal}/>
                  
    
     </nav>
   
   </>
  
  )}

export default Navigation

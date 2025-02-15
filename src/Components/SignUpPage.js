import React from 'react'
import './SignUpPage.css'
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

export default function SignUpPage() {
  

  return (
    <div className='signup-main-container'>
            <div className='signup-right-div'>
                      <div className='signup-right-inner-div'>
                         <div className='signup-right-inner-top-div'>
                                 <img src="/Pictures/Logo.svg" alt="" />
                                     <div className='signup-right-inner-detail-d'>
                                         <h2>Register your Account</h2>
                                         <p>The top platform for launching and accelerating blockchain and cryptocurrency projects</p>
                                     </div>
                         </div>


                           <div className='signup-right-upper-div'>
                                    <div className='signup-right-inner-bottom-div'>
                                                    <div className='label-input-div'>
                                                    <label>Full Name</label>
                                                    <input type="text" placeholder='Enter Your name'/>
                                                    </div>

                                                    <div className='label-input-div'>
                                                    <label>Email Address</label>
                                                    <input type="email" placeholder='Enter email address...'/>
                                                    </div>
                                                      
                                              

                                                    <div className='label-input-div'>
                                                        <label>Password</label>
                                                    <input type="password" placeholder='Enter Password...'/>
                                                    </div>


                                                <div className='label-input-div'>
                                                <label>Confirm Password</label>
                                                <input type="password" placeholder='Enter confirm Password...'/>
                                                </div>


                                                    <div className='label-input-div'>
                                                    <label>Telegram Username</label>
                                                    <input type="Password" placeholder='Enter confirm Password...'/>
                                                    </div>


                                                    <div className='label-input-div'>
                                                    <label>Referral Code</label>
                                                    <input type="text" placeholder='Enter referral code'/>
                                                    </div>
                                                    
                                                    <div className='label-input-div1'>
                                                    <Checkbox defaultChecked  color='black' varient='outlined' icon={<CircleOutlinedIcon/>}
                                                        checkedIcon={<CheckCircleSharpIcon/>}
                                                        
                                                        className='box'
                                                    />
                                                    <p>Yes, I understand and agree to Terms of Services</p>
                                                    </div>
                                            </div>
                            
                                            <div className='signup-bottom-last-div'>
                                                        <button className='signup-btn'>Create Account</button>
                                                                <div className='signup-bottom-last-div-link'>
                                                                        <p>Already have an account?</p>
                                                                        <a href="">Login</a>
                                                                </div>
                                            </div>
                            </div>         

                                        
                      </div>
            </div>
            


            <div className='signup-pic'><img src="/Pictures/signup-pic.svg" alt="" /></div>
    </div>
  )
}

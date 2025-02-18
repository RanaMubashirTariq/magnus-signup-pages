import React, { useState } from 'react'
import './SignInPage.css';
import { Link } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";  // Import auth directly



export default function SignInPage() {

          const [email , setEmail] = useState('');
          const [password , setPassword] =useState('')
           const [showPassword, setShowPassword] = useState(false);


          const signIn = async () => {
            try {
              const userCredential = await signInWithEmailAndPassword(auth, email, password);
              console.log("User signed in:", userCredential.user);
              alert("Sign in successful! 🎉");
            } catch (error) {
              console.error("Error signing in:", error.message);
              alert(error.message);  // Show error to user
            }
          };
          


  return (
    <div className='signin-main-container'>
                   <div className='signin-right-div'>
                      <div className='signin-right-inner-div'>
                         <div className='signin-right-inner-top-div'>
                                 <img src="/Pictures/Logo.svg" alt="" />
                                     <div className='signin-right-inner-detail-d'>
                                         <h2>Welcome Back</h2>
                                         <p>The top platform for launching and accelerating blockchain and cryptocurrency projects</p>
                                     </div>
                         </div>


                           <div className='signin-right-upper-div'>
                                    <div className='signin-right-inner-bottom-div'>

                                                    <div className='label-input-div'>
                                                    <label>Email Address</label>
                                                    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter email address...'/>
                                                    </div>
                                                      
                                              

                                                    <div className='label-input-div'>
                                                        <label>Password</label>
                                                        <div className='icon-d'>
                                                           <input onChange={(e)=>setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder='Enter Password...'/>
                                                          <div
                                                                className="toggle-btn"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                              >
                                                                {showPassword ? <i class="fa-solid fa-eye"/> : <i class="fa-solid fa-eye-slash"/>} 
                                                              </div>
                                                        </div>
                                                    </div>


                                               
                                                    
                                                    <div className='label-input-div1'>
                                                           <a href="">Forgot password?</a>
                                                    </div>
                                            </div>
                            
                                            <div className='signin-bottom-last-div'>
                                                        <button className='signin-btn' onClick={signIn}>Sign in</button>
                                                                <div className='signin-bottom-last-div-link'>
                                                                        <p>Don’t have an account?</p>
                                                                        <Link to="/SignUpPage">Sign up</Link>
                                                                </div>
                                            </div>
                            </div>         

                                        
                      </div>
            </div>



            {/* part 2 */}

            <div className='signin-left-varificaton-code'>
                 <div className='signin-left-div-pic'>
                     <img src="/Pictures/signIn-pic.svg" alt="" />
                 </div>

                    <div className='signin-left-descripton'>
                        <div className='signin-left-description-detail'>
                             <h2>Your Edge in Forex & Crypto Markets</h2>
                             <p>Get real-time insights with expert analysis and market trends. Stay ahead and make informed trading decisions! 🚀</p>
                        </div>

                         <div className='slider2-div'><img src="/Pictures/slider1.svg" alt="" /></div>
                    </div>
            </div>
    </div>
  )
}

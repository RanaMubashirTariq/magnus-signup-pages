import React ,{useState} from 'react'
import './SignUpPage.css'
import SignUpVarification  from './SignUpVarification.js';
import Checkbox from '@mui/material/Checkbox';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import { Link , useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {ref , set} from 'firebase/database';
import {auth , database} from './firebase.js';

export default function SignUpPage() {

         const navigate = useNavigate();
      const [fullName , SetFullName] = useState ('')
      const [email , SetEmail]= useState('')
      const [password , SetPassword]= useState('')
      const [confirmPassword , SetConfirmPassword]= useState('')
      const [telegramUsername , SetTelegramUsername]= useState('')
      const [referralCode , SetReferralCode] = useState('')
      const [showPassword, setShowPassword] = useState(false);

      const signUp = async () => {
          if(!fullName || !email || !password || !confirmPassword  || !telegramUsername || !referralCode){
            alert("Fill the Reming box");
            return;
          }
         if(password !== confirmPassword){
            alert('password does not match');
            return ;
          }
              
              try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user
                  
                await set(ref(database , 'user/' + user.uid),{
                    fullNmae : fullName,
                    email : email,
                    password : password,
                    confirmPassword : confirmPassword,
                    telegramUsername : telegramUsername,
                    referralCode : referralCode,
                });

                // const verificationCode = Math.floor(1000 + Math.random() * 9000);
                // localStorage.setItem("verificationCode", verificationCode);
                // localStorage.setItem("userEmail", email);

                 const verificationCode = Math.floor(1000 + Math.random() * 9000);
                 localStorage.setItem('verificationCode' , verificationCode);
                 localStorage.setItem('userEmail' , email); 
                
                console.log("User Created:", user);
                alert("Account Created Successfully! 🎉");

                navigate('/SignUpVarification');
      
              } catch (error) {
                console.error("Error signing up:", error.message);
                alert(error.message);
              }
            };
  

           

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
                                                    <input onChange={(e)=>SetFullName(e.target.value)} type="text" placeholder='Enter Your name'/>
                                                    </div>

                                                    <div className='label-input-div'>
                                                    <label>Email Address</label>
                                                    <input onChange={(e)=>SetEmail(e.target.value)} type="email" placeholder='Enter email address...'/>
                                                    </div>
                                                      
                                              

                                                    <div className='label-input-div'>
                                                        <label>Password</label>
                                                        <div className='icon-d'>
                                                           <input onChange={(e)=>SetPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder='Enter Password...'/>
                                                          <div
                                                                className="toggle-btn"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                              >
                                                                {showPassword ? <i class="fa-solid fa-eye"/> : <i class="fa-solid fa-eye-slash"/>} 
                                                              </div>
                                                        </div>
                                                       
                                                    </div>


                                                <div className='label-input-div'>
                                                <label>Confirm Password</label>
                                                <div className='icon-d'>
                                                   <input onChange={(e)=>SetConfirmPassword(e.target.value)} 
                                                       type={showPassword ? "text" : "password"}
                                                   placeholder='Enter confirm Password...'  />   
                                                   <div
                                                              className="toggle-btn"
                                                              onClick={() => setShowPassword(!showPassword)}
                                                            >
                                                              {showPassword ? <i class="fa-solid fa-eye"/> : <i class="fa-solid fa-eye-slash"/>} 
                                                            </div>
                                                
                                                </div>
                                                </div>
                                                

                                                    <div className='label-input-div'>
                                                    <label>Telegram Username</label>
                                                    <div className='icon-d'>
                                                      <input onChange={(e)=>SetTelegramUsername(e.target.value)} type={showPassword ? "text" : "password"} placeholder='Enter confirm Password...'/>
                                                    
                                                      <div
                                                                className="toggle-btn"
                                                                onClick={() => setShowPassword(!showPassword)}
                                                              >
                                                                {showPassword ? <i class="fa-solid fa-eye"/> : <i class="fa-solid fa-eye-slash"/>} 
                                                              </div>

                                                    </div>
                                                   
                                                   
                                                    </div>


                                                    <div className='label-input-div'>
                                                    <label>Referral Code</label>
                                                    <input onChange={(e) => SetReferralCode(e.target.value)} type="text" placeholder='Enter referral code'/>
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
                                                        <button className='signup-btn' onClick={signUp}>Create Account</button>
                                                                <div className='signup-bottom-last-div-link'>
                                                                        <p>Already have an account?</p>
                                                                        <Link to="/SignInPage">Login</Link>
                                                                </div>
                                            </div>
                            </div>         

                                        
                      </div>
            </div>
            


             {/*  part 2 */}

             <div className='signup-left-varificaton-code'>
                 <div className='signup-left-div-pic'>
                     <img src="/Pictures/signup-p.svg" alt="" />
                 </div>

                    <div className='signup-left-descripton'>
                        <div className='signup-left-description-detail'>
                             <h2>The Leading Platform for Automated Trading</h2>
                             <p>Experience hands-free trading with Magnus Autotrader. Your profits, our strategies—secure, efficient, and built for success.</p>
                        </div>

                         <div className='slider2-div'><img src="/Pictures/slider1.svg" alt="" /></div>
                    </div>
            </div>

    </div>
  )
}

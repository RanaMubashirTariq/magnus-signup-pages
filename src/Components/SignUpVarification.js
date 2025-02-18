import React, { useEffect, useState , useRef} from 'react'
import './SignUpVarification.css';

export default function SignUpVarification() {
      const [code, setCode] = useState(["", "", "", ""]);  
      const [inputCode , setInputCode] = useState('')
      const [generatedCode , setGeneratedCode] = useState('')
      const [userEmail , setUserEmail] = useState('')
      const [showBox , setShowBox] = useState(false)
      const inputRefs = [useRef(), useRef(), useRef(), useRef()];

      useEffect(()=>{
        setGeneratedCode(localStorage.getItem('verificationCode' || ''))
        setUserEmail(localStorage.getItem('userEmail' || 'your email'))
      },[])


           
      const handleChange = (index, value) => {
        if (!/^\d?$/.test(value)) return; // Only allow digits
    
        let newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
    
        // Move to next input if a digit is entered
        if (value && index < 3) {
          inputRefs[index + 1].current.focus();
        }
      };
    
      // Handle backspace to move to the previous input
      const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
          inputRefs[index - 1].current.focus();
        }
      };

              

      const verifyCode = () => {
        if (inputCode === generatedCode) {
          setShowBox(true);
          setTimeout(() => {
            setShowBox(false);
            alert("Verification successful!");
          }, 2000);
        } else {
          alert("Invalid verification code. Please try again.");
        }
      };
          

  return (
    <div className='signup-v-main-container'>
          <div className='signup-v-right-div'>
                      <div className='signup-v-right-inner-div'>
                         <div className='signup-v-right-inner-top-div'>
                                 <img src="/Pictures/Logo.svg" alt="" />
                                     <div className='signup-v-right-inner-detail-d'>
                                         <h2>Account Verification</h2>
                                         <p>4-Digit verification code has been sent on your email jimmycarter@magnus.com</p>
                                     </div>
                         </div>


                           <div className='signup-v-varification-right-upper-div'>
                           {code.map((digit, index) => (
                                                <input
                                                  key={index}
                                                  ref={inputRefs[index]}
                                                  type="text"
                                                  // maxLength="1"
                                                  value={digit}
                                                  onChange={(e) => handleChange(index, e.target.value)}
                                                  onKeyDown={(e) => handleKeyDown(index, e)}
                                                  className="label-input-div-2"
                                                />
                                              ))}
                            </div>    

                            <div className='signup-v-bottom-last-div-2'>
                                                        <button className='signup-v-btn' onClick={verifyCode}>Verify now</button>
                                                                <div className='signup-v-bottom-last-div-link-2'>
                                                                        <p>Didn’t receive the code?</p>
                                                                        <a href="">Request again</a>
                                                                </div>
                                            </div>     

                                        
                      </div>
            </div>

                {/*  part 2 */}

            <div className='signup-v-left-varificaton-code'>
                 <div className='signup-v-left-div-pic'>
                     <img src="/Pictures/varification-pic.svg" alt="" />
                 </div>

                    <div className='signup-v-left-descripton'>
                        <div className='signup-v-left-description-detail'>
                             <h2>Your Gateway to Financial Excellence</h2>
                             <p>From interactive courses to expert market reports and live education, Magnus Academy is your all-in-one learning hub.</p>
                        </div>

                         <div className='slider2-div'><img src="/Pictures/slider2.svg" alt="" /></div>
                    </div>
            </div>
    </div>
  )
}

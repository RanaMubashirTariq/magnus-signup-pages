import logo from './logo.svg';
import './App.css';
import SignUpPage from './Components/SignUpPage';
import SignUpVarification from './Components/SignUpVarification';
import SignInPage from './Components/SignInPage';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'

function App() {
  return (
     <div className='App'>
    <Router>
             <Routes>
             <Route path='/' element={<SignUpPage/>}/>
                  <Route path='/SignUpPage' element={<SignUpPage/>}/>
                  <Route path='/SignInPage' element={<SignInPage/>}/>
                  <Route path='/SignUpVarification' element={<SignUpVarification/>}/>
             </Routes>
    </Router>
    {/* <SignUpVarification/> */}
    {/* <SignInPage/> */}

     </div>
  );
}

export default App;

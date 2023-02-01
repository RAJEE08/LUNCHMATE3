import { LogIn  }from './LogIn';
import {Forget} from './Forget';
import { NewPassword } from './NewPassword';
import { SignUp } from './SignUp';
import { Routes , Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Carousel from './Carousel';
import About from './About';
import Menu from './menu';
import Payby from './payby';
import Cash from './cash';
import Paybyd from './paybyd';
import Paybyn from './paybyn';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/Forget" element={<Forget/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/NewPassword" element={<NewPassword/>}/>
        <Route path="/Carousel" element={<Carousel/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/pay" element={<Payby/>}/>
        <Route path="/cod" element={<Cash/>}/>
        <Route path="/dc" element={<Paybyd/>}/>
        <Route path="/nb" element={<Paybyn/>}/>
      
      </Routes>
    </div>
  );
}

export default App;                                                                                                                                                                                                   

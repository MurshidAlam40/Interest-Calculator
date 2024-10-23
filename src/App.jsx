import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';
import MonthCalculator from './Components/MonthCalculator'
import SimpleInterest from './Components/Interest Calculator/SimpleInterest';
import NavbarPage from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompoundInterest from './Components/Compound Interest/CompoundInterest';
import Footer from './Components/Footer';

function App() {

  return (
   <BrowserRouter>
    <NavbarPage/>
        <Routes>
            <Route path='/' element={<SimpleInterest/>}/>
            <Route path='/months' element={<MonthCalculator/>}/>
            <Route path='/bankloan' element={<CompoundInterest/>}/>
        </Routes>
      <Footer/>
   </BrowserRouter>
  )
}

export default App

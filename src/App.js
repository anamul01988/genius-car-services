
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
           <Route path= "/" element={<Home/>}> </Route>
           <Route path= "/about" element={<About/>}> </Route>
           <Route path= "/login" element={<Login/>}> </Route>
           <Route path= "/signup" element={<SignUp></SignUp>}> </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

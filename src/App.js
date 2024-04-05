import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SignupForm from './createaccount/SignupForm';
import LoginForm from './createaccount/LoginForm';
import Home from './components/Home';
import Video from './components/Video';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<SignupForm/>} ></Route>
   
    <Route path="/login" element={<LoginForm/>} ></Route>
    <Route path="/home" element={<Home/>} ></Route>
    <Route path='/video' element={<Video/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

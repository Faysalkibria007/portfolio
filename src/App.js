import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Project from './Pages/Project/Project';
import AOS from "aos";
import "aos/dist/aos.css";
import Blog from './Pages/Blog/Blog';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Footer from './Pages/Shared/Footer/Footer'
import DotRing from './Components/DotRing/DotRing';
AOS.init({
  duration:"2000",
  delay:"50",
  easing:"ease-in-out-cubic"
});
function App() {
  return (
    <div className="body">
      <BrowserRouter>
      <NavBar/>
      <DotRing/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/project/:id' element={<Project></Project>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

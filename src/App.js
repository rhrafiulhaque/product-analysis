import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home'
import NavBar from './Component/NavBar/NavBar';
import Review from './Component/Review/Review';
import Dashboard from './Component/Dashboard/Dashboard';
import Blogs from './Component/Blogs/Blogs';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div>
     <NavBar></NavBar>

     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/review' element={<Review></Review>}></Route>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;

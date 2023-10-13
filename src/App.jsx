import Counter from './components/Counter';
import NavMenu from './components/Navbar';
import HomePage from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Users from './components/Users';
import Products from './pages/Products';
import NotFoundPage from './pages/NotFound';
import QuotePage from './components/Quote';
import {Routes, Route} from 'react-router-dom';
import LiveCounter from './components/LiveCounter';
import { ToastContainer} from 'react-toastify';
import SecureRoute from './routes/SecureRoute';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');

  function searchProducts(e){
    setSearchValue(e.target.value);
  }

  return (
    <>
    <NavMenu searchProducts={searchProducts}/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='' element={<SecureRoute/>}>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products searchValue={searchValue}/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/quote' element={<QuotePage/>}/>
        <Route path='/live-counter' element={<LiveCounter/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App

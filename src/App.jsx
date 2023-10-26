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
import GlobalContext from './context/GlobalContext';


function App() {

  const stdUser = [
    {
    id:1,
    name:'ram'
    },
    {
    id:2,
    name:'shyam'
    },
    {
    id:3,
    name:'hari'
    },
    {
    id:4,
    name:'gopal'
    }
  ]
  return (
    <>
    <GlobalContext.Provider value={stdUser}>
    <NavMenu/>
    <Routes>
      {/* <Route path='/' element={<HomePage/>}/> */}
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='' element={<SecureRoute/>}>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products stdUser={stdUser}/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/quote' element={<QuotePage/>}/>
        <Route path='/live-counter' element={<LiveCounter/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    </Routes>
    <ToastContainer/>
    </GlobalContext.Provider>
    </>
  )
}
export default App

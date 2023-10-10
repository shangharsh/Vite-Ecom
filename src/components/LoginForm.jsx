
import {Form, Button} from 'react-bootstrap';
import {toast} from 'react-toastify';
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { errorToast, successToast } from '../services/toast.service';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    const data = {
      email,
      password,
    };
    
    axios.post('https://backend-mu-pied.vercel.app/users/login',data)
    .then((res) => {
      console.log(res)
      if(res.data.status){
        navigate('/products');
        successToast(res.data.message);
      }
    })
    .catch((err) => {
      console.log(err.message)
      errorToast(err.message);
    });
  }

  return (
    

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} autoComplete='username'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' onChange={(e)=>setPassword(e.target.value)} placeholder="Password" autoComplete='current-password'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group className='text-center'>
      <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
      </Form.Group>
      <Form.Group className='text-center'>
      <p>Don't have an account? <a href="/register" className="text-uppercase text-primary">Register Here</a> </p>
      </Form.Group>
      <Form.Group>
        <p className="text-center">Or SignUp using</p>
        <p className="text-center"> <a href="#"><i className="fa-brands fa-facebook fs-1 text-info me-2"></i></a><a href="#"><i className="fa-brands fa-google fs-1 text-danger ms-2"></i></a></p>
      </Form.Group>
    </Form>
  )
}

export default Login
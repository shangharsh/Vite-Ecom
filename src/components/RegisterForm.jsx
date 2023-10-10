import {React, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { errorToast, successToast } from '../services/toast.service';

const RegisterForm = () => {
  const [name, setName] =useState('')
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    axios.post('https://backend-mu-pied.vercel.app/users/register', data)
    .then((res) =>{
      console.log(res);
      if(res.data.status){
        navigate('/login');
        successToast(res.data.message);
      }
    })
    .catch((err)=>{
      errorToast(err.message);
    })

  }
  return (

    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Full Name" onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} autoComplete='username'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" onChange={(e)=>setPassword(e.target.value)} autoComplete='current-password'/>
      </Form.Group>
      <Form.Group className='text-center'>
      <Button variant="primary" type="SignUp" onClick={handleSubmit}>
        Submit
      </Button>
      </Form.Group>
      <Form.Group className='text-center'>
        <p>Already have an account? <a href="/login" className="text-uppercase text-primary">login</a> </p>
      </Form.Group>
    </Form>             
  )
}

export default RegisterForm
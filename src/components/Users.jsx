import {React,useState,useEffect} from 'react';
import axios from 'axios';
import {Card,CardHeader,CardBody,CardFooter,Button} from 'react-bootstrap';

const UsersPage = () => {
  const [user, setUser] = useState();
  useEffect(()=>{
    getUsers();
  },[])

  const getUsers = async () =>{
    const response = await axios.get('https://dummyjson.com/users');
    setUser(response.data.users);
    // console.log(user)
    console.log(response.data)
  }
  return (
    <>
     <h4 className='text-center mt-3'>Users</h4>
    <div className='container-fluid d-flex flex-wrap justify-content-around align-items-center gap-3 text-center'>
      {user?.map(({id,firstName,lastName,image})=>{
      return(
      <Card key={id} style={{width:'18rem', height:'250px'}}>
        <CardHeader className='w-100 h-50'>
          <img src={image} alt='product-image' className='w-100 h-75' />
        </CardHeader>
        <CardBody>
          <div className='costContainer text-center'>
            <p className='text-success'>Name: {firstName} {lastName}</p>
          </div>
        </CardBody>
        <CardFooter>
          <Button variant='primary'>View</Button>
          <Button variant='secondary' className='ms-3 me-3'>Edit</Button>
          <Button variant='danger'>Delete</Button>
        </CardFooter>
      </Card>
  )
      })}
    </div>
    </>
  )
}

export default UsersPage
import {React, useState} from 'react'
import {Button, Card, CardHeader, CardBody, CardFooter} from 'react-bootstrap';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = (e) =>{
        e.preventDefault();
        setCount(count + 1);
    };
    const decrement = (e) =>{
        e.preventDefault();
        setCount(count - 1);
    };
    const reset = (e) =>{
        e.preventDefault();
        setCount(0);
    };

  return (
        <Card style={{width:'350px'}} className='text-center m-auto'>
            <CardHeader>
                <h1>Counter</h1>
            </CardHeader>
            <CardBody>
                <h4>{count}</h4>
            </CardBody>
            <CardFooter>
                <Button variant='primary' onClick={increment}>Increment</Button>
                <Button variant='secondary' className='ms-2 me-2' onClick={decrement}>Decrement</Button>
                <Button variant='danger' onClick={reset}>Reset</Button>
            </CardFooter>
        </Card>
  )
}

export default Counter;
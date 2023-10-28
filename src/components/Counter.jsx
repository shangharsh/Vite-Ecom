import {React, useState} from 'react'
import {Button, Card, CardHeader, CardBody, CardFooter} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue, reset } from '../slice/counterSlice';

const Counter = () => {
    // const [count, setCount] = useState(0);

    // const increment = (e) =>{
    //     e.preventDefault();
    //     setCount(count + 1);
    // };
    // const decrement = (e) =>{
    //     e.preventDefault();
    //     setCount(count - 1);
    // };
    // const reset = (e) =>{
    //     e.preventDefault();
    //     setCount(0);
    // };

    const dispatch = useDispatch();
    const count = useSelector((state)=> state.counterReducer.count)

  return (
        <Card style={{width:'350px'}} className='text-center m-auto'>
            <CardHeader>
                <h1>Counter</h1>
            </CardHeader>
            <CardBody>
                {/* <h4>{count}</h4> */}
                <h4>{count}</h4>
            </CardBody>
            <CardFooter>
                <Button variant='primary' onClick={(e)=>dispatch(increment())} >Increment</Button>
                <Button variant='secondary' className='ms-2 me-2' onClick={(e)=>dispatch(decrement())}>Decrement</Button>
                <Button variant='danger' onClick={(e)=> dispatch(reset())}>Reset</Button>
                <input type='number' className='mt-1' placeholder='Enter a value' onChange={(e)=>dispatch(incrementByValue(e.target.value))}></input>
                {/* <Button variant='primary' onClick={increment}>Increment</Button>
                <Button variant='secondary' className='ms-2 me-2' onClick={decrement}>Decrement</Button>
                <Button variant='danger' onClick={reset}>Reset</Button> */}
            </CardFooter>
        </Card>
  )
}

export default Counter;
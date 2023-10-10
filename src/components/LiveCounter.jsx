import {Card, CardHeader,CardBody,CardFooter} from 'react-bootstrap';
import {useState,useEffect} from 'react';

const LiveCounter = () => {
    const [second, setSecond] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setSecond(second+1)
            if(second>=59){
                setMin(min+1)
                setSecond(0)
            }else if(min>=59){
                setHour(hour+1)
                setMin(0)
            }
        },1000);
    })
  return (
    <Card className='text-center mt-4 m-auto' style={{width:'18rem',height:'150px'}}>
        <CardHeader>
            <h5>Live Counter</h5>
        </CardHeader>
        <CardBody className='d-flex justify-content-evenly align-items-center'>
            <div className="hours">
            <h5 className='text-success'>Hour</h5>
            <h5 className='text-success'>{hour}</h5>
            </div>
            <div className="mins">
            <h5 className='text-info'>Minute</h5>
            <h5 className='text-info'>{min}</h5>
            </div>
            <div className="seconds">
            <h5 className='text-primary'>Seconds</h5>
            <h5 className='text-primary'>{second}</h5>
            </div>
        </CardBody>
    </Card>
  )
}

export default LiveCounter;
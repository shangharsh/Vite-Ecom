import {React, useState} from 'react'
import axios from 'axios';
import {Card, CardHeader, CardBody, CardFooter, Button} from 'react-bootstrap';

const QuotePage = () => {
    const [id, setId] = useState(1);
    const [author, setAuthor] = useState('');
    const [quote, setQuote] = useState('');

    const displayQuote = async(e) =>{
        e.preventDefault();
        const {data} = await axios.get('https://dummyjson.com/quotes');
        // console.log(response);
        const {quotes} = data;

        const qts = quotes.find((item)=> item.id === id);
        setAuthor(qts.author);
        setQuote(qts.quote);


        setId(id+1);
    }
  return (
    <Card style={{width:'350px'}} className='text-center m-auto'>
            <CardHeader>
                <h1>Counter</h1>
            </CardHeader>
            <CardBody>
                <h4></h4>
            </CardBody>
            <CardFooter>
                <Button variant='primary' onClick={displayQuote}>Increment</Button>
            </CardFooter>
        </Card>
  )
}

export default QuotePage;
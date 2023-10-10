import {React,useState,useEffect} from 'react';
import axios from 'axios';
import {Card,CardHeader,CardBody,CardFooter,Button} from 'react-bootstrap';

const ProductsPage = () => {
  const [product,setProduct] = useState();
  useEffect(()=>{
    getProduct();
  },[])

  const getProduct = async () =>{
    const response = await axios.get('https://dummyjson.com/products');
    setProduct(response.data.products);   
    console.log(product)
  }

  return (
      <>
    <h4 className='text-center mt-3'>Our Products</h4>
    <div className='container-fluid d-flex flex-wrap justify-content-around align-items-center gap-3 text-center'>
      {product?.map(({id,title,thumbnail,price,discountPercentage,description})=>{
      return(
      <Card key={id} style={{width:'18rem', height:'380px'}}>
        <CardHeader className='w-100 h-50'>
          <img src={thumbnail} alt='product-image' className='w-100 h-75' />
          <h6 className='pt-3'>{title}</h6>
        </CardHeader>
        <CardBody>
          <div className='costContainer d-flex justify-content-between align-items-center'>
            <p className='text-success'>Price: {price}</p>
            <p className='text-danger'>Off: {discountPercentage}%</p>
          </div>
          <p className='d-flex flex-column text-start'>Description: <span>{description.slice(0,25)+'...'}</span> </p>
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

export default ProductsPage;
import React from 'react'
import {Card,CardHeader,CardBody,CardFooter,Button} from 'react-bootstrap';


const ProductCard = ({product, deleteHandler}) => {
    
  return (
    <Card key={product.id} style={{width:'18rem', height:'380px'}}>
        <CardHeader className='w-100 h-50'>
          <img src={product.thumbnail} alt='product-image' className='w-100 h-75' />
          <h6 className='pt-3'>{product.title}</h6>
        </CardHeader>
        <CardBody>
          <div className='costContainer d-flex justify-content-between align-items-center'>
            <p className='text-success'>Price: {product.price}</p>
            <p className='text-danger'>Off: {product.discountPercentage}%</p>
          </div>
          <p className='d-flex flex-column text-start'>Description: <span>{product.description.slice(0,25)+'...'}</span> </p>
        </CardBody>
        <CardFooter>
          <Button variant='primary'>View</Button>
          <Button variant='secondary' className='ms-3 me-3'>Edit</Button>
          <Button variant='danger' onClick={(e)=>deleteHandler(e,product.id)}>Delete</Button>
        </CardFooter>
      </Card>
  )
}

export default ProductCard
import React, { useContext } from 'react'
import {Card,CardHeader,CardBody,CardFooter,Button} from 'react-bootstrap';
import { returnTotal } from '../utils/helper';
import ProductContext from '../context/ProductContext';
import GlobalContext from '../context/GlobalContext';


const ProductCard = () => {
  const {product, deleteHandler,editHandler, viewHandler} = useContext(ProductContext);
  const name = useContext(GlobalContext);
  // console.log(name[0].name);

  return (
    <Card key={product.id} style={{width:'18rem', height:'380px'}}>
        <CardHeader className='w-100 h-50'>
          <img src={product.thumbnail} alt='product-image' className='w-100 h-75' />
          <h6 className='pt-3'>{product.title} {name[3].name}</h6>
        </CardHeader>
        <CardBody>
          <div className='costContainer d-flex justify-content-between align-items-center'>
            <div className="leftContainer">
            <p className='text-success'>Price: ${returnTotal(product)}</p>
            </div>
            <div className="rightContainer d-flex">
            <p className='text-secondary line-through me-1'> <del> ${product.price}</del> </p>
            <p className='text-danger'> {-product.discountPercentage}%</p>
            </div>
          </div>
          <p className='d-flex flex-column text-start'>Description: <span>{product.description.slice(0,25)+'...'}</span> </p>
        </CardBody>
        <CardFooter>
          <Button variant='primary' onClick={(e)=>viewHandler(e,product.id)}>View</Button>
          <Button variant='secondary' className='ms-3 me-3' onClick={(e)=>editHandler(e,product.id)}>Edit</Button>
          <Button variant='danger' onClick={(e)=>deleteHandler(e,product.id)}>Delete</Button>
        </CardFooter>
      </Card>
  )
}

export default ProductCard
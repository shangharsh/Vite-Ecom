import {React,useState,useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Loader from './Loader';
import { Button } from 'react-bootstrap';
import AddProduct from '../components/AddProduct';

const Products = () => {
  const [products,setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [show,setShow] = useState(false);
  const URL = import.meta.env.VITE_BACKEND_URL;

  const getProduct = async () =>{
    try{
      setIsLoading(true);
      const {data} = await axios.get(URL+"products");
      setProducts(data.products);  
      setIsLoading(false);
    }catch(error){
      errorToast(error.response.data);
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    getProduct();
  },[]);

  const deleteHandler = (e, id) => {
    e.preventDefault();
    const filteredProducts = products.filter((prod)=>{
        return prod.id !== id;
    })
    setProducts(filteredProducts);
}

 const showModal = (e) =>{
  e.preventDefault();
  setShow(true);
}

const handleClose = (e) =>{
  e.preventDefault();
  setShow(false);
}


  return (
      <>
    <h4 className='text-center mt-3'>Our Products</h4>
    <div className="buttonContainer text-center mt-3 mb-3" onClick=''>
      <Button variant='primary' onClick={showModal}>Add product</Button>
      <AddProduct show={show}  handleClose={handleClose}/>
    </div>
    <div className='container-fluid d-flex flex-wrap justify-content-around align-items-center gap-3 text-center'>
      {isLoading?(
        <Loader/>
      ) : (
        products.map((product)=>{
          return <ProductCard product={product} deleteHandler={deleteHandler}/>
        }))
      
      }
    </div>
      </>
  )}

export default Products;
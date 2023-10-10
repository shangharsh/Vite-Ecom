import {React,useState,useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Loader from './Loader';
import { Button } from 'react-bootstrap';
import AddProduct from '../components/AddProduct';
import EditProduct from '../components/EditProduct';
import ViewProduct from '../components/ViewProduct';

const Products = () => {
  const [products,setProducts] = useState([]);
  const [product,setProduct] = useState({
    id: Date.now(),
    title:"",
    thumbnail:"",
    description:"",
  });
  const [editedProduct,setEditedProduct] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [show,setShow] = useState(false);
  const [showEdit,setShowEdit] = useState(false);
  const [showView,setShowView] = useState(false);
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
  };

  useEffect(()=>{
    getProduct();
  },[]);

  const deleteHandler = (e, id) => {
    e.preventDefault();
    const filteredProducts = products.filter((prod)=>{
        return prod.id !== id;
    })
    setProducts(filteredProducts);
};

//Add Product
 const showModal = (e) =>{
  e.preventDefault();
  setShow(true);
};

const handleClose = (e) =>{
  e.preventDefault();
  setShow(false);
};

const handleChange = (e) =>{
  setProduct((prev)=>{
    return {...prev, [e.target.name]: e.target.value };
  });
  console.log(product)
};

const addProductHandler =(e)=>{
  e.preventDefault();
  setProducts([product, ...products]);
  setShow(false);
};

//Edit Product
const editHandler = (e, id) =>{
  e.preventDefault();
  const prod = products.find((product)=> product.id === id);
  setEditedProduct(prod);
  setShowEdit(true);

};

const handleEditClose = (e) =>{
  e.preventDefault();
  setShowEdit(false);
};

const handleEditChange = (e) =>{
  setEditedProduct((prev)=>{
    return {...prev, [e.target.name]: e.target.value };
  });
};

const editProductHandler =(e, id)=>{
  e.preventDefault();
  console.log(id)
  const finalData = products.map((prod)=>{
    return prod.id === id? editedProduct : prod;
  })
  setProducts(finalData);
  setShowEdit(false);
};

//View product
const viewHandler = (e, id) =>{
  e.preventDefault();
  const prod = products.find((product)=> product.id === id);
  setEditedProduct(prod);
  setShowView(true);
};

const handleViewClose = () =>{
  setShowView(false);
}


  return (
      <>
    <h4 className='text-center mt-3'>Our Products</h4>
    <div className="buttonContainer text-center mt-3 mb-3">
      <Button variant='primary' onClick={showModal}>Add product</Button>
      <AddProduct show={show}  handleClose={handleClose} handleChange={handleChange} addProductHandler={addProductHandler}/>
      <EditProduct showEdit={showEdit}  handleEditClose={handleEditClose} handleEditChange={handleEditChange} editProductHandler={editProductHandler} editedProduct={editedProduct}/>
      <ViewProduct showView={showView}  handleViewClose={handleViewClose} editedProduct={editedProduct}/>
    </div>
    <div className='container-fluid d-flex flex-wrap justify-content-around align-items-center gap-3 text-center'>
      {isLoading?(
        <Loader/>
      ) : (
        products.map((product)=>{
          return <ProductCard key={product.id} product={product} deleteHandler={deleteHandler} editHandler={editHandler} viewHandler={viewHandler}/>
        }))}
    </div>
      </>
  )}

export default Products;
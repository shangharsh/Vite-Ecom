import {React,useState,useEffect} from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Loader from './Loader';
import { Button, Form } from 'react-bootstrap';
import AddProduct from '../components/AddProduct';
import EditProduct from '../components/EditProduct';
import ViewProduct from '../components/ViewProduct';

const Products = () => {

  //State for API Products.
  const [products,setProducts] = useState([]);

  //State for copying the produts to the another state.
  const [originalProducts,setOriginalProducts] = useState([]);

  //State for adding categories....
  const [categories, setCategories] = useState([]);

  //State for Adding product from user end.
  const [product,setProduct] = useState({
    id: Date.now(),
    title:"",
    thumbnail:"",
    description:"",
  });

  //State for editted product.
  const [editedProduct,setEditedProduct] = useState([]);

  //State for Loader.
  const [isLoading,setIsLoading] = useState(false);

  //State for showing the modal while click on the add product.
  const [show,setShow] = useState(false);

  //state for editting product.
  const [showEdit,setShowEdit] = useState(false);

  //state for viewing products.
  const [showView,setShowView] = useState(false);

  //Adding the url to the variable.
  const URL = import.meta.env.VITE_BACKEND_URL;

  const getProduct = async () =>{
    try{
      setIsLoading(true);
      const {data} = await axios.get(URL+"products");
      setProducts(data.products);  
      setOriginalProducts(data.products);

      //Adding products category while page loading.
      const categories = data.products.map((data)=>{
        return data.category;
      })
      setCategories([...new Set(categories)])
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

const searchProducts = (e) =>{
const searchedData = originalProducts.filter((originalProd)=>{
  return originalProd.title.toLowerCase().includes(e.target.value.toLowerCase());
});
setProducts(searchedData);
}

const filterCategory=(data)=>{
  if(data !==''){
    const filteredData = originalProducts.filter((val)=>{
      return val.category === data
    })
    setProducts(filteredData);
  }else{
    setProducts(originalProducts);
  }
}


  return (
      <>
      <div className="container mt-2 d-flex justify-content-between">
      <Button variant='primary' onClick={showModal}>Add product</Button>
      <Form.Control className='w-25' type='search' name='search' placeholder='Type Keyword to Search'/>
      <Form.Select className='w-25' onChange={(e)=>filterCategory(e.target.value)}>
        <option value=''>Filter By Category</option>
        {categories.map((val,i)=>{
          return <option value={val} key={i}>{val}</option>;
        })}
      </Form.Select>
      </div>
    <h4 className='text-center mt-3'>Our Products</h4>
    <div className="buttonContainer text-center mt-3 mb-3">
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
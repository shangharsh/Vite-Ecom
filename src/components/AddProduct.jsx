import React from 'react'
import { Button, Modal, Form, Image } from 'react-bootstrap'

const AddProduct = ({show, handleClose, handleChange, addProductHandler}) => {
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="text" name='thumbnail' placeholder='Image Here' onChange={handleChange}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name='title' placeholder='Title Here' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className='row'>
      <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" name='price' placeholder='Price Here' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
        <Form.Label>Product Discount</Form.Label>
        <Form.Control type="text" name='discountPercentage' placeholder='Discount Here' onChange={handleChange}/>
      </Form.Group>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Product Description</Form.Label>
        <Form.Control as='textarea' name='description' placeholder='Description Here' onChange={handleChange}/>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addProductHandler}>
            Add product
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default AddProduct
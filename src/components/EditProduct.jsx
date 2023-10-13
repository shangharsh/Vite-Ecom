import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { returnDiscountAmount, returnTotal } from '../utils/helper'

const EditProduct = ({showEdit, handleEditClose, handleEditChange, editProductHandler, editedProduct}) => {
  return (
    <Modal show={showEdit} onHide={handleEditClose}>
        <Modal.Header>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="image" name='thumbnail' placeholder='Image Here' src={editedProduct.thumbnail} onChange={handleEditChange} disabled/>       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name='title' placeholder='Title Here' value={editedProduct.title} onChange={handleEditChange}/>
      </Form.Group>
      <Form.Group className='row'>
      <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" name='price' placeholder='Price Here' value={editedProduct.price} onChange={handleEditChange}/>
      </Form.Group>
      <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
        <Form.Label>Product Discount</Form.Label>
        <Form.Control type="text" name='discountPercentage' placeholder='Discount Here' value={editedProduct.discountPercentage} onChange={handleEditChange}/>
      </Form.Group>
      </Form.Group>
      <Form.Group className='row'>
      <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
        <Form.Label>Discounted Amount</Form.Label>
        <Form.Control type="text" name='price' readOnly placeholder='Price Here' value={"$"+returnTotal(editedProduct)}disabled/>
      </Form.Group>
      <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
        <Form.Label>Total Price</Form.Label>
        <Form.Control type="text" name='discountPercentage' readOnly placeholder='Discount Here' value={"$"+returnDiscountAmount(editedProduct)}disabled/>
      </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Product Description</Form.Label>
        <Form.Control as='textarea' name='description' placeholder='Description Here' value={editedProduct.description} onChange={handleEditChange}/>
      </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleEditClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={(e)=>editProductHandler(e,editedProduct.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default EditProduct
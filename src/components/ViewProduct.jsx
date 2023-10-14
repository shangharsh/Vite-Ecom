import React from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { returnDiscountAmount, returnTotal } from '../utils/helper'

const ViewProduct = ({showView, handleViewClose, editedProduct }) => {
  return (
    <Modal show={showView} onHide={handleViewClose}>
        <Modal.Header>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="image" name='thumbnail' placeholder='Image Here' src={editedProduct.thumbnail} disabled/>       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name='title' placeholder='Title Here'  value={editedProduct.title} disabled/>
      </Form.Group>
      <Form.Group className='row'>
      <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
        <Form.Label>Product Price</Form.Label>
        <Form.Control type="text" name='price' placeholder='Price Here'  value={editedProduct.price} disabled/>
      </Form.Group>
      <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
        <Form.Label>Product Discount</Form.Label>
        <Form.Control type="text" name='discountPercentage' placeholder='Discount Here'  value={editedProduct.discountPercentage} disabled/>
      </Form.Group>
      </Form.Group>
      <Form.Group className='row'>
      <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
        <Form.Label>Discounted Amount</Form.Label>
        <Form.Control type="text" name='price' readOnly placeholder='Discounted Amount' value={"$"+returnDiscountAmount(editedProduct)} disabled/>
      </Form.Group>
      <Form.Group className="mb-3 col-6" controlId="formBasicTitle">
        <Form.Label>Total Price</Form.Label>
        <Form.Control type="text" name='discountPercentage' readOnly placeholder='Total Price' value={"$"+returnTotal(editedProduct)} disabled/>
      </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Product Description</Form.Label>
        <Form.Control as='textarea' name='description' placeholder='Description Here'  value={editedProduct.description} disabled/>
      </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleViewClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ViewProduct
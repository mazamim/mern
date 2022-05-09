import React from 'react'
import products from '../products'
import {Row,Col} from 'react-bootstrap'

//componenets
import Product from '../components/Product'
const HomeScreen = () => {
  return (
   <>
   <h1>Latest Products</h1>
   <Row xxl={4} xl={3} lg={3} md={2}>
{products.map((product)=>(<Product product={product}></Product>))}
   </Row>
   </>
  )
}

export default HomeScreen
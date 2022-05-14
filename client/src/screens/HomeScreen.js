import React, { useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productActionCreator } from "../store/actions/productAction";

//componenets
import Product from "../components/Product";

const HomeScreen = () => {
  const dispatch = useDispatch();
  
     const {loading,product,error} = useSelector((state) => state.product)

  useEffect(() => {

    dispatch(productActionCreator());
  }, []);



  return (
    <>
      <h1>Latest Products</h1>
      <Row xxl={4} xl={3} lg={3} md={2}>

        {loading ? <div>Loading...</div> 
        : 
          product.map((product) => (
          <Product product={product}></Product>
        ))
        }
        
       
      </Row>
    </>
  );
};

export default HomeScreen;

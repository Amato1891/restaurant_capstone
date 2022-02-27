import Dishes from "../../components/dishes"
import {useContext, useState} from 'react';
import Router from 'next/router';
import Layout from '../../components/layout';

import AppContext from "../../components/context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col} from "reactstrap";

function DishList(props) {
  const { Component, pageProps } = props;
  var {cart,addItem,removeItem, user, setUser, userName, restaurant} = useContext(AppContext);
  console.log(restaurant);

  

    return(<>
      <h1>Choose your Favorite Dishes</h1>
      <Container>
    <Row xs='3'>
      {/* {restList} */} restaurants info here
    </Row>
  
    <Row xs='3'>
    {/* {renderDishes(restaurantID)} */}dishes go here
    </Row>
 
    </Container>
    </>)
  }
  
  export default DishList
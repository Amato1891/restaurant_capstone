import {gql,useQuery} from '@apollo/client';
import Dishes from "./dishes"
import {useContext, useState} from 'react';
import Router from 'next/router';

import AppContext from "./context"
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

function RestaurantList(props){
  const[restaurantID, setRestaurantID] = useState(0)
  const {cart, user } = useContext(AppContext);
  const [state, setState] = useState(cart);
  const activeUser = user.activeUser;
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
 // console.log(`Query Data: ${JSON.stringify(data.restaurants)}`)


let searchQuery = data.restaurants.filter((res) =>{
    return res.name.toLowerCase().includes(props.search)
  });

  if(searchQuery.length === 0) {
    return <div style={{color: "red", fontWeight:'bold'}}>{`No restaurants found, try refining your search.`}</div>
  };

let restId = searchQuery[0].id;
 
// definet renderer for Dishes
  const renderDishes = (restaurantID) => {
    return (<Dishes restId={restaurantID}> </Dishes>)
  };
if(searchQuery.length > 0){
  const restList = searchQuery.map((res) => (
    <Col xs="6" sm="4" key={res.id}>
      <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
        <CardImg
          top={true}
          style={{ height: 200 }}
          src={
          `http://localhost:1337`+ res.image.url
          }
        />
        <CardBody>
          <CardText>{res.description}</CardText>
        </CardBody>
        <div className="card-footer">
        
        <Button id={res.name} color="info" disabled={!activeUser} onClick={()=> Router.push(`/dishes/${res.name}`)} 
         >{res.name}</Button>
        {/* onClick={()=> setRestaurantID(res.id)} */}
        </div>
      </Card>
    </Col>
  ))

  return(
    <Container>
    <Row xs='3'>
      {restList}
    </Row>
  
    <Row xs='3'>
    {renderDishes(restaurantID)}
    </Row>
    </Container>
  )
} else {
  return <h1> No Restaurants Found</h1>
}
}
   export default RestaurantList
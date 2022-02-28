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

function RestaurantPage(props) {
    console.log(props)
    const[restaurantID, setRestaurantID] = useState(0)
    const {cart, user } = useContext(AppContext);
    const [state, setState] = useState(cart);
    const activeUser = user.activeUser;

    // const GET_RESTAURANT_INFO = gql`
    // query {
    //     restaurants {
    //       id
    //       name
    //       description
    //       image {
    //         url
    //       }
    //     }
    //   }
    // `;

    
    // const { loading, error, data } = useQuery(GET_RESTAURANT_INFO)
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>ERROR</p>;
    // if (!data) return <p>Not found</p>;
   // console.log(`Query Data: ${JSON.stringify(data.restaurants)}`)
  
  
  

    return(
        <>

        </>
    )
}
export default RestaurantPage
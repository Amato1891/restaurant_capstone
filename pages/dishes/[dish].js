import AppContext from "../../components/context"
import RestaurantPage from "../../components/restaurantPage";
const {user} = AppContext;
function DishList(props) {
console.log(props)
console.log(user)
    return(<>
      <h1>Choose your Favorite Dishes</h1>
      <RestaurantPage/>
      </>)
  }
  
  export default DishList
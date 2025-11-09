
import RestroCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return(
    <div className='restro-body-container'>
       <div className='filter'>
        <button className="filter_btn" onClick={() => { 
            const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
        }}
        >
            Top Rated Restaurants
        </button>
        </div>
       <div className='restro-container'>
        {
          listOfRestaurants.map(restaurant => <RestroCard key={restaurant.info.id} resData={restaurant}/>)
        }
       </div>
    </div>
  )
}

export default Body;
import React {useState,createContext }from "react";

export const RestaurantsConteaxt =createContext();
const[restaurants,setRestaurants] = useState([]);

return (
    <RestaurantsConteaxt.provider value={{ restaurants,setRestaurants}}>
        {props.children}
    </RestaurantsConteaxt.provider>
);

};
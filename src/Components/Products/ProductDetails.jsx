import { useEffect } from "react";
import { getSofas } from "./productRedux/productAction";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function Products() {
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getSofas);
    }, [])

    return (
        <>
        </>
    )
}

//import React from "react";
// import { useNavigate } from "react-router-dom";

// const RestaurantCard = ({item}) => {
//   // console.log(item);
//   const navigate = useNavigate();
//   return <div className="restaurant_card" onClick={()=>navigate(`/restaurant/${item.id}`)}>
//     <img className ="image" src={item.image} alt={item.name}/>
//     <h3 className="name">{item.name}</h3>
//     <h4 className="type">{item.type}</h4>
//     <p className="votes">{item.number_of_votes}</p>
//     <p className="price">{item.price_starts_from}</p>
//     <p className="rating">{item.rating}</p>
//     </div>;
// };

// export default RestaurantCard;


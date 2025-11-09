import { CDN_URL } from "../utils/constant";

const RestroCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId, name, avgRating, cuisines, costForTwo} = resData?.info;
  return(
    <div className='restro-card'>
      <div className='restro-img-container'><img className="restro-img" src={CDN_URL +cloudinaryImageId}/></div>
      <div className='card-container'>
        <div className="restro-name">
          <h3>{name}</h3>
          <div className='restro-rating'><span class="badge">{avgRating}</span></div>
        </div>
        <p>{cuisines.join(",")}</p>
        <div className='restro-cost'>
          <h4>{costForTwo}</h4>
          <div className='restro-del-time'><span>{resData?.info?.sla?.deliveryTime} Minutes</span></div>
        </div>
      </div>
    </div>
  )
}

export default RestroCard;
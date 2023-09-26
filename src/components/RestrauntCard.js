import React from 'react'
import { CDN_URL } from '../constants';
const ResturantCard = (props)=>{
    const {resData} = props;
    console.log("props are ",props)
    const {
        cuisines,name,avgRating,costForTwo,cloudinaryImageId
    } = resData?.info
    return(
        <div className='res-card' style={{backgroundColor:'#f0f0f0'}}>
            <img className='res-logo' src={CDN_URL+cloudinaryImageId}  />
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(", ")}</h4>
        </div>
    )
}

export default ResturantCard


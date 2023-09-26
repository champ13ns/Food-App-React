import React, { useEffect } from 'react'
import data from './../constants/index.js'
import RCard from './ResturantCard.js'
import Shimmer from './Shimmer.js'
import { useState  } from 'react'
 const Body = () =>{
    const res = data?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants;
    const [allresturants,setAllResturants] = useState(res);
    const[filteredRestraunts,setFilteredRestraunts] = useState(res);
    const[searchText,setSearchText] = useState('')
    console.log("res is ",res)
   return allresturants?.length == 0 ? <Shimmer/>:
   (
    <div className='body'>
        <div className='filter'>
            <div className='search'>
                <input className='search-box' type='text' value={searchText}  onChange={(e) => {
                    setSearchText(e.target.value);
                    console.log(searchText)
                }} />
                <button onClick={(e) => {
                    const filterRes = allresturants.filter((x) => {
                        return x.info.name.toLowerCase().includes(searchText.toLowerCase());
                    })
                    console.log("filtered restraunts var are: ",filterRes)
                    setFilteredRestraunts(filterRes);
                    console.log("filtered restraunts are: ",filteredRestraunts)
                }} > Search </button>
            </div>
        </div>
    </div>
   )

}

export default Body;



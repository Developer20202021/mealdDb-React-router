
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardU from '../Card/CardU';
import '../Header/Header';
import './Restaurant.css';

const Restaurant = () => {
    const [food, setFood] = useState([]);
    const [searchValue, setSearchValue] =useState('');

    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
        fetch(url)
        .then(res => res.json())
        .then(data => 
            check(data)
      )
    },[searchValue])
    function check(data) {
        if (data.meals == null) {
          return
        }
        else{
            console.log(data);
            setFood(data.meals)
        }
    }
    function searchText(e){
        setSearchValue(e.target.value);
    }
    console.log(food);
    return (
        <div>
           <h1>Hello this is restaurant page</h1> 
           <div className="search">
                <input onChange={searchText} type="text" name="" id="" />
              
            </div>
        <div className='cardContainer'>
            {  food.map(food =><CardU data ={food} ></CardU>) } 
                  
           
              
           
        </div>
        </div>
    );
};

export default Restaurant;
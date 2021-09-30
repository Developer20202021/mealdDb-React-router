import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Food = () => {
    const {id} =useParams()
    const [food, setFood] = useState([]);
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setFood(data.meals[0]))

    },[])
 

   
 
    return (
        <div>
            <h1>Hello this is food page{id}</h1>
            <div className="food-details">
            <p>
                {food.strMeal}
            </p>
      
           
            <p><img src={food.strMealThumb} alt="" width='250px'/></p>
            <p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VVnZd8A84z4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
            <p>{food.strInstructions}</p>
            </div>
        </div>
    );
};

export default Food;
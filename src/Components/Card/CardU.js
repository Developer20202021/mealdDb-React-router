import React from 'react';
import {useHistory} from 'react-router-dom';
import './Card.css'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';



const CardU = (props) => {
       
 const {idMeal, strMealThumb, strInstructions,strTags,strMeal, strCategory} = props.data;
   const history = useHistory();
    const more = ()=>{
        const url = `/food/${idMeal}`;
        history.push(url);
    }

    const home = () =>{
        history.push('/')
    }
 
    return (
        <div>
             <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           {strCategory.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={strCategory}
       
      />
      <CardMedia
        component="img"
        height="194"
        image={strMealThumb}
      
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {strInstructions.slice(0,240)}
        </Typography>
      </CardContent>
     

   
     <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
     
       
         <div className="button">
         <button onClick={more} >More</button>
         <button onClick={home} >Home</button>
       
   
         </div>
          </CardActions>
      
   
        <CardContent>
        
        </CardContent>
   
    </Card>
        </div>
    );
};

export default CardU;
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import styles from './RestaurantList.module.css'
import routes from '../Routes/routes.json'
const RestaurantList = ()=>{

const [restaurant,setRestaurant] = useState([])

const navigate = useNavigate() 

useEffect(()=>{
axios.get('http://localhost:8080/restaurant' 
         ).then((data)=>{
                       setRestaurant(data.data.data)
           }).catch((error)=>{
      console.log(error)
    })
},[])

const addHandler = ()=>{
    console.log('add')
navigate('/login')
}


    return(<>
   

 <div className={styles.rescontainer}>
      <h2>  Listed Restaurant</h2>
      <div className={styles.reslist}>
        {restaurant.map(res => (
          <div onClick={()=>{resHandler(res.id)}} key={res.id} className={styles.res}>
              <h4>{res.name}</h4>
            <br/>
            <hr/>
            <img  style={{ maxHeight: "400px" }} src={res.image} alt={res.name} />
              
          
            
          </div>
        ))}
              </div>
          </div>
  
 <Button onClick={addHandler} className={styles.addbutton}>Add Your Restaurant Now</Button> 



    </>)
}

export default RestaurantList
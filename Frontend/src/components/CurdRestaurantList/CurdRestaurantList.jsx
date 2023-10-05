import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import styles from './CurdRestaurantList.module.css'
import routes from '../Routes/routes.json'
import { useDispatch } from "react-redux";
import { addId,addDishId } from "../../Reducers/UserSlice";

const CurdRestaurantList = ()=>{

const [restaurant,setRestaurant] = useState([])

const [update,setUpdate] = useState(false)

const dispatch = useDispatch()

const navigate = useNavigate() 

useEffect(()=>{
axios.get('http://localhost:8080/restaurant' 
         ).then((data)=>{
                       setRestaurant(data.data.data)
           }).catch((error)=>{
      console.log(error)
    })
},[update])

const addHandler = ()=>{
    navigate('/addrestaurant')
}

const deleteHandler = (id)=>{
    const restaurantId = id;
  axios.post(`http://localhost:8080/restaurant/delete`,{
    id:restaurantId
  }
         ).then((data)=>{
          console.log(data)
          if(data.data.message=="sucess"){
            alert('Restaurant Deleted SucessFully')
            setUpdate(!update)
          }else{
            alert('Error try again later')
          }
             }).catch((error)=>{
      console.log(error)
    })

}

const editHandler=(id)=>{
  dispatch(addId(id))
    navigate("/editrestaurant");
}

const resHandler = (id)=>{
   dispatch(addDishId(id))
   navigate("/dishes");
}
    return(<>
   

 <div className={styles.rescontainer}>
      <h2>  Listed Restaurant</h2>
      <div className={styles.reslist}>
        {restaurant.map(res => (
          <div  key={res.id} className={styles.res}>
              <h4>Name : {res.name}</h4>
              <hr/>
               <h4>Address : {res.address}</h4>
                <hr/>
                <h4>Mobile No. :  {res.mobile}</h4>
                 <hr/>
                 <h4> Email : {res.email}</h4>
                  <hr/>
            <br/>
                       
            <img onClick={()=>{resHandler(res.id)}}  style={{ maxHeight: "400px" }} src={res.image} alt={res.name} />
                 <br/>
                   <Button className="me-2 mt-2" onClick={()=>{editHandler(res.id)}} >Edit Restaurant </Button>
              <Button className="mt-2" variant="danger" onClick={()=>{deleteHandler(res.id)}}>Delete Restaurant </Button>                   
          </div>
        ))}
              </div>
          </div>
  <br/>
 <Button onClick={addHandler} className={styles.addbutton}>Add More Restaurant </Button> 
<br/>
<br/>


    </>)
}

export default CurdRestaurantList

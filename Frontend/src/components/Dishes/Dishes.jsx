
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from './Dishes.module.css';
import Button from 'react-bootstrap/Button';
const Dishes = () => {
  const [dishes, setDishes] = useState([]); 

const [update,setUpdate] = useState(true)

  const id1 = useSelector((state) => {
    return state.user.dishId;
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(`http://localhost:8080/restaurant/getDataById`, {
        id: id1,
      })
      .then((response) => {
        let data =response.data.data.dishes
        let x = JSON.parse(data)
       
       console.log(x)
        setDishes(x);
       
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id1,update]);

 const deleteHandler = (name)=>{
    const dishname = name;
  axios.post(`http://localhost:8080/restaurant/deletedish`,{
    dishname:dishname,
    id:id1
  }
         ).then((data)=>{
          console.log(data)
          if(data.data.message=="sucess"){
            alert('Dish Deleted SucessFully')
            setUpdate(!update)
          }else{
            alert('Error try again later')
          }
             }).catch((error)=>{
      console.log(error)
    })

}

  return (
    <>
      <h1>Dishes List</h1>
   
       {dishes.length && (
        <div className={styles.rescontainer}>
          <h2>Dishes In Restaurant</h2>
          <div className={styles.reslist}>
            {dishes.map((dish, index) => (
              <div key={index} className={styles.res}>
                <h4>Dish Name :{dish.name}</h4>
                <h4> Dish Price : {dish.price}</h4>
                <hr/>
                   <Button className="me-2 mt-2" onClick={()=>{editHandler(dish.name)}} >Edit Dish </Button>
              <Button className="mt-2" variant="danger" onClick={()=>{deleteHandler(dish.name)}}>Delete Dish </Button>                   
                <br />
                <hr />
              </div>
            ))}
          </div>
        </div>
      )} 
    </>
  );
};

export default Dishes;

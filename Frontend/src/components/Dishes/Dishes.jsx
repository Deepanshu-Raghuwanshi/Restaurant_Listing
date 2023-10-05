// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import axios from "axios";
// import styles from './Dishes.module.css'
// const Dishes = ()=>{

// const [dishes,setDishes] = useState([])

// const id1 = useSelector((state) => {
//        return (state.user.dishId)
//   })

//    const navigate = useNavigate()

//   useEffect(() => {
//     axios
//       .post(`http://localhost:8080/restaurant/getDataById`, {
//         id: id1,
//       })
//       .then((response) => {
        
//         const dishesDataString = response.data.data.dishes;
        
//         console.log("Dishes Data String:", dishesDataString);
        
       
       

//          setDishes(dishesDataString);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id1]);




// console.log(dishes)
//     return(<>
//     <h1>Dishes List</h1>
//     {dishes  && (
//         <div className={styles.rescontainer}>
//       <h2>  Dishes In Restaurant</h2>
//       <div className={styles.reslist}>
//      {dishes.map((dish, index) => (
//   <div key={index} className={styles.res}>
//     <h4>{ dish.name}</h4>
//     <h4>{ dish.price}</h4>
//     <br/>
//     <hr/>
//   </div>
// ))}
//               </div>
//           </div>
//     )}
//     </>)
// }
// export default Dishes;



import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from './Dishes.module.css';

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

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
        console.log(data)
        setDishes(data);
       
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id1]);

 

  return (
    <>
      <h1>Dishes List</h1>
   { console.log(dishes.length,'aaa')}
       {/* {dishes.length>0 && (
        <div className={styles.rescontainer}>
          <h2>Dishes In Restaurant</h2>
          <div className={styles.reslist}>
            {dishes.map((dish, index) => (
              <div key={index} className={styles.res}>
                <h4>{dish.name}</h4>
                <h4>{dish.price}</h4>
                <br />
                <hr />
              </div>
            ))}
          </div>
        </div>
      )}  */}
    </>
  );
};

export default Dishes;

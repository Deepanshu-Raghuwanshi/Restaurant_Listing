import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const DishEdit = () => {

 const [name, setName] = useState('')
  const [price,setPrice] = useState('')
 

 const id1 = useSelector((state) => {
       return (state.user.dishId)
  })

//   const navigate = useNavigate()

//   useEffect(() => {
//       axios
//       .post(`http://localhost:8080/restaurant/getDataById`,{
//         id:id1
//       })
//       .then((response) => {
        
//          setRestaurant(response.data);
//           })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);


console.log(id1)


  const changeHandler = ()=>{
 const name1 = name.trim(' ')
    const price1 = price.trim(' ')
    
    if (name1.length == 0) {
      alert('Enter Valid  Dish Name')
    } else if (price1.length == 0) {
      alert('Enter Valid Dish Price')
    }  else {
     axios
      .post(`http://localhost:8080/restaurant/edit`,{
        id:`${id1}`,
             name: `${name}`,
      price: `${price}`,
      
      })
      .then((response) => {
        if(response.data.message=="sucess"){
            alert('Changes Saved Sucess')
            navigate('/curdrestaurantlist')
            
        }else{
alert('Failed Try Again Later')
        }
      
       setName('')
       setPrice('')
     
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }
  

  return (
    <div>
      <h2>Edit Dish</h2>
      
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
   
            value={name}
             onChange={(e)=>{ setName(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
           Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={price}
            onChange={(e)=>{setAddress(e.target.value)}}
          />
        </div>
       
       
        <button onClick={changeHandler} type="submit" className="btn btn-primary">
          Save Changes
        </button>
      
    </div>
  );
};

export default DishEdit;

import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const EditRestaurant = () => {

 const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [restaurant, setRestaurant] = useState({});

 const id1 = useSelector((state) => {
       return (state.user.id)
  })

  const navigate = useNavigate()

  useEffect(() => {
      axios
      .post(`http://localhost:8080/restaurant/getDataById`,{
        id:id1
      })
      .then((response) => {
        
         setRestaurant(response.data);
          })
      .catch((error) => {
        console.error(error);
      });
  }, []);


console.log(id1)
console.log(restaurant)

  const changeHandler = ()=>{
 const name1 = name.trim(' ')
    const address1 = address.trim(' ')
    const mobile1 = mobile.trim(' ')
    const email1 = email.trim(' ')
    
    if (name1.length == 0) {
      alert('Enter Valid  Restaurant Name')
    } else if (address1.length == 0) {
      alert('Enter Address')
    }  else if( mobile1.trim(' ')
.length !=10){
      alert('Enter 10 Digit Mobile Number')
    }else if(email1.length ==0){
      alert('Enter Valid Email')
    } else {

     axios
      .post(`http://localhost:8080/restaurant/edit`,{
        id:`${id1}`,
             name: `${name}`,
      address: `${address}`,
      email: `${email}`,
      mobile: `${mobile}`,
      })
      .then((response) => {
        if(response.data.message=="sucess"){
            alert('Changes Saved Sucess')
            navigate('/curdrestaurantlist')
            
        }else{
alert('Failed Try Again Later')
        }
       setRestaurant('');
       setName('')
       setAddress('')
       setMobile('')
       setEmail('')
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }
  

  return (
    <div>
      <h2>Edit Restaurant</h2>
      
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
   
            value={restaurant.name}
             onChange={(e)=>{ setName(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={restaurant.address}
            onChange={(e)=>{setAddress(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={restaurant.email}
           onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            value={restaurant.mobile}
            onChange={(e)=>{setMobile(e.target.value)}}
          />
        </div>
        <button onClick={changeHandler} type="submit" className="btn btn-primary">
          Save Changes
        </button>
      
    </div>
  );
};

export default EditRestaurant;

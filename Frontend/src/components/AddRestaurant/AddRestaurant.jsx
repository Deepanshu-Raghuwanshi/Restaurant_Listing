import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import styles from './AddRestaurant.module.css'
import { useNavigate } from "react-router-dom";



const AddRestaurant = () => {

const navigate = useNavigate()

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [poster, setPoster] = useState('')
 const[isDish,setIsDish]=useState(false)
 const [dishname, setDishName] = useState('');
  const [dishprice, setDishPrice] = useState('');
  const [dishes, setDishes] = useState([]);
 
    


//   useEffect(() => {
//     axios.get('https://ticket-booking-dipanshuraghuwa.december-node-2022.repl.co/movie/imagedata').then((data) => {

//       setMovie(data.data.data)

//     }).catch((error) => {
//       console.log(error)
//     })
//   }, [delete1])



  const addHandler = () => {
    const name1 = name.trim(' ')
    const address1 = address.trim(' ')
    const mobile1 = mobile.trim(' ')
    const email1 = email.trim(' ')
    const poster1 = poster.trim(' ')
   

    if (name1.length == 0) {
      alert('Enter Valid  Restaurant Name')
    } else if (address1.length == 0) {
      alert('Enter Address')
    }  else if( mobile1.trim(' ')
.length !=10){
      alert('Enter 10 Digit Mobile Number')
    }else if(email1.length ==0){
      alert('Enter Valid Email')
    }else if (poster1.length==0) {
      alert('Enter Poster URL')
    }  else {
 

axios.post('http://localhost:8080/restaurant', {
      name: `${name1}`,
      address: `${address1}`,
      email: `${email1}`,
      mobile: `${mobile1}`,
      image:`${poster1}`,
      dishes:`${dishes}`,
 
    }).then((data)=>{
     console.log(data)
     if(data.data.message=="sucess"){
           alert("Restaurant Data Added Sucessfully")
           
     }else{
        alert('Failed Try Again')
     }
   
    }).catch((error)=>{
      console.log(error)
    })

     setName('')
    setAddress('')
    setMobile('')
    setEmail('')
   setPoster('')

  
    }
  }

 

const dishHandler = ()=>{
setIsDish(!isDish)
}


 const addDish = () => {
    if (dishname.trim() === '' || dishprice.trim() === '' ) {
      alert('Please fill in all fields');
      return;
    }
     const newDish = {
      name: dishname,
      price: dishprice,
    
    };

    setDishes([...dishes, newDish]);
    setIsDish(!isDish)
    setDishName('');
    setDishPrice('');
    
  };

const listgoHandler = ()=>{
   navigate('/curdrestaurantlist')
}


  return (<>
    <br />
    
    <div className="container">
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6 col-xs-12">
          <div className="card px-4">
            <div className="card-body">
              <div className="mb-2 mt-md-2">
                <h2 className="fw-bold mb-2 text-center "> Add Restaurant</h2>
                <hr />
                <div className="mb-3">

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label"> Restaurant Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Restaurant Name"
                      value={name}
                      onChange={(e) => { setName(e.target.value) }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter Address"
                      value={address}
                      onChange={(e) => { setAddress(e.target.value) }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile No.</label>
                    <input
                      type="number"
                      className="form-control"
                      id="mobile"
                      placeholder="Enter Mobile No."
                      value={mobile}
                      onChange={(e) => { setMobile(e.target.value) }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder=" Enter Email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value) }}
                    />
                  </div>

                  
                  <div className="mb-3">
                    <label htmlFor="poster" className="form-label">Poster</label>
                    <input
                      type="text"
                      className="form-control"
                      id="poster"
                      placeholder="image"
                      value={poster}
                      onChange={(e) => { setPoster(e.target.value) }}
                    />
                  </div>

{isDish ? (
<>
<h2>Dish Adder</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Dish Name:</label>
        <input
         className="form-control"
          type="text"
          id="name"
          value={dishname}
          onChange={(e) => setDishName(e.target.value)}
        />
      </div>
      <br/>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Dish Price:</label>
        <input
         className="form-control"
          type="number"
          id="price"
          value={dishprice}
          onChange={(e) => setDishPrice(e.target.value)}
        />
      </div>
      <Button variant='success' onClick={addDish}>Add Dish</Button>
      <hr/>
</>
) : (
   
    <div className="d-grid">
    <button  onClick={dishHandler} className="btn btn-primary">
      Add Dish
    </button>
    <hr/>
  </div>
)}
<br/>
<br/>
         <div className="d-grid">
     <Button onClick={addHandler}  variant="warning"  >Add Restaurant</Button>
     <br/>
      <Button onClick={listgoHandler}  variant="info"  >Go To Restaurant Lists</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
          <br/>
     
    <br />
     {dishes ? (
<div>
        <h3>Added Dishes:</h3>
        <div>
          {dishes.map((dish, index) => (
            <li key={index}>
            {dish.name} - {dish.price}  
              
            </li>
          ))}
        </div>
      </div>
     ):(null)}
    <br />
    <br />



  </>)
}
export default AddRestaurant
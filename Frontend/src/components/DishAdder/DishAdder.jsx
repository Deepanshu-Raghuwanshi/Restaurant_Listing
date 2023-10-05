import React, { useState, useRef, } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {addDish} from '../../Reducers/UserSlice'
const DishAdder = ({isDish,dishHandler1}) => {
  const [dishes, setDishes] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');


  const posterInputRef = useRef(null);

const dispatch = useDispatch()

  const addDish = () => {
    if (name.trim() === '' || price.trim() === '' || !image === '') {
      alert('Please fill in all fields');
      return;
    }
 
    const newDish = {
      name: name,
      price: price,
      image: image,
    };

    setDishes([...dishes, newDish]);
    // dispatch(addDish(newDish))
    dishHandler1()
    setName('');
    setPrice('');
    setImage('');

  };

  return (
    <>
    {
        isDish ? (
 <div>
      <h2>Dish Adder</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Dish Name:</label>
        <input
         className="form-control"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br/>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Dish Price:</label>
        <input
         className="form-control"
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <br/>
     
       <div className="mb-3">
                    <label htmlFor="poster" className="form-label">Poster</label>
                    <input
                      type="file"
                      className="form-control"
                      id="poster"
                      placeholder="image"
                    //    value={image}
                      ref={posterInputRef}
                      onChange={(e) => { setImage(e.target.files[0]) }}
                    />
                  </div>
      <br/>
      <Button variant='success' onClick={addDish}>Add Dish</Button>
       </div>
        ):(
  <div>
        <h3>Added Dishes:</h3>
        <ul>
          {dishes.map((dish, index) => (
            <li key={index}>
              {dish.name} - ${dish.price}
              <img src={dish.image} alt={dish.name} />
            </li>
          ))}
        </ul>
      </div>
        )
    }
    
    
    </>
   


    
   
  );
};

export default DishAdder;

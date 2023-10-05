import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


const EditRestaurant = () => {



 const id1 = useSelector((state) => {
       return (state.user.id)
  })



  const [restaurant, setRestaurant] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
  });
console.log(id1,'aaa')
  useEffect(() => {
  
    axios
      .get(`http://localhost:8080/restaurant/getDataById`,{
        id:id1
      })
      .then((response) => {
        console.log(response)
        // setRestaurant(response.data);
        setFormData({
          name: response.data.name,
          address: response.data.address,
          email: response.data.email,
          mobile: response.data.mobile,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


console.log(id1)
console.log(restaurant)

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    // e.preventDefault();
 
    // axios
    //   .put(`http://localhost:8080/restaurant/${id}`, formData)
    //   .then((response) => {
    //     console.log(response.data);
      
    //   })
    //   .catch((error) => {
    //     console.error(error);
       
    //   });
  };

  return (
    <div>
      <h2>Edit Restaurant</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
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
            value={formData.address}
            onChange={handleFormChange}
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
            value={formData.email}
            onChange={handleFormChange}
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
            value={formData.mobile}
            onChange={handleFormChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditRestaurant;

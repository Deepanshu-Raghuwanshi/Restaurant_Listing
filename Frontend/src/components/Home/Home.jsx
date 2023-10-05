import Button from "react-bootstrap/esm/Button";
import Header from "../Header/Header"
import Carousel from 'react-bootstrap/Carousel';
const Home = ()=>{
    return(<>
   {/* <Header/> */}
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      alt="First slide"
        style={{ maxHeight: "400px" }}
    />
    <Carousel.Caption>
      <h3>Moor Hall Restaurant </h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://plus.unsplash.com/premium_photo-1661880019417-20142c2a133b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2045&q=80"
      alt="Second slide"
        style={{ maxHeight: "400px" }}
    />
    <Carousel.Caption>
      <h3> Grace & Savour</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.architecturaldigest.in/photos/649030cff32a031170b6de37/16:9/w_1920,c_limit/Untitled%20design%20(23).png"
      alt="Third slide"
      style={{ maxHeight: "400px" }}
    />
    <Carousel.Caption>
      <h3>Paco Tapas</h3>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     <br/>
    <hr/>
    <h3>Welcome To The Restaurants Place</h3>
<hr/>
<br/>
<h5>List Your Restaurant here and get boost your business twice.</h5>
<br/>
<div>
<p>click here ... to add your restaurant.</p>
<Button className="mb-3 mt-1">Add</Button>


</div>
 <br/>
  <br/>
   <br/>
    
    </>)
}
export default Home

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './components/Home/Home'
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import PageRoutes from "./components/Routes/PageRoutes";
import RestaurantList from "./components/RestaurantList/RestaurantList";

function App() {
 
  return (
    <>
      <div id='root'> 
    
    <PageRoutes/>
    {/* <RestaurantList/> */}
      </div>
     
    </>
  )
}

export default App

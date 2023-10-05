
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './components/Home/Home'
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import PageRoutes from "./components/Routes/PageRoutes";

function App() {
 
  return (
    <>
      <div id='root'> 
    {/* <Home/> */}
    {/* <Login/> */}
    {/* <Signup/> */}
    <PageRoutes/>
      </div>
     
    </>
  )
}

export default App

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import styles from './Header.module.css'
import routes from '../Routes/routes.json'
import { useState,useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Header = ()=>{

  const [username,setUserName] = useState('')

  const navigate = useNavigate()

   const user = useSelector((state) => {
       return (state.user.Uname)
  })

  useEffect(()=>{
         setUserName(user)
  },[user])


const logoutHandler = ()=>{
  setUserName('')
    navigate('/')
}

    
  return(<>
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h3>The Restaurants Place</h3></Navbar.Brand>
        <Navbar.Toggle />
      
       
      </Container>
    </Navbar>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link 
               href="/"
               className={styles.navlinksmall}>List</Nav.Link>
              <Nav.Link
                href="/signup"
                className={styles.navlinksmall} >Signup</Nav.Link>
             
                       <Nav.Link 
                        href="/"
                        className={styles.navlinksmall}>ContactUs</Nav.Link>
            
          </Nav> 
           

      

  {!username && (
       <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            User Signup/Login : 
            <a href="/signup">Here</a>
          </Navbar.Text>
        </Navbar.Collapse>  
        
        )
         
        }
         {username && (
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            User :  {username} || 
          </Navbar.Text>
       
         <Navbar.Text>
          
           <Button onClick={logoutHandler} variant="danger">Logout</Button>
          </Navbar.Text>
        </Navbar.Collapse> 
        )
          
        } 




       
        </Container>
      </Navbar>
 


  
  </>)
}
export default Header;
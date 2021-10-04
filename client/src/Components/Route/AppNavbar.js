import React from "react";
import {Navbar, Container, Nav, Button} from "react-bootstrap";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { useSelector } from "react-redux";
import { logoutUser } from "../../JS/actions/AuthActions";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";


export const AppNavbar = () => {
  const dispatch = useDispatch()
  const {isAuth,user} = useSelector(state => state.authReducer)
  const logout = ()=>{
    dispatch(logoutUser())
  }
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="rgba(0,0,0,0.0);" variant="dark">
  <Container>
  <Link to="/"><Navbar.Brand><img src="noir.png" style={{width:"18%",transform:"translateX(-50%)",left:"50%",position:"absolute",marginTop:"-40px"}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" /></Link>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link to="/music"><Nav.Link href="#music" style={{color:"black",fontFamily:"Roboto",fontWeight:"500",fontSize:"large",textDecoration:"underline overline"}} >Music</Nav.Link></Link>
      <Link to="/videos"><Nav.Link href="#videos" style={{color:"black",float:"left",fontFamily:"Roboto",fontWeight:"500",fontSize:"large",textDecoration:"underline overline"}}>Videos</Nav.Link></Link>
      <Link to="/contact"><Nav.Link href="#contact" style={{color:"black",float:"left",fontFamily:"Roboto",fontWeight:"500",fontSize:"large",textDecoration:"underline overline"}}>Contact</Nav.Link></Link>
      {isAuth ? (
      <Link to="/dashboard"><Nav.Link href="#dashboard" style={{color:"black",fontFamily:"Roboto",fontWeight:"500",fontSize:"large",textDecoration:"underline overline"}}>Dashboard</Nav.Link></Link>
      ):(
        <div>
        </div>
         )}
        
    </Nav>
    <Nav>
      
      {isAuth ? (
        <div>
        <span style={{fontFamily:"Roboto",color:"darkgrey"}}>Welcome {user.firstName} </span>
        <Button onClick={logout} variant="secondary" style={{backgroundColor:"transparent",border:"none",color:"black",fontFamily:"Roboto",fontWeight:"500",fontSize:"large",textDecoration:"underline overline"}}>
          Logout
        </Button>
        </div>
      ):(
      <div>
      <Register/>
      <Login/>
      </div>)}
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default AppNavbar



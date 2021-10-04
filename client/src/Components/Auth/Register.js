import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Modal, Button, Form} from 'react-bootstrap';
import {registerUser} from '../../JS/actions/AuthActions';



const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRegister = ()=>{
        const newUser = {firstName,lastName,email,password}
        dispatch(registerUser(newUser))
         history.push("/dashboard")
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
        
          
        
        
    }

    return (
        <>
          <Button variant="secondary" style={{backgroundColor:"transparent",border:"none",color:"black", fontFamily:"Roboto",fontWeight:"500",fontSize:"large",textDecoration:"underline overline"}} onClick={handleShow}>
            Register
          </Button>
    
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
    <Form.Group className="mb-3">
  <Form.Label>First Name</Form.Label>
  <Form.Control type="text" placeholder="Enter your first name" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3">
  <Form.Label>Last Name</Form.Label>
  <Form.Control type="text" placeholder="Enter your last name" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
</Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={()=>{handleClose();
              handleRegister()}}>
                Register
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default Register
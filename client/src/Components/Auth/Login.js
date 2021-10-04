import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {Modal, Button, Form} from 'react-bootstrap';
import {loginUser} from '../../JS/actions/AuthActions';

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()  
    const [show, setShow] = useState(false);
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleLogin = ()=>{
      const userLogin = {email,password}
      dispatch(loginUser(userLogin))
        history.push("/dashboard")
        setEmail("")
        setPassword("")
      
    
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
          <Button variant="secondary" style={{backgroundColor:"transparent",border:"none",color:"black",fontFamily:"Roboto",fontWeight:"500",fontSize:"large",textDecoration:"underline overline"}} onClick={handleShow}>
            Login
          </Button>
    
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
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
              <Button variant="primary" onClick={()=>{handleClose();handleLogin()}}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default Login

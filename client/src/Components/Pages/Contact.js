import React from 'react';
import emailjs from 'emailjs-com'
import {Form, Button} from 'react-bootstrap'
import AppNavbar from "../Route/AppNavbar"
import Footer from "../Pages/Footer"

const Contact = () => {
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ttxo54i','template_ttqvnvp',e.target,
    "user_hwydjJaPMXhfKcAAXy4D0"
    ).then(res=>{
        console.log(res)
        alert("Your message is sent")
    }).catch(err=> console.log(err));
}


    return (
        <div>
            
        <AppNavbar/>
        <body>
        <div className="cont">
            <img className="pic" src="Couverture.jpg"/>
            <div className="contactform">
            <h2>Contact form</h2>
        <Form style={{width:'20rem', marginLeft:"auto", marginRight:"auto"}}
        onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" name="name" placeholder="Enter your name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="user_email" placeholder="Enter your email" />
  </Form.Group>
  <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1" >
    <Form.Label>Your message</Form.Label>
    <Form.Control as="textarea" name="message" rows={3} placeholder="Write your message here" />
  </Form.Group>
  <Button variant="outline-light" type="submit" value="send">
    Submit
  </Button>
</Form>
</div>
</div>
</body>
<Footer/>


        </div>
    );
}

export default Contact;
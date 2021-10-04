import React from 'react'
import { useSelector } from 'react-redux'
import AppNavbar from '../Route/AppNavbar'
import Footer from './Footer'
import { Card } from 'react-bootstrap'

const Dashboard = () => {
    const user = useSelector(state => state.authReducer.user)
    
    
    return (
        <div>
            
            <AppNavbar/>
            <body>
                <div className="cont">
            <img className="pic" src="Couverture.jpg" alt="No image"/>
            {!user ? (
                <h1>Login First</h1>
            ) : (
        <Card style={{ width: '18rem', fontFamily:"Roboto"  }}>
        <Card.Body>
        {user.role === 1 ? (
                <Card.Title style={{fontWeight:"bold"}}>Hello Admin</Card.Title>
            ) : (
            <Card.Title>Hello User</Card.Title>  
            )
            }
        <Card.Title>First Name: {user.firstName}</Card.Title>
        <Card.Title>Last Name: {user.lastName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted mt-2">Email: {user.email}</Card.Subtitle>
        <Card.Text>
        Here you can have access to exclusive content.
        </Card.Text>
        </Card.Body>
        </Card>
            )
            }
        
             
            </div>
            </body>
            <Footer/>
        </div>
    )
}

export default Dashboard

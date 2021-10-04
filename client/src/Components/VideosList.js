import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideos } from '../JS/actions/video';
import AppNavbar from './Route/AppNavbar';
import Footer from './Pages/Footer';
import Video from './Video';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toggleFalse } from '../JS/actions/edit'

const VideosList = () => {
    const dispatch = useDispatch();
    const videos = useSelector((state)=>state.videoReducer.videos)
    const loadVideos = useSelector((state)=>state.videoReducer.loadVideos)
    const user = useSelector(state => state.authReducer.user)  

    useEffect(()=>{
        dispatch(getVideos())
        //eslint-disable-next-line
    },[])

    return (
        <div>
            <AppNavbar/>
            <body style={{fontFamily:"Roboto"}} >
            
            <div className="cont" >
                    <img className="pic" src="videos.jpg" alt="No image"/>
                    <div>

            {user === null ? (<div>
                
            </div>): user.role === 1 ?(<Link to="/add">
            <Button variant="outline-light" className="add" onClick={()=>dispatch(toggleFalse())} primary>Add Video</Button>
            </Link>):  user.role === 0 ? (
               <div>
                 
               </div>
            ): (
                <div></div>
            )}
           
            </div>
            <div className="videos" style={{display:"flex", justifyContent:"center"}}>
            {/* style={{display:"flex", flexWrap:"wrap"}} */}
           {loadVideos?(
               <h3 style={{color:"white"}}>Loading<Spinner animation="border" variant="light" style={{marginLeft:"10px"}} /></h3>
               
           ):videos.length === 0 ?(<h2>There is no videos</h2>): (
           

              videos.map((el)=> <Video key={el._id} video={el}  />)
              )}
              </div>
              
              </div>
              
              </body>
              <Footer/>
        </div>
    )
}

export default VideosList

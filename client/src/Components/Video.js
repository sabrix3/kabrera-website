import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Button, Card, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { deleteVideo,getVideo } from '../JS/actions/video'
import { toggleTrue } from '../JS/actions/edit'
import ReactPlayer from 'react-player'



const Video = ({video}) => {
  const dispatch =useDispatch()
  const user = useSelector(state => state.authReducer.user)  
  
    return (
        <div>

             <Card.Group style={{margin:"10px"}}>
    <Card style={{backgroundColor:"black"}} >
      <Card.Content>

        <Card.Header style={{color:"white"}}> {video.name} </Card.Header>
        <ReactPlayer style={{margin:"10px"}} width="560" height="315" url={video.url}/>

      </Card.Content>
      <Card.Content extra>
      {user === null ? (<div>
                
            </div>):user.role === 1 ? (
        <div className='ui two buttons' style={{display:"flex", justifyContent:"center"}}>
        
        <Link to={`/edit/${video._id}`} >
          <Button basic inverted style={{marginRight:"8px", borderRadius:"5px"}}
          onClick={()=>{dispatch(getVideo(video._id));
                        dispatch(toggleTrue())}}>
            Edit
          </Button>
          </Link>
          
          <Button basic inverted color='red' style={{borderRadius:"5px"}}
          onClick={()=>dispatch(deleteVideo(video._id))}>
            Delete
          </Button>
          
          
          
        </div>
        ):(
          <div></div>
        )}
      </Card.Content>
    </Card>
    </Card.Group>
        </div>
    )
}

export default Video

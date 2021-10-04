import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { editVideo,postVideo } from '../JS/actions/video'
import { Link } from 'react-router-dom'

const Add = () => {
    const [video,setVideo]=useState({name:"",url:""})
    const videoReducer = useSelector((state)=>state.videoReducer.video)
    const edit = useSelector(state => state.editReducer.edit)
    const dispatch = useDispatch()

    useEffect(()=>{
        edit? setVideo(videoReducer) : setVideo({name:"",url:""})
    },[videoReducer,edit])

    const handleVideo= ()=>{
      if(!edit){
          dispatch(postVideo(video))
      }else {
          dispatch(editVideo(videoReducer._id,video))
      }
    }

    const handleChange = (e)=>{
        e.preventDefault();
        setVideo({...video,[e.target.name]:e.target.value})
    }

    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
              <Form style={{fontFamily:"Roboto"}}>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' name="name" value={video.name} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Video Url</label>
      <input placeholder='Url' name="url" value={video.url} onChange={handleChange} />
    </Form.Field>

    <Link to="/videos">
    <Button type='submit' onClick={handleVideo}>  {edit? "Edit" : "Add video"} </Button>
    </Link>
  </Form>
        </div>
    )
}

export default Add

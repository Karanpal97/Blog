import React ,{useCallback,useState,useEffect} from "react";
import {Container,PostCard} from "../index"
import { useNavigate,useParams } from "react-router-dom";
import blogservice from "../../App_right/blogContent"




function EditPost(){
    const [post,setPost]=useState(null);
    const navigate=useNavigate();
    const slug=useParams();

    useEffect(()=>{
       if(slug){
        blogservice.UpDate(slug).then((posts)=>{
            if(posts){
                setPost(posts)
            }
    })
       }else{
        navigate("/")
       }
    },[slug,navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
}

export default EditPost
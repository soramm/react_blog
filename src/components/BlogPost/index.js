import React,{useState,useEffect} from 'react'
import Card from '../UI/Card'
import './style.css'
import BlogData from '../../data/blog.json'

export default function BlogPost(props) {

    const initialData = {
        id:1,
        blogCategory:'',
        blogTitle: '',
        slug: '',
        postedOn: '',
        author: '',
        blogImage:'' ,
        blogText:''
    }

    const [post,setPost] = useState(initialData)
    const [postId, setPostId] = useState('')
    
    useEffect(() => {
        const postId = props.match.params.postId
        const post = BlogData.data.find(post => post.id == postId)
        setPost(post)
        setPostId(postId)
        },[post,props.match.params.postId])
        
        console.log(post)
    return (
        <div className='blogPostContainer'>
        <Card>
            <div className='blogHeader'>
                    <span className='blogCategory'>{post.blogCategory}
                    <h1 className='postTitle'>{post.blogTitle}
                    </h1>
                        <span className='postedBy'>{post.postedOn}{''}{post.author}</span>
                </span>
            </div>
            <div className='postImageContainer'>
                    <img src={post.blogImage}/>
                </div>
                <div >
                    <p>{post.blogText}</p>
                </div>
            </Card>
        </div>
    )
}

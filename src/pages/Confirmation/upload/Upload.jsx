import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import upload from '../upload/Upload.css'
import axios from 'axios'

const Upload = () => {

    const blogURl = "https://word-critique.onrender.com/create"

    const story = useRef(null)
    const title = useRef(null)
    const [file, setFiles] = useState("")
    const handleFile = (ev) => {
        console.log(ev.target.files[0]);
        setFiles(ev.target.files[0])
    }

    const handlepost = async (e) => {
        e.preventDefault();
        console.log(story.current.value, title.current.value, file);
        try {
            const formdata = new FormData()
            formdata.set("body", story.current.value)
            formdata.set('title', title.current.value)
            formdata.set("image", file)
            // formdata.set('category', category)
            console.log(formdata);

            if (story.current.value == "" || title.current.value == "") {
                console.log("All data are needed");
            }
            else {
                const response = await axios.post(blogURl, formdata)
                console.log(response.data);
                console.log("done");
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <main >
            <div className='Blend-mode'>
            <div className='div-upload shadow'  >
                <h4 className='upload'>Upload post</h4>
               
                <div className='div-post'>
                    <p className='post'>Create a new post</p>
                        <hr className='hr-post' />
                        <form action="" onSubmit={handlepost}>
                    <div className='div-input'>
                        <input className='description shadow' ref={story} type="text" />
                  
                    </div>
                    <div className='div3'>
                         <div className='input-file'>
                        <input onChange={(ev)=>handleFile(ev)} className='file' type="file" />
                        </div>
                         <div className='allfile'>
                        <input  placeholder='title' ref={title} className='input-title shadow'  type="text " />
                            
                            
                            </div>
                            </div>
                        <div className='div-buttons shadow'>
                            <select name="" id="">
                                <option value="">Category</option>
                                <option value="Sport">Sport</option>
                                <option value="Religion">Religion</option>
                                <option value="News">News</option>
                                <option value="Music">Music</option>
                                <option value="Business">Business</option>
                                <option value="Others">Others</option>
                            </select>
                            <button>POST</button>

                </div>
                      </form>  
                </div>
               
                </div> 
                
                
            </div>    
      </main>
    
  )
}

export default Upload

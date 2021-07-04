import React, { Component } from 'react'
import axios from 'axios'
import '../Login/Signup.css'
import './Post.css'
import {app} from '../../base'

class PostForm extends Component{
    static images = '';
    static uploading = false;
    static file = 'ha';

    constructor(props){
        super(props)

        this.state = {
            images: '',
            place: '',
            details: [],
            stars: 5,
            likes:0,
            dislikes: 0,
            place_type: 'Adventure'
        }

        this.urlState = {
            images: []
        }
    }

    enterDetails = function()
    {
        this.details.map(s => console.log(s))
    }


    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    changeDetailsHandler = (e) => {
        this.setState({[this.detail]: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        if(localStorage.getItem('loggedin') === 'true')
        {
            console.log(this.state)
            if(this.file === 'ha')
            {
                alert("Atleast one photo for cover is required!")
                return;
            }
            alert('Please Wait while we Upload!')
            axios.post('http://localhost:12345/posts', this.state).then(
                res => {
                    alert('post updated')
                }
            ).catch(err => {
                alert("Server is under maintainance.")
            })
        }
        else
        {
            alert("Please login first to get write access.")
        }
        
    }

    changeImageHandler = (e) => {
        e.preventDefault()
        this.file = e.target.files[0]
    }

    uploadImage = async (e) => {
        e.preventDefault()
        if(localStorage.getItem('loggedin') === 'true')
        {
            alert("please wait while we upload!")
            this.uploading = true;
            const file = this.file;
            const storageRef = app.storage().ref()
            const fileref = storageRef.child(file.name)
            await fileref.put(file).then(() =>{
                alert("Uploaded, please wait for confirmation")
            }).catch(err => {
                console.log("Upload failed!")
            });
            await fileref.getDownloadURL().then(res => {
                if(this.images)
                    this.images = this.images + "././././" + res;
                else{    
                    this.images = res;
                }
                this.setState({["images"]: this.images})
                alert(this.images)
            })
        }
        else
        {
            alert("Please login first to get write access.")
        }
        
    }


    setFileUrl

    render(){
        const { place_type, place, details} = this.state
        return(
            <>
                <div className="post-container">
                    <form onSubmit={this.submitHandler}>
                        <label>Where did you go??</label>
                        <input type='text' id='place' name='place'  value={place} onChange={this.changeHandler}/>
                        <label>Which one of these suits the most??</label>
                        <select id='place' name='place_type' value={place_type} onChange={this.changeHandler}>
                            <option>Adventure</option>
                            <option>Luxury</option>
                            <option>Mystery</option>
                            <option>Adventure</option>
                            <option>Adrenaline</option>
                        </select>

                        <label>What's the best about this place??</label>
                        <textarea type='text' id='details' name='details' value={details} onChange={this.changeHandler}/>
                        <label>Upload Images [Preferably 5]&nbsp;</label>
                        <input type="file" id="myfile" name="images" onChange={this.changeImageHandler}/>

                        <button onClick={this.uploadImage} className="upload-button">Upload Image</button>

                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </>
        );
    }
}

export default PostForm;
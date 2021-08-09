import React, { useEffect, useState } from 'react'
import CarouselContainer from '../Carousel/Carousel';
import './CSS/Details.css'
import CardItems from '../Card/CardItems'

import { Link, useParams } from 'react-router-dom';

import { Button } from '../Button/Button';
import '../Footer/Footer.css';
import Comment from '../Comments/Comments';
import Detailselement from '../Details/Details';
import axios from 'axios'


import { api_url } from '../../base'


let getPost = (id) => {
  return fetch(api_url+ 'posts/'+id)
}

let gettenPost = () => {
  return fetch(api_url+'posts/home')
}

let getComment = (id) => {
  return fetch(api_url+'comment/'+id)
}




function Details(){
    let i = 0;
    const [comments, setComments] = useState([])
    const [rating, setRating] = useState(1)

    const [comment, setComment] = useState([])
    const [postedComment, setPostedComment] = useState({})
    const [newComment, setNewComment] = useState(false)

    const [place, setPlace] = useState('')
    const [details, setDetails] = useState([])
    const [images, setImages] = useState([])
    //const [stars, setStars] = useState(0)
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const { id } = useParams()
    const [places, setPlaces]= useState([])



  useEffect(() => {
    gettenPost().then(res => {
      if(res.ok)
        return res.json()
    }).then(res => {
      setPlaces(res)
      console.log(res)
    })
  }, [])
  

    // useEffect(() => {
      
    // })




    useEffect(() => {
      getPost(id).then(res => {
        if(res.ok)
          return res.json()
      }).then(res => {
        setDetails(res.details)
        setImages(res.images)
        //setStars(res.stars)
        setLikes(res.likes)
        setPlace(res.place)
        setDislikes(res.dislikes)
        console.log(res)
      });

      getComment(id).then(res => {
        if(res.ok)
          return res.json()
      }).then(res => {
        setComments(res)
        console.log(res)
      });
      window.scrollTo(0, 0);
    }, []);
    


    const commentChangeHandler = (event) => setComment(event.target.value)
    const ratingChangeHandler = (event) => setRating(event.target.value)


    function conditional_comment_render(){
      if(newComment === true)
      {
        return(
          <Comment prop={postedComment} />
        );
      }
    }


    const postComment = () => {
      if(newComment === true)
      {
        alert("You can post only one comment after a login, please logout and login to post a new comment");
        return;
      }
      if(localStorage.getItem('loggedin') === 'true')
      {
        
        axios.post(api_url+ 'comment', {"comment": comment, "rating": rating, "userName": localStorage.getItem('user'), "postId": id}).then(
          res => {
              setPostedComment({
                "userName": localStorage.getItem('user'),
                "comment": comment,
                "rating": rating
              })
              setNewComment(true)
          }
        ).catch(err => {
            alert("Server is under maintainance.")
        })
      }
      else
      {
        alert('Please login first to get write acces to this site.')
      }
      
    }


    const likePost = () => {
      axios.patch(api_url + 'posts/like/' + id, {"likes" : likes + 1}).then(
        res => {
          setLikes(likes + 1);
        }
      )
    }

    const dislikePost = () => {
      axios.patch(api_url + 'posts/dislike/' + id, {"dislikes" : dislikes + 1}).then(
        res => {
          setDislikes(dislikes + 1);
        }
      )
    }

    const changeView = (e) => {
      alert(e.target.value)
    }

    return(
        <>
            <CarouselContainer slides={images}/>

            <div className="row detail-container">
                <div className="column-left">

                <br></br>
                    <br></br>
                    <h1 className="heading">{place}</h1>
                    {
                      details.map(s => (
                        <Detailselement props={s} />
                      ))
                    }

                    <p className="rating">  &emsp; {likes} &emsp; 
                      <button onClick={likePost} className='like-dislike'><i class="fas fa-thumbs-up fa-2x"></i></button> &emsp; {dislikes} &emsp; 
                      <button onClick={dislikePost} className="like-dislike"><i class="fas fa-thumbs-down fa-2x"></i></button>&nbsp;
                    </p>

                    <h4 className="comment-heading">COMMENTS</h4>
                    {
                      conditional_comment_render()
                    }
                    {  
                        comments.map(s => (
                            <Comment prop={s}/>
                        ))
                    }
                    <br></br>
                    <br></br>
                </div>
                <div className="column-right hide">

                <br></br>
                    <br></br>
                    <h1 className="heading">Other Places</h1>
                    <div className='cards__container'>
                    <div className='cards__wrapper'>
                    <ul className='cards__items' onClick={changeView}>
                            {places.map(s => (<CardItems className="local_card_container" 
                                src={s.images[0] ? s.images[0] : "images/img-1.jpg"}
                                label={s.place_type}
                                Path={`${s._id}`}
                        />))}
                    </ul>
                    </div>
                    </div>
                </div>
            </div>


    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Have any comments?
        </p>
        <p className='footer-subscription-text'>
          Well you can post them here.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='comment'
              name='comment'
              type='comment'
              placeholder='Comment Here'
              onChange={commentChangeHandler}
            />
            <br></br>
            <select id='rate' name='rating' onChange={ratingChangeHandler}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>

            <br></br>
            <Button buttonStyle='btn--outline' onClick={postComment}>Comment</Button>
          </form>
        </div>
      </section>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRAVELISTA
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRAVELISTA © 2020</small>
          <div class='social-icons'>
            <a class='social-icon-link facebook' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class='fab fa-facebook-f' /></a>
            
            <a class='social-icon-link instagram' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class='fab fa-instagram' /></a>
            
            <a class='social-icon-link youtube' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class='fab fa-youtube' /></a>
            
            <a class='social-icon-link twitter' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class='fab fa-twitter' /></a>
            
            <a class='social-icon-link linkedin' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class='fab fa-linkedin' /></a>
            
          </div>
        </div>
      </section>
    </div>
        </>
    );
}

export default Details;
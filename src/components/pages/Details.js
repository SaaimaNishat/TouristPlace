import React, { useState } from 'react'
import CarouselContainer from '../Carousel/Carousel';
import './CSS/Details.css'
import data from '../../sample.json'
import CardItems from '../Card/CardItems'
import para from '../../sample_para.json'

import { Link } from 'react-router-dom';

import { Button } from '../Button/Button';
import '../Footer/Footer.css';
import Comment from '../Comments/Comments';
import com from '../../sample_comment.json';


function Details(){
    let i = 0;
    const [comment, setComment] = useState('')


    const commentChangeHandler = (event) => setComment(event.target.value)


    const postComment = () => {
        localStorage.setItem("comment", comment);
    }

    return(
        <>
            <CarouselContainer />

            <div className="row">
                <div className="column-left">
                    <h1 className="heading">Tourism in {para.place}</h1>
                    <p className="paragraph">{para.details}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="paragraph">{para.details1}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="paragraph">{para.details2}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="paragraph">{para.details3}</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="paragraph">{para.details4}</p>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h4 className="comment-heading">COMMENTS</h4>
                    {  
                        com.slice(0,5).map(s => (
                            <Comment prop={s}/>
                        ))
                    }
                    <br></br>
                    <br></br>
                </div>
                <div className="column-right">
                    <h1 className="heading">Nearby Places</h1>
                    <div className='cards__container'>
                    <div className='cards__wrapper'>
                    <ul className='cards__items'>
                            {data.map(s => (<CardItems
                                src={s.src? s.src : "images/img-1.jpg"}
                                text={s.name}
                                label={s.type}
                                path='/services'
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
              className='footer-input comment'
              name='comment'
              type='comment'
              placeholder='Comment Here'
              onChange={commentChangeHandler}
            />
            <br></br>
            <select className="select-rating" id="rate" name="rating">
                <option value="0">No Rating</option>
                <option value="1">1 STAR</option>
                <option value="2">2 STAR</option>
                <option value="3">3 STAR</option>
                <option value="4">4 STAR</option>
                <option value="5">5 STAR</option>
            </select>
            <br></br>

            <br></br>
            <Button buttonStyle='btn--outline' onClick={postComment}>Comment</Button>
          </form>
          <br></br>
          <Button>
            <i class="fas fa-thumbs-up"></i>
          </Button>

          <br></br>
          <Button>
          <i class="fas fa-thumbs-down"></i>
          </Button>
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
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
        </>
    );
}

export default Details;
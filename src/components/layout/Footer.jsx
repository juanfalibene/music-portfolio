import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className='footer-left'>
        <a
          href='https://juanfalibene.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='footer-brand'>
            <img
              src='https://links.juanfalibene.com/dev-tree/wp-content/themes/webdevtree/images/juanfalibene_profile.svg'
              className='img-profile'
              alt='Juan Falibene'
            />
            <span className='footer-text'>juanfalibene.com</span>
          </div>
        </a>
      </div>
      <div className='footer-right'>
        <a href='mailto:juanignaciofalibene@gmail.com' className='footer-link'>
          Bookings
        </a>
        <Link to='/presskit' className='footer-link'>
          Presskit
        </Link>
      </div>
    </footer>
  );
};

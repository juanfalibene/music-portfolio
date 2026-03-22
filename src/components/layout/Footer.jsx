import React from "react";

export const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};

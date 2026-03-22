import React from 'react';
import { Link } from 'react-router-dom';

export const Error404 = () => {
  return (
    <section className='error'>
      <div className='page'>
        <h2 className='page-title sc-error'>
          Page Not Found. ERROR 404 :( <Link to={'/home'}>Go back.</Link>
        </h2>
      </div>
    </section>
  );
};

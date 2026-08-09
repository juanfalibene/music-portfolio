import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className='about'>
      <div className='page'>
        <div className='home-hero'>
          <h1>ABOUT</h1>
        </div>

        {/* Contenedor texto + imagen */}
        <div className='about-content'>
          <div className='about-text'>
            <p>
              Hello, and good day! I'm a Disc Jockey and music selector with a
              deep passion for listening, selecting, mixing, and sharing music.
              It's an endless loop that has shaped my journey and will continue
              to do so for life. My musical focus spans across Soul, Funk,
              Modern Soul, Rare Groove, and Jazz, always seeking to create
              meaningful connections through sound. More than anything, I simply
              love sharing music.
            </p>

            <p>
              Alongside this foundation, I also feel a strong connection to club
              culture and its atmosphere. I’m particularly drawn to Disco and
              House music, especially in sessions that blend the organic essence
              of sampled material with the energy and texture of electronic
              music.
            </p>

            <p>
              I've had the pleasure of showcasing my sessions at various venues,
              most notably at the Café Berlin Music Club in Madrid from 2016 to
              2019. During that period, I had the opportunity to share the stage
              with renowned international artists such as Folamour, Hugo LX,
              Nickodemus, Pabels and Manu Desrets. Additionally, I've
              collaborated with radio stations in Madrid, Barcelona, Glasgow,
              and London.
            </p>

            <p>
              Currently based in Barcelona, I am always open to new
              opportunities to share my music through listening sessions and
              creative collaborations.
            </p>

            <p>
              I invite you to explore some of my previous sessions, which also
              include curated Spotify playlists that are regularly updated with
              new discoveries.
            </p>

            <p className='text-subscribe'>
              For upcoming sessions and new music discoveries, feel free to
              connect with me.
            </p>

            <div className='about-links'>
              <a href='mailto:juanignaciofalibene@gmail.com'>BOOKINGS</a>
              <Link to='/presskit'>PRESSKIT</Link>
            </div>
          </div>

          <div className='about-image'>
            <img
              src='/img/r005.jpeg'
              alt='Juan Falibene DJ session'
              loading='lazy'
            />
          </div>
        </div>

        {/* Contenedor social independiente */}
        <div className='about-social'>
          <ul>
            <li>
              <a
                href='https://linktr.ee/juanfalibene'
                target='_blank'
                rel='noreferrer'
              >
                Linktree
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/juanfalibene/'
                target='_blank'
                rel='noreferrer'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://ra.co/dj/juanfalibene'
                target='_blank'
                rel='noreferrer'
              >
                Resident Advisor
              </a>
            </li>
            <li>
              <a
                href='https://soundcloud.com/juanfalibene'
                target='_blank'
                rel='noreferrer'
              >
                Soundcloud
              </a>
            </li>
            <li>
              <a
                href='https://www.mixcloud.com/juanfalibene/'
                target='_blank'
                rel='noreferrer'
              >
                Mixcloud
              </a>
            </li>
            <li>
              <a
                href='https://open.spotify.com/user/11101659890'
                target='_blank'
                rel='noreferrer'
              >
                Spotify
              </a>
            </li>
            <li>
              <a
                href='https://dev.juanfalibene.com/discava/index.html'
                target='_blank'
                rel='noreferrer'
              >
                Discava!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

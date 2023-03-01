// import { useState } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import TextTransition, { presets } from 'react-text-transition';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import 'prismjs/themes/prism-tomorrow.css';
import BgLines from '../src/img/line.svg';
import Logo from '../src/img/logo.svg';
import Facebook from '../src/img/facebook.svg';
import Twitter from '../src/img/twitter.svg';
import Linkedin from '../src/img/linkedin.svg';
import gred from '../src/img/gred.png';
import Avatar from '../src/img/avatar.png';
// import BgVideo from '../src/img/BgVideo.webm';

import { Dialog } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function MyApp({ Component, pageProps }) {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [index, setIndex] = React.useState(0);
  const TEXTS = [
    'Creative Designer',
    'Web Designer',
    'UI/UX Designer',
    'UI/UX Developer',
  ];

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  const sunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      className="dark:opacity-50"
    >
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip0_192_823)"
      >
        <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
      </g>
      <defs>
        <clipPath id="clip0_192_823">
          <path
            className="fill-current text-white"
            d="M0 0H24V24H0z"
            transform="translate(.5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="stroke-current text-gray-400 dark:text-white"
        d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
      ></path>
    </svg>
  );

  // const rootNode = document.getElementById('app');
  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener('mousemove', update);
    window.addEventListener('touchmove', update);
    return () => {
      window.removeEventListener('mousemove', update);
      window.removeEventListener('touchmove', update);
    };
  }, [setX, setY]);


  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  
  return (
    <>
      <div className={styles.Bg__video_block}>
        <div className={styles.Custom__cursor}>
          <video
            playsInline
            loop
            muted
            controls
            alt="All the devices"
            src="https://res.cloudinary.com/dpe9quv0o/video/upload/v1677656199/BgVideo_epbfpg.webm"
            ref={videoEl}
            style={{
              // transform: `translateX(${x}px) translateY(${y}px)`,
              transform: `translateX(${x}px)`,
            }}
          />
        </div>
      </div>
      {/* <h1>{`x: ${x}; y: ${y};`}</h1> */}
      {/* <span className="theme-bejamas" /> */}
      {/* <Component {...pageProps} /> */}
      <MouseParallaxContainer
        className="parallax"
        containerStyle={{
          width: '100%',
          height: '100vh',
          display: 'grid',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
        globalFactorX={0.3}
        globalFactorY={0.3}
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={0.3}
          factorY={0.3}
          style={{
            background: `url(${BgLines.src})`,
            backgroundPositionY: '50%',
            transform: 'scale(1.1)',
            position: 'absolute',
            filter: 'opacity(20%) brightness(100%) saturate(1)',
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            zIndex: '1',
          }}
        />
      </MouseParallaxContainer>
      <div className="main-page">
        <div className={styles.Video__bg_container}></div>
        <header className="px-6 lg:px-40 pt-5 header">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src={Logo.src}
                  alt="Landscape picture"
                  width={80}
                  height={80}
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                asdasda
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12"></div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
              {/* <div className="flex justify-center rounded-3xl p-1 switcher">
                <button
                  type="button"
                  aria-label="Use Dark Mode"
                  onClick={() => {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                  }}
                  className="flex items-center h-full pr-2 dark:bg-primary rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
                >
                  {moonIcon}
                </button>

                <button
                  type="button"
                  aria-label="Use Light Mode"
                  onClick={() => {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                  }}
                  className="flex items-center h-full pr-2 bg-primary dark:bg-transparent rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
                >
                  {sunIcon}
                </button>
              </div> */}
              <a href="#" className="text-lg font-semibold text-gray-800">
                Say <span className="text-gray-900 font-bold">Hi!</span>
              </a>
            </div>
          </nav>
          {/* <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus="true"
              className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  asdadasda
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">asda</div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog> */}
        </header>
        <main>
          <div className={styles.Bottom__grd}>
            {/* <Image
              src={gred.src}
              alt="Landscape picture"
              className={styles.Bottom__grd}
              width={900}
              height={900}
            /> */}
          </div>
          <div className="px-6 lg:px-40">
            <section className={styles.Herozone__Section}>
              <div className={styles.Left__column}>
                <div className={styles.text__block}>
                  <h6>Hello I’m</h6>
                  <h1>Deepak Gusaiwal</h1>
                  <h2>
                    A
                    <span>
                      <TextTransition springConfig={presets.wobbly}>
                        {TEXTS[index % TEXTS.length]}
                      </TextTransition>
                    </span>
                  </h2>
                  <p>
                    I am a UI/UX developer with expertise in HTML, CSS, and
                    JavaScript. My focus is on user-centered design, creating
                    intuitive and engaging digital experiences that prioritize
                    the end-user&lsquo;s needs. I am passionate about designing
                    beautiful and functional interfaces that make a positive
                    impact on people&lsquo;s lives.
                  </p>
                </div>
                <div className={styles.bottom__Action}>
                  <button className="btn btn-primary">Hire Me</button>
                  <ul className={styles.Banner__icons_list}>
                    <li>
                      <a
                        href="https://www.facebook.com/notoriousdeepg/"
                        target={'_blank'}
                        rel={'noreferrer'}
                      >
                        <Image
                          src={Facebook.src}
                          alt="Facebook"
                          width={500}
                          height={500}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/deepakgusaiwal/"
                        target={'_blank'}
                        rel={'noreferrer'}
                      >
                        <Image
                          src={Linkedin.src}
                          alt="Linkedin"
                          width={500}
                          height={500}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/deepak_gusaiwal"
                        target={'_blank'}
                        rel={'noreferrer'}
                      >
                        <Image
                          src={Twitter.src}
                          alt="Twitter"
                          width={500}
                          height={500}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className={styles.Right__content_block}>
                <div className={styles.User__image_container}>
                  <div className={styles.Shapes__block}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      width="100"
                      height="100"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <circle cx="50" cy="50" r="50" fill="#F65823"></circle>
                    </svg>
                  </div>
                  <Image
                    className={styles.Avatar__image}
                    src={Avatar.src}
                    alt="Avatar"
                    width={200}
                    height={200}
                    unoptimized
                    layout="fill"
                  />
                </div>
              </div> */}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default MyApp;

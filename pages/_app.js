// import { useState } from 'react';
import React, { useState } from 'react';
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

  return (
    <>
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
            filter: 'opacity(50%) brightness(100%)',
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            zIndex: '1',
          }}
        />
      </MouseParallaxContainer>
      <div className="">
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
                  // className={styles.Header__logo}
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
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
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
            <Image
              src={gred.src}
              alt="Landscape picture"
              className={styles.Bottom__grd}
              width={900}
              height={900}
            />
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
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default MyApp;

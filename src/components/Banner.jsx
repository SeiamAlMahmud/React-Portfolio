import React from 'react'
import headerImage from "../assets/img/header.png"
import Typewriter from 'typewriter-effect';
import bgBanner from "../assets/img/banner-bg.png"
function Banner() {
  return (
    <>
      <div style={{
        backgroundImage: `url(${bgBanner})`
      }} className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={headerImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold sm:flex gap-2">I'm <span className='text-white'>
              <Typewriter
                options={{
                  strings: ['Web Designer', 'Forex Trader', "UI/UX Designer", "Graphics Designer"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </span></h1>
            <p className="py-6 text-lg text-white">Provident cupiditate Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, dolorem? voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner





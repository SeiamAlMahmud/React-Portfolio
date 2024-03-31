import React from 'react'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../components/jsonFiles/programming.json";

function ProjectCard2() {
  return (
    <>

      <div   className="hero min-h-screen bg-base-200 bg-no-repeat bg-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Lottie data-aos="zoom-in-up"  data-aos-offset="200" data-aos-easing="ease-in-down" className='max-w-xl rounded-xl shadow-3xl border-white' animationData={groovyWalkAnimation} />
          <div data-aos="zoom-in-right"  data-aos-offset="200" data-aos-easing="ease-in-out">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard2
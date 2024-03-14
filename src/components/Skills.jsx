import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meterImg1 from "../assets/img/meter1.svg"
import meterImg2 from "../assets/img/meter2.svg"
import meterImg3 from "../assets/img/meter3.svg"
import sharpImage1 from "../assets/img/color-sharp.png"
// Install AOS for scroll Animation          npm install --save aos@next    https://github.com/michalsnik/aos
import AOS from 'aos';
import 'aos/dist/aos.css';


function Skills() {


    AOS.init();

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1296, min: 800 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 1
        }
    }

    return (<>


        <div data-aos="fade-left"  data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-delay="0" className='justify-center items-center px-5 pl-10 sm:pl-32 py-16 z-10  bg-no-repeat bg-left' style={{ backgroundImage: `url(${sharpImage1})` }}>
            <Carousel responsive={responsive} infinite={true} showDots={true} draggable={false} swipeable={false} autoPlaySpeed={1000} >
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={meterImg1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web Development!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Hire Me</button>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={meterImg2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">UI/UX Development!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Hire Me</button>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={meterImg3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Graphics Design!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Hire Me</button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>


    </>
    )
}

export default Skills


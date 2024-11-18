import React, { } from "react";
import usa from '../assets/flag/usa2.jpg'
import uk from '../assets/flag/uk.jpg'
import canada from '../assets/flag/canada.jpg'
import aus from '../assets/flag/australia.jpg'





const HomeBanner = () => {
    return (

        <div className="w-11/12 mx-auto">
            <div className="carousel w-full md:h-[500px] rounded-xl">
                <div id="slide1" className={`carousel-item relative w-full`}>
                    <img
                        src={usa}
                        className="w-full" />
                        
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <p className=" text-2xl md:text-4xl lg:text-6xl bg-transparent font-light  text-center text-white left-80 right-60 top-52 absolute ">UNITED STATES</p>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={uk}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <p className=" text-2xl md:text-4xl lg:text-6xl bg-transparent font-light  text-center text-white left-80 right-60 top-52 absolute ">UNITED KINGDOM</p>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={canada}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>

                    <p className=" text-2xl md:text-4xl lg:text-6xl bg-transparent font-light  text-center text-white left-80 right-60 top-52 absolute ">CANADA</p>


                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={aus}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <p className=" text-2xl md:text-4xl lg:text-6xl bg-transparent font-light  text-center text-white left-80 right-60 top-52 absolute ">AUSTRALIA</p>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
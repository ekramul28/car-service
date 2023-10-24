
const Banner = () => {
    return (
        <div>
            <div className="carousel h-[600px] md:w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="assets/images/banner/5.jpg" className="w-full  " />
                    <div className="absolute  transform    left-5 right-5 top-9">
                        <div className="my-2 w-[300px] lg:w-[436px] lg:my-40 lg:mx-4" >
                            <h1 className="text-4xl lg:text-6xl font-bold text-white">Affordable Price For Car Servicing</h1>
                            <p className="text-white py-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className=" p-2 rounded-lg     text-white bg-[#FF3811]">Latest Project</button>
                            <button className=" p-2 rounded-lg border ml-2 text-white ">Discover More</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-2/2 left-5 right-5 top-3/4">
                        <a href="#slide4" className="btn btn-circle bg-red-600 border-none text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-red-600 border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="assets/images/banner/1.jpg" className="w-full" />
                    <div className="absolute  transform    left-5 right-5 top-9">
                        <div className="my-2 w-[300px] lg:w-[436px] lg:my-40 lg:mx-4" >
                            <h1 className="text-4xl lg:text-6xl font-bold text-white">Affordable Price For Car Servicing</h1>
                            <p className="text-white py-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className=" p-2 rounded-lg     text-white bg-[#FF3811]">Latest Project</button>
                            <button className=" p-2 rounded-lg border ml-2 text-white ">Discover More</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-2/2 left-5 right-5 top-3/4">
                        <a href="#slide1" className="btn btn-circle bg-red-600 border-none text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-red-600 border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="assets/images/banner/2.jpg" className="w-full" />
                    <div className="absolute  transform    left-5 right-5 top-9">
                        <div className="my-2 w-[300px] lg:w-[436px] lg:my-40 lg:mx-4" >
                            <h1 className="text-4xl lg:text-6xl font-bold text-white">Affordable Price For Car Servicing</h1>
                            <p className="text-white py-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className=" p-2 rounded-lg     text-white bg-[#FF3811]">Latest Project</button>
                            <button className=" p-2 rounded-lg border ml-2 text-white ">Discover More</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-2/2 left-5 right-5 top-3/4">
                        <a href="#slide2" className="btn btn-circle bg-red-600 border-none text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-red-600 border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="assets/images/banner/3.jpg" className="w-full" />
                    <div className="absolute  transform    left-5 right-5 top-9">
                        <div className="my-2 w-[300px] lg:w-[436px] lg:my-40 lg:mx-4" >
                            <h1 className="text-4xl lg:text-6xl font-bold text-white">Affordable Price For Car Servicing</h1>
                            <p className="text-white py-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className=" p-2 rounded-lg     text-white bg-[#FF3811]">Latest Project</button>
                            <button className=" p-2 rounded-lg border ml-2 text-white ">Discover More</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-2/2 left-5 right-5 top-3/4">
                        <a href="#slide3" className="btn btn-circle bg-red-600 border-none text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-red-600 border-none text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
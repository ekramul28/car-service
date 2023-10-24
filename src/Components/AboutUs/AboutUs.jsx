
const AboutUs = () => {
    return (
        <div className=" lg:flex justify-center items-center my-10">
            <div className="relative w-1/2 ">

                <img className="w-[460px] h-[473px] rounded-lg" src="assets/images/about_us/person.jpg" alt="" />
                <img className="absolute w-[327px] h-[332px] top-44 border-8 border-white left-60 " src="assets/images/about_us/parts.jpg" alt="" />

            </div>
            <div className="w-1/2">
                <h3 className="text-[#FF3811] font-semibold ">About Us</h3>
                <h1 className="text-2xl font-bold py-2">We are qualified & of experience in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className="py-2">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn bg-[#FF3811] border-none text-white">
                    Get More Info
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
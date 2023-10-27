import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const { title, price } = details;
    return (
        <div >
            <form className="mt-36 bg-[#F3F3F3] py-20">

                <div className="md:flex justify-center items-center gap-10 text-center md:text-start">
                    <div className="">
                        <div  >
                            <label>
                                <span>Name</span><br></br>
                            </label>
                            <label>
                                <input type="text" name="name" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your name" />
                            </label>
                            <div  >
                                <label>
                                    <span>Phone</span><br></br>
                                </label>
                                <label>
                                    <input type="number" name="phone" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your phone" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div >
                            <label>
                                <span>Last Name</span><br></br>
                            </label>
                            <label>
                                <input type="text" name="lastName" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your Last Name" />
                            </label>
                            <div  >
                                <label>
                                    <span>Email</span><br></br>
                                </label>
                                <label>
                                    <input type="email" name="email" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your Email" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid justify-center items-center">
                    <div className="w-full  text-center" >
                        <label>
                            <span className="text-start">Massage</span><br></br>
                        </label>
                        <label>
                            <input type="text" name="massage" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[960px] h-[60px]" placeholder="Your Massage" />
                        </label>
                    </div>
                    <input type="submit" value="Order Confirm" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[960px] h-[60px] bg-[#FF3811] mt-4 text-white " />

                </div>
            </form>
        </div>
    );
};

export default CardDetails;
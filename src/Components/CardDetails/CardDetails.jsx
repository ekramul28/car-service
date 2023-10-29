import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CardDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const { user } = useContext(AuthContext);
    const { price, _id, title, img, } = details;
    const handelForm = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const price = form.price.value;
        const email = form.email.value;
        const date = form.date.value;
        const value = { name, price, email, date, service_id: _id, service: title, _img: img }
        console.log(value);

        fetch("http://localhost:5000/booking", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'add SuccessFull',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }
    return (
        <div >
            <Header></Header>
            <form onSubmit={handelForm} className="mt-36 bg-[#F3F3F3] py-20">

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
                                    <span>Price</span><br></br>
                                </label>
                                <label>
                                    <input type="number" name="price" defaultValue={price} id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your phone" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div >
                            <label>
                                <span>Date</span><br></br>
                            </label>
                            <label>
                                <input type="date" name="date" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" />
                            </label>
                            <div  >
                                <label>
                                    <span>Email</span><br></br>
                                </label>
                                <label>
                                    <input type="email" name="email" defaultValue={user?.email} id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your Email" />
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
            <Footer></Footer>
        </div>
    );
};

export default CardDetails;
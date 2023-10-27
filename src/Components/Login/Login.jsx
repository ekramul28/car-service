import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'


const Login = () => {
    const { loginIn } = useContext(AuthContext);
    // const [error, setError] = useState('');

    const handelLogIn = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginIn(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: 'success',
                        text: 'userCreact SuccessFull',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }

            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })

                }


            })
    }
    return (
        <div>
            <Header></Header>

            <form onSubmit={handelLogIn}>
                <div className=" lg:flex justify-center items-center my-10">
                    <div className="flex justify-center">
                        <img className="w-[460px] h-[500px]" src="assets/images/login/login.svg" alt="" />
                    </div>
                    <div className=" bg-[#FFF] border-2 p-10 grid justify-center rounded-lg">
                        <h1 className="text-xl font-semibold text-center">Login</h1>

                        <div >

                            <div className="p-2" >
                                <label>
                                    <span>Email</span><br></br>
                                </label>
                                <label>
                                    <input type="text" name="email" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your Email" />
                                </label>
                            </div>
                            <div className="p-2" >
                                <label>
                                    <span>Password</span><br></br>
                                </label>
                                <label>
                                    <input type="text" name="password" id="" className="border-2 p-2 rounded-md w-[350px] md:w-[461px] h-[60px]" placeholder="Your password" />
                                </label>
                            </div>
                            <div className="my-2 flex justify-center rounded-md">
                                <label>
                                    <input type="submit" id="" value="login" className=" p-2 rounded-md w-[350px] md:w-[461px] h-[60px] bg-[#FF3811] text-white" placeholder="Your password" />
                                </label>

                            </div>
                            <div>
                                <h1 className="text-xl text-center">Go to <Link to="/register" className="text-[#FF3811]">singUp</Link> </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
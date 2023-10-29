import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Book from "../Book/Book";

const Booking = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div>
                {
                    booking.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Booking;
import { Link } from "react-router-dom";

const Card = ({ services }) => {
    const { _id, title, img, price, description } = services
    return (
        <div>
            <div className="card h-[400px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold">{title}</h2>
                    <p className="text-[#FF3811] font-bold">Price:{price}</p>
                    <div className="flex justify-end ">
                        <Link to={`/checkOut/${_id}`}><button className="btn ">Details</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
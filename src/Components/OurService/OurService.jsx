import { useEffect, useState } from "react";
import Card from "../Card/Card";

const OurService = () => {
    const [servicess, setServicess] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServicess(data);
            })
    }, [])
    return (
        <div >
            <div className="text-center my-6">
                <h3 className="text-[#FF3811] text-lg">Service</h3>
                <h1 className="font-bold text-2xl">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
                {
                    servicess.map(services => <Card key={services._id} services={services} ></Card>)
                }
            </div>
        </div>
    );
};

export default OurService;
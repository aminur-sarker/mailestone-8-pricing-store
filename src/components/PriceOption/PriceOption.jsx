import { FaHandPointRight } from "react-icons/fa";
const PriceOption = ({ option }) => {
    const { id, name, features, price } = option
    return (
        <div>

            <div className="card bg-base-100 w-96 shadow-xl flex flex-col">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex-grow">
                        {
                            features.map(feature => <p className="flex"><FaHandPointRight className="mr-3" />{feature}</p>)
                        }
                    </div>

                    <button className=" rounded-lg py-2 bg-green-500 hover:bg-green-900">Buy Now</button>

                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PriceOption;
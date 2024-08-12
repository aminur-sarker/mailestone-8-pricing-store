import React from 'react';
import PriceOption from '../PriceOption/PriceOption';
const PriceOptions = () => {

    const pricingOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 group class per week"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group classes",
                "1 personal training session per month"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 79.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group classes",
                "2 personal training sessions per month",
                "Sauna access"
            ]
        },
        {
            "id": 4,
            "name": "VIP Plan",
            "price": 99.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group classes",
                "4 personal training sessions per month",
                "Sauna access",
                "Priority booking for classes",
                "Nutrition consultation"
            ]
        }
    ]


    return (
        <div className='flex flex-col'>
            <h2 className="text-2xl bg-blue-200 text-center">Pricing Option</h2>
            <div className='grid grid-cols-2 my-4 mx-4'>

                {
                    pricingOptions.map(option => <PriceOption option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;
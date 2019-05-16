import React from 'react';

const Order = ({match}) => {
    return (
        <div>
            <h2>Order {match.params.name}</h2>
        </div>
    );
};

export default Order;
import React from 'react';

const Checkout = (props) => {
    let cost = parseInt(props.cost).toFixed(0)
    let remainder = parseInt(props.remaining).toFixed(0)
    return (
        <div className="page-two" style={{display: props.page === 2 && !props.showRegister ? "block" : "none"}}>
            <div>
                <h3>How would you like to pay?</h3>
                <p>Cost Of Item: ${isNaN(cost) ? 0 : cost}</p>
                <p>{props.remaining >= 0 ? `Remaining Balance: $${isNaN(remainder) ? 0 : remainder}` : `Thank you for your payment, your change due is: $${Math.abs(props.change)}`}</p>
            </div>
            <div id={"pay-bill"}>
            <button onClick={(e) => props.add20(e)}>$20</button>
            <button onClick={(e) => props.add10(e)}>$10</button>
            <br></br>
            <button onClick={(e) => props.add5(e)}>$5</button>
            <button onClick={(e) => props.add2(e)}>$2</button>
            <br></br>
            <button onClick={(e) => props.add1(e)}>$1</button>
            <button onClick={(e) => props.clear(e)}>clear</button>
            </div>
            <br></br>

            <button id={"back-next"} onClick={(e) => props.back(e)}>Back</button>
            <button id={"back-next"} onClick={(e) => props.next(e)}>Next</button>
            <br></br>
            <br></br>
            <br></br>
            <div id={"footer"}>
            <button onClick={(e) => props.home(e)}>Home</button>
            <button onClick={(e) => props.register(e)}>Open Register</button>
            <button onClick={(e) => props.reset(e)}>Reset</button>
            </div>
        </div>
    );
};

export default Checkout;
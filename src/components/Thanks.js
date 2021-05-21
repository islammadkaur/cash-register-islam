import React from 'react';

const ThankYouPage = (props) => {
    return (
    <div className="thank-you-page" style={{display: props.page === 4 && !props.showRegister ? "block" : "none"}}>
        <div style={{marginTop: "18%", width:"80%", marginLeft: "10%",borderStyle:'solid'}}>
            <h1>Thank you for shopping with us</h1>
        </div>
        <div id={"footer"} style={{}}>

        <button onClick={(e) => props.home(e)}>Home</button>
        <button onClick={(e) => props.checkRegister(e)}>Open Register</button>
        <button onClick={(e) => props.reset(e)}>Reset</button>
        </div>

    </div>
    );
};

export default ThankYouPage;
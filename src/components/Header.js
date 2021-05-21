import React from 'react';

const Header = (props) => {
    return (
        <div className={"header"}>
            <h2 onClick={(e) => props.home(e)} style={{paddingTop: '15px', textAlign: "left", marginLeft:"5%"}}>Cash Register</h2>
        </div>
    );
};

export default Header;
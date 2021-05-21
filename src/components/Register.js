import React from 'react';
import cashRegister from '../images/cash_register.png';


const CashRegister = (props) => {
    return (
        <div className="register-contents" style={{marginTop: "5%",display: props.showRegister ? "block" : "none"}}>
            <div style={{width:'70%', marginLeft: '15%'}}>
                <div style={{float:'left', marginTop:'80px'}}>
                <img style={{width: "400px"}} src={cashRegister} className="cash-register" alt="cash register" />
                </div>
                <div style={{float:'right'}}>
                <h2 className={"register-total"}>Total in register: ${props.total}</h2>
                <p># of Bills:</p>
                <p className={"register-total"}>Twenties: {props.twenty} (${props.twenty * 20})</p>
                <p className={"register-total"}>Tens: {props.ten} (${props.ten * 10})</p>
                <p className={"register-total"}>Fives: {props.five} (${props.five * 5})</p>
                <p className={"register-total"}>Twos: {props.two} (${props.two * 2})</p>
                <p className={"register-total"}>Ones: {props.one} (${props.one})</p>
                </div>
            </div>
            <div id={"footer"}>
            <button onClick={(e) => props.home(e)}>Home</button>
            <button onClick={(e) => props.back(e)}>Back</button>
            <button onClick={(e) => props.reset(e)}>Reset</button>
            </div>
        </div>
    );
};

export default CashRegister;
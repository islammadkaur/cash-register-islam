import React from 'react';

const Home = (props) => {
    let cost = parseInt(props.cost).toFixed(0)
    let costInput = document.getElementById('cost-input')
    if (props.page !== 1){
        costInput.value = ''
    }
    return (
        <div className="main-page" style={{display: props.page === 1 && !props.showRegister ? "block" : "none"}}>
            <div>
                <h1>Cost Of Item</h1>
                <h1 className={"register-input"}>${isNaN(cost) ? 0 : cost}</h1>
            </div>
            <form onSubmit={(e) => props.next(e)} >
                <input id="cost-input" placeholder={"Enter cost here..."} min={0} step={1} onChange={(e) => props.change(e)}></input>
                <br></br>
                <button style={{ marginTop: "6%"}} onClick={(e) => props.next(e)}>Next</button>
                <br></br>
                <div style={{width:"100%"}} id="footer">
                <button style={{width:"100%"}} onClick={(e) => props.register(e)}>Open Register</button>
                </div>
            </form>
        </div>
    );
};

export default Home;
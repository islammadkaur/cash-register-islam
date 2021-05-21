import React from 'react';

const Change = (props) => {
    // let maxInput = props.change
    // let props.change = maxInput
    // let twentyValue = document.getElementById('twenty')
    // let tenValue = document.getElementById('ten')
    // let fiveValue = document.getElementById('five')
    // let twoValue = document.getElementById('two')
    let form = document.getElementById('change-form')
    if (props.total !== 500){
        if (props.page !== 3) {
        form.reset()
        }
    }
        
    return (
    
        <div className="page-three" style={{display: props.page === 3 && !props.showRegister ? "block" : "none"}}>
            <div>
                    <p>How would you like your change?</p>
                    <p>Change Amount: ${props.change}</p>
                <div id={"change-inputs"}>
                    {/* <br></br> */}
                    <form id={"change-form"} onSubmit={(e) => props.dispenseChange(e) && props.food()}>
                    <p>$20's:</p>
                    <input id={"twenty"}  onInput={(e) => props.sub20(e)} type="number"  defaultValue={0} step={1}  min={0} max={props.change < 20 ? props.event20 : props.change + props.event20 }></input>{props.twenty === 0 ? alert("No more 20's in drawer, please pick a different bill.") : ''}
                    <p>$10's:</p>
                    <input id={"ten"} onInput={(e) => props.sub10(e)} type="number"  defaultValue={0} step={1}  min={0} max={props.change < 10 ? props.event10 : props.change + props.event10 }></input>{props.ten === 0 ? alert("No more 10's in drawer, please pick a different bill.") : ''}
                    <p>$5's:</p>
                    <input id={"five"} onInput={(e) => props.sub5(e)} type="number" defaultValue={0} step={1} min={0} max={props.change < 5 ? props.event5 : props.change + props.event5}></input>{props.five === 0 ? alert("No more 5's in drawer, please pick a different bill.") : ''}
                    <p>$2's:</p>
                    <input id={"two"} onInput={(e) => props.sub2(e)} type="number" defaultValue={0} step={1} min={0} max={props.change < 2 ? props.event2 : props.change + props.event2 }></input>{props.two === 0 ? alert("No more 2's in drawer, please pick a different bill.") : ''}
                    <p>$1's:</p>
                    <input id={"one"} onInput={(e) => props.sub1(e)} type="number" defaultValue={0} step={1} min={0} max={props.change < 1 ? props.event1 : props.change + props.event1 }></input>{props.one === 0 ? alert("No more 1's in drawer, please pick a different bill.") : ''}
                    <br></br>
                        <button id={"change-submit"} onClick={(e) => props.dispenseChange(e)}>Submit</button>
                    </form> 
                </div>
            </div>
            <div id={"footer"}>
            <button onClick={(e) => props.home(e)}>Home</button>
            {/* <button onClick={(e) => props.back(e)}>Back</button> */}
            <button onClick={(e) => props.register(e)}>Open Register</button>
            <button onClick={(e) => props.reset(e)}>Reset</button>
            </div>
        </div>
    );
};

export default Change;
import React, { Component } from 'react';
import Home from './Home'
import Checkout from './Checkout'
import Change from './Change'
import Header from './Header'
import Register from './Register'
import Thanks from './Thanks'

class Body extends Component {
    constructor() {
        super();
        this.state = {
            total: 500,
            cost: 0,
            remaining: 0,
            change: 0,
            input20: 0,
            input10: 0,
            input5: 0,
            input2: 0,
            input1: 0,
            twenty: 10,
            ten: 15,
            five: 20,
            two: 10,
            one: 30,
            newInput: 0,
            showRegister: false,
            page: 1,
            event20: 0,
            event10: 0,
            event5: 0,
            event2: 0,
            event1: 0,
            error: ""
        }
    }

    onChange = (e) => {
        this.setState({cost: [e.target.value], remaining: this.state.cost})
    }
    mainPage = (e) => {
        e.preventDefault();
        this.setState({
            page: 1,
            showRegister: false,
            cost: 0, 
            remaining: 0, 
            change: 0,
            input20: 0,
            input10: 0,
            input5: 0,
            input2: 0,
            input1: 0,
            newInput: 0,
            event20: 0,
            event10: 0,
            event5: 0,
            event2: 0,
            event1: 0,
            error: ""
        })
    }

    backButton = (e) => {
        if (this.state.page === 2) {
            let costInput = document.getElementById('cost-input')
            costInput.value = ""
            this.setState({page: this.state.page - 1, cost: 0, remaining: 0, change: 0, input20: 0, input10: 0, input5: 0, input2: 0, input1: 0, newInput: 0, event20: 0, event10: 0, event5: 0, event2: 0, event1: 0, error: ""})
        }
        else {
            this.setState({page: this.state.page - 1})
        }
    }
    
    showPageTwo = (e) => {
        e.preventDefault();
        if(this.state.cost > 0){
            this.setState({page: 2, remaining: this.state.cost, change: this.state.remaining, cost: parseInt(this.state.cost), newInput: 0, showRegister: false})
        }
        else {
            alert("Cost cannot be empty")
        }
    }
    showPageThree = (e) => {
        e.preventDefault();
        this.setState({change: Math.abs(this.state.change), showRegister: false})
        if(this.state.remaining > 0) {
        alert(`Your have a current balance of $${this.state.remaining} remaining. Please pay before proceeding.`)
        }
        else if(this.state.remaining < 0) {
        this.setState({page: 3})
        }
        else {
            this.setState({page: 4, showRegister: false})
        }
    }
    clear = (e) => {
        this.setState({remaining: this.state.cost})
    }

    checkRegister = (e) => {
        e.preventDefault();
        this.setState({showRegister: true})
    }

    resetButton = () => {
        window.location.reload();
    }

    add20 = (e) => {
        this.setState({twenty: parseInt(this.state.twenty) + 1, total: parseInt(this.state.total) + 20, remaining: parseInt(this.state.remaining - 20), change: parseInt(this.state.remaining - 20)})
    }
    add10 = (e) => {
        this.setState({ten: parseInt(this.state.ten) + 1, total: parseInt(this.state.total) + 10, remaining: parseInt(this.state.remaining - 10), change: parseInt(this.state.remaining - 10)})
    }
    add5 = (e) => {
        this.setState({five: parseInt(this.state.five) + 1, total: parseInt(this.state.total) + 5, remaining: parseInt(this.state.remaining - 5), change: parseInt(this.state.remaining - 5)})
    }
    add2 = (e) => {
        this.setState({two: parseInt(this.state.two) + 1, total: parseInt(this.state.total) + 2, remaining: parseInt(this.state.remaining - 2), change: parseInt(this.state.remaining - 2)})
    }
    add1 = (e) => {
        this.setState({one: parseInt(this.state.one) + 1, total: parseInt(this.state.total) + 1, remaining: parseInt(this.state.remaining - 1), change: parseInt(this.state.remaining - 1)})
    }

    sub20 = (e) => {
        if (this.state.twenty !== 0 && e.target.value > this.state.input20) {
                this.setState({event20: e.target.value})
                this.setState({input20: this.state.input20 + 1})
                this.setState({change: parseInt(this.state.change - 20)})
                this.setState({total: parseInt(this.state.total - 20)})
                this.setState({twenty: parseInt(this.state.twenty - 1)})
            }
        else {            
                this.setState({input20: this.state.input20 - 1})
                this.setState({change: parseInt(this.state.change + 20)})
                this.setState({total: parseInt(this.state.total + 20)})
                this.setState({twenty: parseInt(this.state.twenty + 1)})
        }
    }

    sub10 = (e) => {
        if(this.state.ten !== 0 && e.target.value > this.state.input10) {
            this.setState({event10: e.target.value})
            this.setState({input10: this.state.input10 + 1})
            this.setState({change: parseInt(this.state.change - 10)})
            this.setState({total: parseInt(this.state.total - 10)})
            this.setState({ten: parseInt(this.state.ten - 1)})
        }
    else {            
            this.setState({input10: this.state.input10 - 1})
            this.setState({change: parseInt(this.state.change + 10)})
            this.setState({total: parseInt(this.state.total + 10)})
            this.setState({ten: parseInt(this.state.ten + 1)})
            }
    }
    sub5 = (e) => {
        if(this.state.five !== 0 && e.target.value > this.state.input5) {
            this.setState({event5: e.target.value})
            this.setState({input5: this.state.input5 + 1})
            this.setState({change: parseInt(this.state.change - 5)})
            this.setState({total: parseInt(this.state.total - 5)})
            this.setState({five: parseInt(this.state.five - 1)})
        }
    else {            
            this.setState({input5: this.state.input5 - 1})
            this.setState({change: parseInt(this.state.change + 5)})
            this.setState({total: parseInt(this.state.total + 5)})
            this.setState({five: parseInt(this.state.five + 1)})
            } 
    }
    sub2 = (e) => {
        if(this.state.two !== 0 && e.target.value > this.state.input2) {
            this.setState({event2: e.target.value})
            this.setState({input2: this.state.input2 + 1})
            this.setState({change: parseInt(this.state.change - 2)})
            this.setState({total: parseInt(this.state.total - 2)})
            this.setState({two: parseInt(this.state.two - 1)})
        }
    else {            
            this.setState({input2: this.state.input2 - 1})
            this.setState({change: parseInt(this.state.change + 2)})
            this.setState({total: parseInt(this.state.total + 2)})
            this.setState({two: parseInt(this.state.two + 1)})
            } 
    }
    sub1 = (e) => {
        if(this.state.one !== 0 && e.target.value > this.state.input1) {
            this.setState({event1: e.target.value})
            this.setState({input1: this.state.input1 + 1})
            this.setState({change: parseInt(this.state.change - 1)})
            this.setState({total: parseInt(this.state.total - 1)})
            this.setState({one: parseInt(this.state.one - 1)})
        }
    else {            
            this.setState({input1: this.state.input1 - 1})
            this.setState({change: parseInt(this.state.change + 1)})
            this.setState({total: parseInt(this.state.total + 1)})
            this.setState({one: parseInt(this.state.one + 1)})
            } 
    }
    dispenseChange = (e) => {
        e.preventDefault();
        if(this.state.change > 0) {
            return alert("Don't forget to collect all of your change")
        }
        else if(this.state.change < 0) {
            return alert("Looks like I might've taken too much out the register, let me recount your change")
        }
        else {
            this.setState({page: 4})
        }
    } 
        render() {
            return (
                <div>
                    <Header {...this.state} home={this.mainPage}/>
                    <div className="body">
                        <Home {...this.state} change={this.onChange} next={this.showPageTwo} register={this.checkRegister}/>
                        <Checkout {...this.state} clear={this.clear} back={this.backButton} home={this.mainPage} add20={this.add20} add10={this.add10} add5={this.add5} add2={this.add2} add1={this.add1} next={this.showPageThree} register={this.checkRegister} reset={this.resetButton}/>
                        <Change {...this.state} back={this.backButton} home={this.mainPage} sub20={this.sub20} sub10={this.sub10} sub5={this.sub5} sub2={this.sub2} sub1={this.sub1}  dispenseChange={this.dispenseChange} register={this.checkRegister} reset={this.resetButton}/>
                        <Register {...this.state} back={this.backButton} home={this.mainPage} reset={this.resetButton}/>
                        <Thanks {...this.state} home={this.mainPage} reset={this.resetButton}/>
                    </div>
                </div> 
        );
    }
}

export default Body;
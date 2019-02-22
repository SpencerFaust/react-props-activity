import React, { Component } from 'react';


class EnterNumber extends Component {

    state = {
        newNumber: {
          number: 0,
        }
    }

    handleUp = (event) => {
        event.preventDefault();
        console.log('Up button')
    }

    handleDown = (event) => {
        event.preventDefault();
        console.log('Down button')
        
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            newNumber: {
                number: event.target.value,
            }
        })
        console.log(this.state.newNumber.number);
    }

    render() {
        return (
            <>
                <div className="component">
                    <button type="submit" onClick={this.handleUp} >Up</button>
                        <input 
                            type="number" 
                            placeholder="Enter Number"
                            onChange= {this.handleChange} />
                    <button type="submit" onClick={this.handleDown} >Down</button>
                </div>
            </>
        );
    }
    }

export default EnterNumber;
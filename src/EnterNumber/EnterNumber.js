import React, { Component } from 'react';


class EnterNumber extends Component {

    state = {
        newNumber: {
          number: 0,
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            newNumber: {
            ...this.state.newNumber,
            this.number: event.target.value,
          },
        });
      }

      handleSubmit = (event) => {
          event.preventDefault();
          this.props.addNumber(this.state.newNumber);
          this.setState({
            newNumber: {
                  number: ,
              }
          })
      }


  render() {
    return (
        <>
            <div className="component">
                    <button type="submit" onClick={this.handleSubmit} >Up</button>
                        <input 
                            type="number" 
                            placeholder="Enter Number"
                            onChange= {this.handleChange} />
                    <button type="submit" onClick={this.handleSubmit} >Down</button>
            </div>
        </>
    );
  }
}

export default EnterNumber;
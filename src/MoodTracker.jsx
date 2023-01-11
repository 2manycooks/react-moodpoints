import { Component } from 'react'

export default class MoodTracker extends Component {


    // track state in an object
    state = {
        moodPoints: 1
    }

    // we can also create helper methods!
    increaseMood = () => {
        if(this.state.moodPoints >= 10) {
            this.setState({
                moodPoints: 1
            })
        } else {
            this.setState((prevState, props) => {
                return {
                    moodPoints: prevState.moodPoints + 1
                }
        })
        }
    }

    handleSetToTen = () => {
        this.setState({
            moodPoints: 10
        })
    }

    // utilize this.setState() to change the value of our state.
    // setState takes two properties: previoustate, current props. setState has access to these, as a built in react method.

    
    render() {

        // using setState with returning an object

        // this.setState((prevState, props) => {
        //     // we can return an object that represents our new state values
        //     return {
        //         moodPoints: this.prevState + 1
        //     }
        // })

        // using setState with parentheses to imply a multiline return

        // this.setState((previousState, currentProps) => ({
        //     moodPoints: this.prevState + 1
        // }))


    

        return(
            <>
            <p> On a scale of 1-10</p>
            <p> You are this happy: {this.state.moodPoints}</p>
            <button onClick={this.increaseMood}> HAPPY TIME 🦄 </button>
            <button onClick={this.handleSetToTen}> EXTRA HAPPY TIME 🦄 </button>
            </>
        )
    }
}
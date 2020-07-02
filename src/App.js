import React from "react"

class App extends React.Component {
    // This will return everything we have in this 
    // functional component

    /*
    * You can also implement a method here
    */

    // When using props on the return method:
    // {this.props.whatever}

    render() {
        /*
        * Any kind of display logic, do it here before the return
        * Eg. Conditional rendering
        */

        /*
        * const style = this.yourMethodHere()
        */

        return (
            <>
                <h1>Hello World</h1>
                {/* {this.props.whatever} */}
            </>
        )
    }
}

export default App
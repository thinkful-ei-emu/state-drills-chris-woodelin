import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    }

     worldClick = () => {
         this.setState({
            who: 'world' 
         })
     }

     friendClick = () => {
        this.setState({
           who: 'friend' 
        })
    }

    reactClick = () => {
        this.setState({
           who: 'react' 
        })
    }

        
    

    render() {
        return (
            <div className="helloWorld">
                <p>Hello, {this.state.who}</p>
                <button onClick={()=> this.worldClick()}> World </button>
                <button onClick={()=> this.friendClick()}> Friend</button>
                <button onClick={()=> this.reactClick()}> React</button>
            </div>
        )
    }
}

export default HelloWorld;
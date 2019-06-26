import React from 'react';
import { constants } from 'zlib';

class Bomb extends React.Component {

    this.state = {
        count: 0
    }
componentDidMount({
    this.interval = setInterval(() => {
        const newCount = this.state.count + 1

        this.setState({
            count: newCount

        })
    })
})

componentWillUnmount (){
    clearInterval(this.interval)
}


  render(){
      return (
          <div>
            
            <p>tick</p>
            <p>tock</p>
            <p>BOOM!!!</p>


          </div>
      )
  }  
    
}

export default Bomb;
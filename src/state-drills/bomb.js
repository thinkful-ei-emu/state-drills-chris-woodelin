import React from 'react';

class Bomb extends React.Component {

    state = {
        count: 0
    }
componentDidMount(){
    this.interval = setInterval(() => {
        const newCount = this.state.count + 1
        if(newCount > 8){
            clearInterval(this.interval)
        }
        console.log(newCount)
        this.setState({
            count: newCount
        })
    }, 1000)
}

componentWillUnmount (){
        clearInterval(this.interval)
}


  render(){
      return (
          <div>
            
            <p style={{display: this.state.count % 2 === 0 ? "block" : "none"}}>tick</p>
            <p style={{display: this.state.count % 2 !== 0 ? "block" : "none"}}>tock</p>
            <p style={{display: this.state.count >= 8 ? "block" : "none"}}>BOOM!!!</p>


          </div>
      )
  }  
    
}

export default Bomb;
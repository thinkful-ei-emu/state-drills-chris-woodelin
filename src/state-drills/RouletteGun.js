import React from 'react';



class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    }


    triggerPull = () => {
            this.setState ({
                spinningTheChamber: true
            })
            this.timeout = setTimeout (()=> { 
                   
                const random = 1 + Math.random() * (8 - 1)

                const bullet = Math.floor(random)
                this.setState ({
                    chamber: bullet,
                    spinningTheChamber: false
                })

            }, 2000)
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    render(){
        return (
            <div>
                <button onClick = {()=> this.triggerPull()}> Pull the trigger</button>
                <p style={{display: this.state.spinningTheChamber ? "block" : "none"}}>spinning the chamber and pulling the triger ... </p>
                <p style={{display: this.state.chamber !== this.props.bulletInChamber  ? "block" : "none"}}>you're safe! </p>
                <p style={{display: this.state.chamber === this.props.bulletInChamber ? "block" : "none"}}>BANG!!!!</p>
        </div>
        )
    }
}

export default RouletteGun;
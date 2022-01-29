import React,{Component} from 'react';


class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: this.props.age
        };
    }

    aumentar(){
        this.setState({
            counter: this.state.counter + 1
        })
    }


    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h1> { lastName }, { firstName}</h1>
                <p> Age: {this.state.counter} </p>
                <p> Hair Color: {hairColor}</p>
                <button onClick={ ()=> this.aumentar() }>Birthday Button for {firstName} {lastName}</button>
            </div>

        );
    }
}

export default PersonCard;

import React,{Component} from 'react';

class PersonStats extends Component{
    constructor(props){
        super(props);
        //Use this.state to hold on to the 3 properties provided and assign each value as an empty string
        this.state = {
            name: '',
            age: '',
            feelings: '',

        }
    }

    //Create a function
    newEntry = (event) => {
        this.setState(
            {
                name: event.target.value,
                age:event.target.value,
                feelings: event.target.value
            }
        )
    }

   
    buttonClicked = () =>{
        
        this.props.newEntry();

        let feeling = document.getElementById('renderedFeeling');

        this.feeling.innerHTML = `Hello ${this.state.name}. Your age is ${this.state.age} and you're feeling ${this.state.feelings}.`
        
    }


    render(){
        return(
            <div>
                <form action="">
                    <fieldset>
                        <legend>Feeling Reflections</legend>

                        <label htmlFor="name">Name:</label>
                        <input type="text" id='name' onChange={this.newEntry}/>

                        <label htmlFor="age">Age:</label>
                        <input type="text" id='age' onChange={this.newEntry}/>

                        <label htmlFor="feelings">Your Feelings:</label>
                        <textarea name="" id="feelings" cols="30" rows="10" placeholder='start typing...' onChange={this.newEntry}></textarea>

                        <button onClick={this.buttonClicked}>Submit</button>

                    </fieldset>
                </form>

                <div>
                <h2 id='renderedFeeling'></h2>
                </div>

            </div>
        )
    }
}

export default PersonStats;
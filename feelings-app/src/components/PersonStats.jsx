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

   //Create a function that will update the state of each property and print the current property in the browser
    buttonClicked = (event) =>{

       event.preventDefault();
            
        //Get a reference to the innerText of the additional div under the form
        let userFeelings = document.getElementById('renderedFeelings');
        //Use the reference to change the inner HTML to give the current state of each property
        userFeelings.innerText = `Hello ${this.state.name}. Your age is ${this.state.age} and you're feeling ${this.state.feelings}`;
        //use this.state to change the current value of the properties to whatever the user puts in
    
        // //Get a reference to the innerText of the additional div under the form
        // let userFeelings = document.getElementById('renderedFeelings');
        // //Use the reference to change the inner HTML to give the current state of each property
        // // !! no need to use `this` here, it's a local variable in your function
        // this.userFeelings.innerText = `Hello ${this.state.name}. Your age is ${this.state.age} and you're feeling ${this.state.feelings}`;
        
    }

    changedName = (evt) =>{
        this.setState(
            {
                name: evt.target.value
            }
        )
    }
    changedAge = (evt) =>{
        this.setState(
            {
                age: evt.target.value
            }
        )
    }
    changedFeeling = (evt) =>{
        this.setState(
            {
                feelings: evt.target.value
            }
        )
    }
   

    render(){
      
        return(
            <div>
                <form action="">
                    <fieldset>
                        <legend>Feeling Reflections</legend>

                        <label htmlFor="name">Name:</label>
                        <input type="text" id='name'onChange={this.changedName} value={this.state.name}/>

                        <label htmlFor="age">Age:</label>
                        <input type="text" id='age' onChange={this.changedAge} value={this.state.age}/>

                        <label htmlFor="feelings">Your Feelings:</label>
                        <textarea name="" id="feelings" cols="30" rows="10" placeholder='start typing...' onChange={this.changedFeeling} value={this.state.feelings}></textarea>

                        {/* Call the function inside of the button */}
                        <button onClick={this.buttonClicked}>Submit</button>

                    </fieldset>
                </form>

                <div>
                <p id='renderedFeelings'></p>
                </div>

            </div>
        )
    }
}

export default PersonStats;
import React,{Component} from 'react';

class FooterComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>This site created by {this.props.fname}</p>
            </div>
        )
    }
}

export default FooterComponent;


import React, { PureComponent } from 'react';

class Blank extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.title = "Blank";
        document.getElementById("pageTitle").innerHTML = "Blank";
    }
    render() { 
        return ( 
            null        
        );
    }
}
 
export default Blank;
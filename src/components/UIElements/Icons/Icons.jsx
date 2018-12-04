import React, { PureComponent } from 'react';
import FontAwesome from './FontAwesome';
import BootstrapIcons from './BootstrapIcons';

class Icons extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.title = "Icons";
        document.getElementById("pageTitle").innerHTML = "Icons";
    }
    render() { 
        return ( 
            <React.Fragment>
                <FontAwesome />
                <BootstrapIcons />
            </React.Fragment>
         );
    }
}
 
export default Icons;
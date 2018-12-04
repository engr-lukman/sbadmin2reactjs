import React, { PureComponent } from 'react';

class Footer extends PureComponent {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <hr/>
                <p> Copyright &copy; 2018 - Developed by: <a href="https://facebook.com/oYo.LuKman" target="_blank">Lukman</a>.</p>
            </React.Fragment>
        );
    }
}
 
export default Footer;

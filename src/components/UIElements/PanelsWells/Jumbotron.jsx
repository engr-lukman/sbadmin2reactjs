import React, { PureComponent } from 'react';

class Jumbotron extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-lg-12">
                    <div className="jumbotron">
                        <h1>Jumbotron</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing.</p>
                        <p><a className="btn btn-primary btn-lg" role="button">Learn more</a>
                        </p>
                    </div>
                </div>
                {/* <!-- /.col-lg-12 --> */}
            </React.Fragment>
         );
    }
}
 
export default Jumbotron;
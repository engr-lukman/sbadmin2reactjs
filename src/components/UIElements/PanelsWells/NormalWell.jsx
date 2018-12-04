import React, { PureComponent } from 'react';

class NormalWell extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-lg-4">
                    <div className="well">
                        <h4>Normal Well</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                    </div>
                </div>
                {/* <!-- /.col-lg-4 --> */}
            </React.Fragment>
         );
    }
}
 
export default NormalWell;
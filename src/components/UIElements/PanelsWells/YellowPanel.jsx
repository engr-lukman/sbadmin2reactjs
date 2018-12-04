import React, { PureComponent } from 'react';

class YellowPanel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-lg-4">
                    <div className="panel panel-yellow">
                        <div className="panel-heading">
                            Yellow Panel
                        </div>
                        <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                        </div>
                        <div className="panel-footer">
                            Panel Footer
                        </div>
                    </div>
                    {/* <!-- /.col-lg-4 --> */}
                </div>
            </React.Fragment>
         );
    }
}
 
export default YellowPanel;
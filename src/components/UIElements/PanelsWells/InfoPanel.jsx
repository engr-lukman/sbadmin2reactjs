import React, { PureComponent } from 'react';

class InfoPanel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-lg-4">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            Info Panel
                        </div>
                        <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                        </div>
                        <div className="panel-footer">
                            Panel Footer
                        </div>
                    </div>
                </div>
                {/* <!-- /.col-lg-4 --> */}
            </React.Fragment>
         );
    }
}
 
export default InfoPanel;
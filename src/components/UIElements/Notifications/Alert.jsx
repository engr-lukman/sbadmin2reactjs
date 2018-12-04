import React, { PureComponent } from 'react';

class Alert extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-lg-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Alert Styles
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body">
                            <div className="alert alert-success">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                            </div>
                            <div className="alert alert-info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                            </div>
                            <div className="alert alert-warning">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                            </div>
                            <div className="alert alert-danger">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                            </div>
                        </div>
                        {/* <!-- .panel-body --> */}
                    </div>
                    {/* <!-- /.panel --> */}
                </div>
                {/* <!-- /.col-lg-6 --> */}
            </React.Fragment>
         );
    }
}
 
export default Alert;
import React, { PureComponent } from 'react';

class Dismissable extends PureComponent {
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
                            Dismissable Alerts
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body">
                            <div className="alert alert-success alert-dismissable">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                            </div>
                            <div className="alert alert-info alert-dismissable">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                            </div>
                            <div className="alert alert-warning alert-dismissable">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                            </div>
                            <div className="alert alert-danger alert-dismissable">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
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
 
export default Dismissable;
import React, { PureComponent } from 'react';

class Emphasis extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-lg-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Emphasis Classes
                        </div>
                        <div className="panel-body">
                            <p className="text-muted">This is an example of muted text.</p>
                            <p className="text-primary">This is an example of primary text.</p>
                            <p className="text-success">This is an example of success text.</p>
                            <p className="text-info">This is an example of info text.</p>
                            <p className="text-warning">This is an example of warning text.</p>
                            <p className="text-danger">This is an example of danger text.</p>
                        </div>
                        {/* <!-- /.panel-body --> */}
                    </div>
                    {/* <!-- /.panel --> */}
                </div>
                {/* <!-- /.col-lg-4 --> */}
            </React.Fragment>
         );
    }
}
 
export default Emphasis;
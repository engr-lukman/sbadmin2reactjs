import React, { PureComponent } from 'react';

class Documentation extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Morris.js Usage
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body">
                            <p>Morris.js is a jQuery based charting plugin created by Olly Smith. In SB Admin, we are using the most recent version of Morris.js which includes the resize function, which makes the charts fully responsive. The documentation for Morris.js is available on their website, <a target="_blank" href="http://morrisjs.github.io/morris.js/">http://morrisjs.github.io/morris.js/</a>.</p>
                            <a target="_blank" className="btn btn-default btn-lg btn-block" href="http://morrisjs.github.io/morris.js/">View Morris.js Documentation</a>
                        </div>
                        {/* <!-- /.panel-body --> */}
                    </div>
                    {/* <!-- /.panel --> */}
                </div>
                {/* <!-- /.col-lg-6 --> */}
            </React.Fragment>
         );
    }
}
 
export default Documentation;
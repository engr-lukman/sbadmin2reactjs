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
                            Flot Charts Usage
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body">
                            <p>Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks, and interactive features. In SB Admin, we are using the most recent version of Flot along with a few plugins to enhance the user experience. The Flot plugins being used are the tooltip plugin for hoverable tooltips, and the resize plugin for fully responsive charts. The documentation for Flot Charts is available on their website, <a target="_blank" href="http://www.flotcharts.org/">http://www.flotcharts.org/</a>.</p>
                            <a target="_blank" className="btn btn-default btn-lg btn-block" href="http://www.flotcharts.org/">View Flot Charts Documentation</a>
                        </div>
                        {/* <!-- /.panel-body --> */}
                    </div>
                    {/* <!-- /.panel --> */}
                </div>
                {/* <!-- /.col-lg-12 --> */}
            </React.Fragment>
         );
    }
}
 
export default Documentation;
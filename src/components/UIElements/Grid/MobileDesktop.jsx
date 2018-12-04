import React, { PureComponent } from 'react';

class MobileDesktop extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Example: Mobile and desktop</h3>
                                <p>Don't want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding
                                    <code>.col-xs-*</code>
                                    <code>.col-md-*</code> to your columns. See the example below for a better idea of how it all works.</p>
                                <div className="row show-grid">
                                    <div className="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
                                    <div className="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
                                </div>
                                <div className="row show-grid">
                                    <div className="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
                                    <div className="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
                                    <div className="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
                                </div>
                                <div className="row show-grid">
                                    <div className="col-xs-6">.col-xs-6</div>
                                    <div className="col-xs-6">.col-xs-6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.col-lg-12 --> */}
                </div>
                {/* <!-- /.row --> */}
            </React.Fragment>
         );
    }
}
 
export default MobileDesktop;
import React, { PureComponent } from 'react';

class MobileTabletDesktops extends PureComponent {
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
                                <h3>Example: Mobile, tablet, desktops</h3>
                                <p>Build on the previous example by creating even more dynamic and powerful layouts with tablet
                                    <code>.col-sm-*</code> classes.</p>
                                <div className="row show-grid">
                                    <div className="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>
                                    <div className="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
                                </div>
                                <div className="row show-grid">
                                    <div className="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
                                    <div className="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
                                    {/* <!-- Optional: clear the XS cols if their content doesn't match in height --> */}
                                    <div className="clearfix visible-xs"></div>
                                    <div className="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>
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
 
export default MobileTabletDesktops;
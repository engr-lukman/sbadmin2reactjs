import React, { PureComponent } from 'react';

class ResponsiveColumn extends PureComponent {
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
                                <h3 id="grid-responsive-resets">Responsive column resets</h3>
                                <p>With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a
                                    <code>.clearfix</code> and our <a href="#responsive-utilities">responsive utility classes</a>.</p>
                                <div className="row show-grid">
                                    <div className="col-xs-6 col-sm-3">
                                        .col-xs-6 .col-sm-3
                                        <br />Resize your viewport or check it out on your phone for an example.
                                    </div>
                                    <div className="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>

                                    {/* <!-- Add the extra clearfix for only the required viewport --> */}
                                    <div className="clearfix visible-xs"></div>

                                    <div className="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
                                    <div className="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
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
 
export default ResponsiveColumn;
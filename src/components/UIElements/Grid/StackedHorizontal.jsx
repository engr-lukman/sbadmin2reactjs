import React, { PureComponent } from 'react';

class StackedHorizontal extends PureComponent {
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
                                <h3>Example: Stacked-to-horizontal</h3>
                                <p>Using a single set of
                                    <code>.col-md-*</code> grid classes, you can create a default grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any
                                    <code>.row</code>.</p>
                                <div className="row show-grid">
                                    <div className="col-md-1">.col-md-1</div>
                                    <div className="col-md-1">.col-md-1</div>
                                    <div className="col-md-1">.col-md-1</div>
                                    <div className="col-md-1">.col-md-1</div>
                                    <div className="col-md-1">.col-md-1</div>
                                    <div className="col-md-1">.col-md-1</div>
                                    <div className="col-md-1">.col-md-1</div>
                                    <div className="col-md-1">.col-md-1</div>
                                    <div className="col-md-1">.col-md-1</div>
                                    <div className="col-md-1">.col-md-1</div>
                                    <div className="col-md-1">.col-md-1</div>
                                    <div className="col-md-1">.col-md-1</div>
                                </div>
                                <div className="row show-grid">
                                    <div className="col-md-8">.col-md-8</div>
                                    <div className="col-md-4">.col-md-4</div>
                                </div>
                                <div className="row show-grid">
                                    <div className="col-md-4">.col-md-4</div>
                                    <div className="col-md-4">.col-md-4</div>
                                    <div className="col-md-4">.col-md-4</div>
                                </div>
                                <div className="row show-grid">
                                    <div className="col-md-6">.col-md-6</div>
                                    <div className="col-md-6">.col-md-6</div>
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
 
export default StackedHorizontal;
import React, { PureComponent } from 'react';

class Tooltips extends PureComponent {
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
                            Tooltips and Popovers
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body">
                            <h4>Tooltip Demo</h4>
                            <div className="tooltip-demo">
                                <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
                                <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
                                <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
                                <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
                            </div>
                            <br />
                            <h4>Clickable Popover Demo</h4>
                            <div className="tooltip-demo">
                                <button type="button" className="btn btn-default" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                    Popover on left
                                </button>
                                <button type="button" className="btn btn-default" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                    Popover on top
                                </button>
                                <button type="button" className="btn btn-default" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                    Popover on bottom
                                </button>
                                <button type="button" className="btn btn-default" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                    Popover on right
                                </button>
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
 
export default Tooltips;
import React, { PureComponent } from 'react';

class AxesLineChart extends PureComponent {
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
                            Multiple Axes Line Chart Example
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body">
                            <div className="flot-chart">
                                <div className="flot-chart-content" id="flot-line-chart-multi"></div>
                            </div>
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
 
export default AxesLineChart;
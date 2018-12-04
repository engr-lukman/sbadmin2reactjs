import React, { PureComponent } from 'react';

class DonutChart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <i className="fa fa-bar-chart-o fa-fw"></i> Donut Chart Example
                    </div>
                    <div className="panel-body">
                        <div id="morris-donut-chart"></div>
                        <a href="#" className="btn btn-default btn-block">View Details</a>
                    </div>
                    {/* <!-- /.panel-body --> */}
                </div>
                {/* <!-- /.panel --> */}
            </React.Fragment>
         );
    }
}
 
export default DonutChart;
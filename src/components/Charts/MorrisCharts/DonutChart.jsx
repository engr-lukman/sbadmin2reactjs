import React, { PureComponent } from 'react';

class DonutChart extends PureComponent {
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
                            Donut Chart Example
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body">
                            <div id="morris-donut-chart"></div>
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
 
export default DonutChart;
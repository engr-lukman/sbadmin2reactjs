// jQuery
import $ from "jquery";

import React, { PureComponent } from 'react';

class BarChart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        //Flot Bar Chart
        $(function() {

            var barOptions = {
                series: {
                    bars: {
                        show: true,
                        barWidth: 43200000
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: "%m/%d",
                    minTickSize: [1, "day"]
                },
                grid: {
                    hoverable: true
                },
                legend: {
                    show: false
                },
                tooltip: true,
                tooltipOpts: {
                    content: "x: %x, y: %y"
                }
            };
            var barData = {
                label: "bar",
                data: [
                    [1354521600000, 1000],
                    [1355040000000, 2000],
                    [1355223600000, 3000],
                    [1355306400000, 4000],
                    [1355487300000, 5000],
                    [1355571900000, 6000]
                ]
            };
            $.plot($("#flot-bar-chart"), [barData], barOptions);

        });
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-lg-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Bar Chart Example
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body">
                            <div className="flot-chart">
                                <div className="flot-chart-content" id="flot-bar-chart"></div>
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
 
export default BarChart;
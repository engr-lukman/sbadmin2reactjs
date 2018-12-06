// jQuery
import $ from "jquery";

import React, { PureComponent } from 'react';

class LineChart extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        //Flot Line Chart
        var offset = 0;
        plot();

        function plot() {
            var sin = [],
                cos = [];
            for (var i = 0; i < 12; i += 0.2) {
                sin.push([i, Math.sin(i + offset)]);
                cos.push([i, Math.cos(i + offset)]);
            }

            var options = {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                grid: {
                    hoverable: true //IMPORTANT! this is needed for tooltip to work
                },
                yaxis: {
                    min: -1.2,
                    max: 1.2
                },
                tooltip: true,
                tooltipOpts: {
                    content: "'%s' of %x.1 is %y.4",
                    shifts: {
                        x: -60,
                        y: 25
                    }
                }
            };

            var plotObj = $.plot($("#flot-line-chart"), [{
                    data: sin,
                    label: "sin(x)"
                }, {
                    data: cos,
                    label: "cos(x)"
                }],
                options);
        }        
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Line Chart Example
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body">
                            <div className="flot-chart">
                                <div className="flot-chart-content" id="flot-line-chart"></div>
                            </div>
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
 
export default LineChart;
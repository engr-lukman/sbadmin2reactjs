// jQuery
import $ from "jquery";
// Bootstrap Core JavaScript
import "bootstrap/dist/js/bootstrap.js";
// Metis Menu Plugin JavaScript
import "my-module/metisMenu/metisMenu.js";
// Flot Charts JavaScript
import "my-module/flot/excanvas.js";
import "my-module/flot/jquery.flot.js";
import "my-module/flot/jquery.flot.pie.js";
import "my-module/flot/jquery.flot.resize.js";
import "my-module/flot/jquery.flot.time.js";
import "my-module/flot-tooltip/jquery.flot.tooltip.min.js";
// Custom Theme JavaScript
import "my-module/sb-admin-2.js";

import React, { PureComponent } from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';
import AxesLineChart from './AxesLineChart';
import MovingLineChart from './MovingLineChart';
import BarChart from './BarChart';
import Documentation from './Documentation';

class FlotCharts extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.title = "Flot Charts";
        document.getElementById("pageTitle").innerHTML = "Flot Charts";
    }
    render() { 
        return ( 
            <React.Fragment>
                {/* <!-- /.row --> */}
                <div className="row">
                    <LineChart />
                    <PieChart />
                    <AxesLineChart />
                    <MovingLineChart />
                    <BarChart />
                    <Documentation />
                </div>
                {/* <!-- /.row --> */}

            </React.Fragment>
         );
    }
}
 
export default FlotCharts;
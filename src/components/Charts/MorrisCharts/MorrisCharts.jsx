// jQuery
import $ from "jquery";
// Bootstrap Core JavaScript
import "bootstrap/dist/js/bootstrap.js";
// Metis Menu Plugin JavaScript
import "my-module/metisMenu/metisMenu.js";
// Morris Charts JavaScript
import Morris from "my-module/morrisjs/morris.js";
// Custom Theme JavaScript
import "my-module/sb-admin-2.js";

import React, { PureComponent } from 'react';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import LineChart from './LIneChart';
import DonutChart from './DonutChart';
import Documentation from './Documentation';

class MorrisCharts extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.title = "Morris Charts";
        document.getElementById("pageTitle").innerHTML = "Morris Charts";
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <AreaChart />
                    <BarChart />
                    <LineChart />
                    <DonutChart />
                    <Documentation />
                </div>
                {/* <!-- /.row --> */}
            </React.Fragment>
         );
    }
}
 
export default MorrisCharts;
import React, { PureComponent } from 'react';
import AreaChart from './AreaChart';
import BarChart from '../FlotCharts/BarChart';
import LineChart from './LIneChart';
import DonutChart from './DonutChart';
import Documentation from './Documentation';
import Script from '../../Template/Script';

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

                <Script />

            </React.Fragment>
         );
    }
}
 
export default MorrisCharts;
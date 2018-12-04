import React, { PureComponent } from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';
import AxesLineChart from './AxesLineChart';
import MovingLineChart from './MovingLineChart';
import BarChart from './BarChart';
import Documentation from './Documentation';
import Script from '../../Template/Script';

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

                <Script />
                
            </React.Fragment>
         );
    }
}
 
export default FlotCharts;
// jQuery
import $ from "jquery";
// Morris Charts JavaScript
import Morris from "my-module/morrisjs/morris.js";
// Custom Theme JavaScript
import "my-module/sb-admin-2.js";

import React, { PureComponent } from 'react';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import ResponsiveTimeline from './ResponsiveTimeline';
import Notifications from './Notifications';
import DonutChart from './DonutChart';
import Chat from './Chat';
import TopChart from './TopChart';

class Dashboard extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount() {
        document.title = "Dashboard";
        document.getElementById("pageTitle").innerHTML = "Dashboard";
    }

    render() { 
        return (
            <React.Fragment>
                <TopChart />                
                {/* <!-- /.row --> */}
                <div className="row">
                    <div className="col-lg-8">                        
                        <AreaChart />
                        <BarChart />
                        <ResponsiveTimeline />                        
                    </div>
                    {/* <!-- /.col-lg-8 --> */}
                    <div className="col-lg-4">                        
                        <Notifications />
                        <DonutChart />
                        <Chat />                        
                    </div>
                    {/* <!-- /.col-lg-4 --> */}
                </div>
                {/* <!-- /.row --> */}

            </React.Fragment>
        );
    }
}
 
export default Dashboard;
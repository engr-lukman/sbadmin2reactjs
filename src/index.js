// Bootstrap Core CSS
import "my-module/bootstrap/css/bootstrap.min.css";
// MetisMenu CSS
import "my-module/metisMenu/metisMenu.min.css";
// DataTables CSS
import "my-module/datatables-plugins/dataTables.bootstrap.css";
// DataTables Responsive CSS
import "my-module/datatables-responsive/dataTables.responsive.css";
// Social Buttons CSS
import "my-module/bootstrap-social/bootstrap-social.css";
// Morris Charts CSS
import "my-module/morrisjs/morris.css";
// Custom CSS
import "my-module/sb-admin-2.css";
// Custom Fonts
import "my-module/font-awesome/css/font-awesome.min.css";

import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from "react-router-dom";

import Header from './components/Template/Header';
import Footer from './components/Template/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import FlotCharts from './components/Charts/FlotCharts/FlotCharts';
import MorrisCharts from './components/Charts/MorrisCharts/MorrisCharts';
import Tables from './components/Tables/Tables';
import Forms from './components/Forms/Forms';
import PanelsWells from './components/UIElements/PanelsWells/PanelsWells';
import Buttons from './components/UIElements/Buttons/Buttons';
import Notifications from './components/UIElements/Notifications/Notifications';
import Typography from './components/UIElements/Typography/Typography';
import Icons from './components/UIElements/Icons/Icons';
import Grid from './components/UIElements/Grid/Grid';
import Blank from './components/SamplePages/Blank';
import Login from './components/SamplePages/Login';

class App extends PureComponent {
    render() {
        if(1==1) {
            return (          
                <React.Fragment>  
                    <Header />  
                    <div id="page-wrapper">  
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header" id="pageTitle">Dynamic Page Title</h1>
                            </div>
                            {/* <!-- /.col-lg-12 --> */}
                        </div>  
                          <HashRouter>
                              <div>
                                  <Route exact path="/" component={Dashboard}/>
                                  <Route path="/flot-charts" component={FlotCharts}/>
                                  <Route path="/morris-charts" component={MorrisCharts}/>
                                  <Route path="/tables" component={Tables}/>
                                  <Route path="/forms" component={Forms}/>
                                  <Route path="/panels-wells" component={PanelsWells}/>
                                  <Route path="/buttons" component={Buttons}/>
                                  <Route path="/notifications" component={Notifications}/>
                                  <Route path="/typography" component={Typography}/>
                                  <Route path="/icons" component={Icons}/>
                                  <Route path="/grid" component={Grid}/>
                                  <Route path="/blank" component={Blank}/>
                                  <Route path="/login" component={Login}/>
                              </div>
                          </HashRouter>
                        <Footer />  
                    </div>
                    {/* <!-- /#page-wrapper --> */}                  
                </React.Fragment>
            );
        } else {
            return (          
                <React.Fragment>  
                    <HashRouter>
                        <div>
                            <Route path="/login" component={Login}/>
                        </div>
                    </HashRouter>
                </React.Fragment>
            );
        }
      
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
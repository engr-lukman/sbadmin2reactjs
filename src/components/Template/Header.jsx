import React, { PureComponent } from 'react';
import {Link, HashRouter} from "react-router-dom";

class Header extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {/* <!-- Navigation --> */}
                <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: "0"}}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">SB Admin - React.js</a>
                    </div>
                    {/* <!-- /.navbar-header --> */}

                    <ul className="nav navbar-top-links navbar-right">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i className="fa fa-envelope fa-fw"></i> <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-messages">
                                <li>
                                    <a href="#">
                                        <div>
                                            <strong>John Smith</strong>
                                            <span className="pull-right text-muted">
                                                <em>Yesterday</em>
                                            </span>
                                        </div>
                                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <strong>John Smith</strong>
                                            <span className="pull-right text-muted">
                                                <em>Yesterday</em>
                                            </span>
                                        </div>
                                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <strong>John Smith</strong>
                                            <span className="pull-right text-muted">
                                                <em>Yesterday</em>
                                            </span>
                                        </div>
                                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a className="text-center" href="#">
                                        <strong>Read All Messages</strong>
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                            {/* <!-- /.dropdown-messages --> */}
                        </li>
                        {/* <!-- /.dropdown --> */}
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i className="fa fa-tasks fa-fw"></i> <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-tasks">
                                <li>
                                    <a href="#">
                                        <div>
                                            <p>
                                                <strong>Task 1</strong>
                                                <span className="pull-right text-muted">40% Complete</span>
                                            </p>
                                            <div className="progress progress-striped active">
                                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
                                                    <span className="sr-only">40% Complete (success)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <p>
                                                <strong>Task 2</strong>
                                                <span className="pull-right text-muted">20% Complete</span>
                                            </p>
                                            <div className="progress progress-striped active">
                                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}>
                                                    <span className="sr-only">20% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <p>
                                                <strong>Task 3</strong>
                                                <span className="pull-right text-muted">60% Complete</span>
                                            </p>
                                            <div className="progress progress-striped active">
                                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                                                    <span className="sr-only">60% Complete (warning)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <p>
                                                <strong>Task 4</strong>
                                                <span className="pull-right text-muted">80% Complete</span>
                                            </p>
                                            <div className="progress progress-striped active">
                                                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                                    <span className="sr-only">80% Complete (danger)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a className="text-center" href="#">
                                        <strong>See All Tasks</strong>
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                            {/* <!-- /.dropdown-tasks --> */}
                        </li>
                        {/* <!-- /.dropdown --> */}
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-alerts">
                                <li>
                                    <a href="#">
                                        <div>
                                            <i className="fa fa-comment fa-fw"></i> New Comment
                                            <span className="pull-right text-muted small">4 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                            <span className="pull-right text-muted small">12 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <i className="fa fa-envelope fa-fw"></i> Message Sent
                                            <span className="pull-right text-muted small">4 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <i className="fa fa-tasks fa-fw"></i> New Task
                                            <span className="pull-right text-muted small">4 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="#">
                                        <div>
                                            <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                            <span className="pull-right text-muted small">4 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a className="text-center" href="#">
                                        <strong>See All Alerts</strong>
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                            {/* <!-- /.dropdown-alerts --> */}
                        </li>
                        {/* <!-- /.dropdown --> */}
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-user">
                                <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                                </li>
                                <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                                </li>
                                <li className="divider"></li>
                                <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                                </li>
                            </ul>
                            {/* <!-- /.dropdown-user --> */}
                        </li>
                        {/* <!-- /.dropdown --> */}
                    </ul>
                    {/* <!-- /.navbar-top-links --> */}

                    <div className="navbar-default sidebar" role="navigation">
                        <div className="sidebar-nav navbar-collapse">
                            <HashRouter>
                                <ul className="nav" id="side-menu">
                                    <li className="sidebar-search">
                                        <div className="input-group custom-search-form">
                                            <input type="text" className="form-control" placeholder="Search..." />
                                            <span className="input-group-btn">
                                            <button className="btn btn-default" type="button">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </span>
                                        </div>
                                        {/* <!-- /input-group --> */}
                                    </li>
                                    <li>
                                        <Link to="/"> <i className="fa fa-dashboard fa-fw"></i> Dashboard</Link>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-bar-chart-o fa-fw"></i> Charts<span className="fa arrow"></span></a>
                                        <ul className="nav nav-second-level">
                                            <li>
                                                <Link to="/flot-charts">Flot Charts</Link>
                                            </li>
                                            <li>
                                                <Link to="/morris-charts">Morris.js Charts</Link>
                                            </li>
                                        </ul>
                                        {/* <!-- /.nav-second-level --> */}
                                    </li>
                                    <li>
                                        <Link to="/tables"><i className="fa fa-table fa-fw"></i> Tables</Link>
                                    </li>
                                    <li>
                                        <Link to="/forms"><i className="fa fa-edit fa-fw"></i> Forms</Link>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-wrench fa-fw"></i> UI Elements<span className="fa arrow"></span></a>
                                        <ul className="nav nav-second-level">
                                            <li>
                                                <Link to="/panels-wells">Panels and Wells</Link>
                                            </li>
                                            <li>
                                                <Link to="/buttons">Buttons</Link>
                                            </li>
                                            <li>
                                                <Link to="/notifications">Notifications</Link>
                                            </li>
                                            <li>
                                                <Link to="/typography">Typography</Link>
                                            </li>
                                            <li>
                                                <Link to="/icons"> Icons</Link>
                                            </li>
                                            <li>
                                                <Link to="/grid">Grid</Link>
                                            </li>
                                        </ul>
                                        {/* <!-- /.nav-second-level --> */}
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                                        <ul className="nav nav-second-level">
                                            <li>
                                                <a href="#">Second Level Item</a>
                                            </li>
                                            <li>
                                                <a href="#">Second Level Item</a>
                                            </li>
                                            <li>
                                                <a href="#">Third Level <span className="fa arrow"></span></a>
                                                <ul className="nav nav-third-level">
                                                    <li>
                                                        <a href="#">Third Level Item</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Third Level Item</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Third Level Item</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Third Level Item</a>
                                                    </li>
                                                </ul>
                                                {/* <!-- /.nav-third-level --> */}
                                            </li>
                                        </ul>
                                        {/* <!-- /.nav-second-level --> */}
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-files-o fa-fw"></i> Sample Pages<span className="fa arrow"></span></a>
                                        <ul className="nav nav-second-level">
                                            <li>
                                                <Link to="/blank">Blank Page</Link>
                                            </li>
                                            <li>
                                                <Link to="/login">Login Page</Link>
                                            </li>
                                        </ul>
                                        {/* <!-- /.nav-second-level --> */}
                                    </li>
                                </ul>
                            </HashRouter>
                        </div>
                        {/* <!-- /.sidebar-collapse --> */}
                    </div>
                    {/* <!-- /.navbar-static-side --> */}
                </nav>
            </React.Fragment>
         );
    }
}
 
export default Header;
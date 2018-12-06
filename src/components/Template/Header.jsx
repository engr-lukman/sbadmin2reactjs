import React, { PureComponent } from 'react';
import {Link, HashRouter} from "react-router-dom";
import Email from './Email';
import Task from './Task';
import Comments from './Comments';
import Account from './Account';

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
                        <HashRouter>
                            <Link className="navbar-brand" to="/">SB Admin - React.js</Link>
                        </HashRouter>
                    </div>
                    {/* <!-- /.navbar-header --> */}

                    <ul className="nav navbar-top-links navbar-right">
                        <Email />
                        <Task />
                        <Comments />
                        <Account />
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
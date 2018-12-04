import React, { PureComponent } from 'react';
import {Link, HashRouter} from "react-router-dom";

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.title = "Login";
        document.getElementById("pageTitle").innerHTML = "Login";
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <div className="login-panel panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Please Sign In</h3>
                                </div>
                                <div className="panel-body">
                                    <form role="form">
                                        <fieldset>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="E-mail" name="email" type="email" autofocus />
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input name="remember" type="checkbox" value="Remember Me" />Remember Me
                                                </label>
                                            </div>
                                            {/* <!-- Change this to a button or input when using this as a form --> */}
                                            <HashRouter>
                                                <Link to="/" className="btn btn-lg btn-success btn-block">Login</Link>
                                            </HashRouter>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Login;
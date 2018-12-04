import React, { PureComponent } from 'react';
import Alert from './Alert';
import Dismissable from './Dismissable';
import Modals from './Modals';
import Tooltips from './Tooltips';

class Notifications extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.title = "Notifications";
        document.getElementById("pageTitle").innerHTML = "Notifications";
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <Alert />
                    <Dismissable />
                </div>
                {/* <!-- /.row --> */}
                <div className="row">
                    <Modals />
                    <Tooltips />
                </div>
                {/* <!-- /.row --> */}
            </React.Fragment>
         );
    }
}
 
export default Notifications;
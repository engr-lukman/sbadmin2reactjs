import React, { PureComponent } from 'react';
import DefaultButtons from './DefaultButtons';
import CircleIconButtons from './CircleIconButtons';
import OutlineButtons from './OutlineButtons';
import SocialButtons from './SocialButtons';

class Buttons extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.title = "Buttons";
        document.getElementById("pageTitle").innerHTML = "Buttons";
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-6">
                    <DefaultButtons />
                    <CircleIconButtons />
                </div>
                {/* <!-- /.col-lg-6 --> */}
                <div className="col-lg-6">
                    <OutlineButtons />
                    <SocialButtons />
                </div>
                {/* <!-- /.col-lg-6 --> */}
            </div>
            {/* <!-- /.row --> */}
            </React.Fragment>
         );
    }
}
 
export default Buttons;
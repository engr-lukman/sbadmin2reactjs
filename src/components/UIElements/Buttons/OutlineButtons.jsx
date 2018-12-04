import React, { PureComponent } from 'react';

class OutlineButtons extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Outline Buttons with Smooth Transition
                    </div>
                    {/* <!-- /.panel-heading --> */}
                    <div className="panel-body">
                        <h4>Outline Buttons</h4>
                        <p>
                            <button type="button" className="btn btn-outline btn-default">Default</button>
                            <button type="button" className="btn btn-outline btn-primary">Primary</button>
                            <button type="button" className="btn btn-outline btn-success">Success</button>
                            <button type="button" className="btn btn-outline btn-info">Info</button>
                            <button type="button" className="btn btn-outline btn-warning">Warning</button>
                            <button type="button" className="btn btn-outline btn-danger">Danger</button>
                            <button type="button" className="btn btn-outline btn-link">Link</button>
                        </p>
                        <br />
                        <h4>Outline Button Sizes</h4>
                        <p>
                            <button type="button" className="btn btn-outline btn-primary btn-lg">Large button</button>
                            <button type="button" className="btn btn-outline btn-primary">Default button</button>
                            <button type="button" className="btn btn-outline btn-primary btn-sm">Small button</button>
                            <button type="button" className="btn btn-outline btn-primary btn-xs">Mini button</button>
                            <br />
                            <br />
                            <button type="button" className="btn btn-outline btn-primary btn-lg btn-block">Block level button</button>
                        </p>
                    </div>
                    {/* <!-- /.panel-body --> */}
                </div>
                {/* <!-- /.panel --> */}
            </React.Fragment>
         );
    }
}
 
export default OutlineButtons;
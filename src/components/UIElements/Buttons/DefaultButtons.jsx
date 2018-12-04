import React, { PureComponent } from 'react';

class DefaultButtons extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Default Buttons
                    </div>
                    {/* <!-- /.panel-heading --> */}
                    <div className="panel-body">
                        <h4>Normal Buttons</h4>
                        <p>
                            <button type="button" className="btn btn-default">Default</button>
                            <button type="button" className="btn btn-primary">Primary</button>
                            <button type="button" className="btn btn-success">Success</button>
                            <button type="button" className="btn btn-info">Info</button>
                            <button type="button" className="btn btn-warning">Warning</button>
                            <button type="button" className="btn btn-danger">Danger</button>
                            <button type="button" className="btn btn-link">Link</button>
                        </p>
                        <br />
                        <h4>Disabled Buttons</h4>
                        <p>
                            <button type="button" className="btn btn-default disabled">Default</button>
                            <button type="button" className="btn btn-primary disabled">Primary</button>
                            <button type="button" className="btn btn-success disabled">Success</button>
                            <button type="button" className="btn btn-info disabled">Info</button>
                            <button type="button" className="btn btn-warning disabled">Warning</button>
                            <button type="button" className="btn btn-danger disabled">Danger</button>
                            <button type="button" className="btn btn-link disabled">Link</button>
                        </p>
                        <br/>
                        <h4>Button Sizes</h4>
                        <p>
                            <button type="button" className="btn btn-primary btn-lg">Large button</button>
                            <button type="button" className="btn btn-primary">Default button</button>
                            <button type="button" className="btn btn-primary btn-sm">Small button</button>
                            <button type="button" className="btn btn-primary btn-xs">Mini button</button>
                            <br/>
                            <br/>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
                        </p>
                    </div>
                    {/* <!-- /.panel-body --> */}
                </div>
                {/* <!-- /.panel --> */}
            </React.Fragment>
         );
    }
}
 
export default DefaultButtons;
import React, { PureComponent } from 'react';

class CircleIconButtons extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Circle Icon Buttons with Font Awesome Icons
                    </div>
                    {/* <!-- /.panel-heading --> */}
                    <div className="panel-body">
                        <h4>Normal Circle Buttons</h4>
                        <button type="button" className="btn btn-default btn-circle"><i className="fa fa-check"></i>
                        </button>
                        <button type="button" className="btn btn-primary btn-circle"><i className="fa fa-list"></i>
                        </button>
                        <button type="button" className="btn btn-success btn-circle"><i className="fa fa-link"></i>
                        </button>
                        <button type="button" className="btn btn-info btn-circle"><i className="fa fa-check"></i>
                        </button>
                        <button type="button" className="btn btn-warning btn-circle"><i className="fa fa-times"></i>
                        </button>
                        <button type="button" className="btn btn-danger btn-circle"><i className="fa fa-heart"></i>
                        </button>
                        <br/>
                        <br/>
                        <h4>Large Circle Buttons</h4>
                        <button type="button" className="btn btn-default btn-circle btn-lg"><i className="fa fa-check"></i>
                        </button>
                        <button type="button" className="btn btn-primary btn-circle btn-lg"><i className="fa fa-list"></i>
                        </button>
                        <button type="button" className="btn btn-success btn-circle btn-lg"><i className="fa fa-link"></i>
                        </button>
                        <button type="button" className="btn btn-info btn-circle btn-lg"><i className="fa fa-check"></i>
                        </button>
                        <button type="button" className="btn btn-warning btn-circle btn-lg"><i className="fa fa-times"></i>
                        </button>
                        <button type="button" className="btn btn-danger btn-circle btn-lg"><i className="fa fa-heart"></i>
                        </button>
                        <br />
                        <br />
                        <h4>Extra Large Circle Buttons</h4>
                        <button type="button" className="btn btn-default btn-circle btn-xl"><i className="fa fa-check"></i>
                        </button>
                        <button type="button" className="btn btn-primary btn-circle btn-xl"><i className="fa fa-list"></i>
                        </button>
                        <button type="button" className="btn btn-success btn-circle btn-xl"><i className="fa fa-link"></i>
                        </button>
                        <button type="button" className="btn btn-info btn-circle btn-xl"><i className="fa fa-check"></i>
                        </button>
                        <button type="button" className="btn btn-warning btn-circle btn-xl"><i className="fa fa-times"></i>
                        </button>
                        <button type="button" className="btn btn-danger btn-circle btn-xl"><i className="fa fa-heart"></i>
                        </button>
                    </div>
                    {/* <!-- /.panel-body --> */}
                </div>
                {/* <!-- /.panel --> */}
            </React.Fragment>
         );
    }
}
 
export default CircleIconButtons;
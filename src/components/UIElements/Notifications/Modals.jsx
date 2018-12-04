import React, { PureComponent } from 'react';

class Modals extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-lg-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Modals
                        </div>
                        {/* <!-- /.panel-heading --> */}
                        <div className="panel-body">
                            {/* <!-- Button trigger modal --> */}
                            <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                                Launch Demo Modal
                            </button>
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                                        </div>
                                        <div className="modal-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                    {/* <!-- /.modal-content --> */}
                                </div>
                                {/* <!-- /.modal-dialog --> */}
                            </div>
                            {/* <!-- /.modal --> */}
                        </div>
                        {/* <!-- .panel-body --> */}
                    </div>
                    {/* <!-- /.panel --> */}
                </div>
                {/* <!-- /.col-lg-6 --> */}
            </React.Fragment>
         );
    }
}
 
export default Modals;
import React, { PureComponent } from 'react';

class Lists extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="col-lg-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Lists
                        </div>
                        <div className="panel-body">
                            <h4>Unordered List</h4>
                            <ul>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>
                                    <ul>
                                        <li>List Item</li>
                                        <li>List Item</li>
                                        <li>List Item</li>
                                    </ul>
                                </li>
                                <li>List Item</li>
                            </ul>
                            <h4>Ordered List</h4>
                            <ol>
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                            </ol>
                            <h4>Unstyled List</h4>
                            <ul className="list-unstyled">
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                            </ul>
                            <h4>Inline List</h4>
                            <ul className="list-inline">
                                <li>List Item</li>
                                <li>List Item</li>
                                <li>List Item</li>
                            </ul>
                        </div>
                        {/* <!-- /.panel-body --> */}
                    </div>
                    {/* <!-- /.panel --> */}
                </div>
                {/* <!-- /.col-lg-4 --> */}
            </React.Fragment>
         );
    }
}
 
export default Lists;
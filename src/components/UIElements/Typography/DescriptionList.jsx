import React, { PureComponent } from 'react';

class DescriptionList extends PureComponent {
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
                            Description Lists
                        </div>
                        <div className="panel-body">
                            <dl>
                                <dt>Standard Description List</dt>
                                <dd>Description Text</dd>
                                <dt>Description List Title</dt>
                                <dd>Description List Text</dd>
                            </dl>
                            <dl className="dl-horizontal">
                                <dt>Horizontal Description List</dt>
                                <dd>Description Text</dd>
                                <dt>Description List Title</dt>
                                <dd>Description List Text</dd>
                            </dl>
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
 
export default DescriptionList;
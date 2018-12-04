import React, { PureComponent } from 'react';

class OrderingColumn extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3 id="grid-column-ordering">Column ordering</h3>
                                <p>Easily change the order of our built-in grid columns with
                                    <code>.col-md-push-*</code> and
                                    <code>.col-md-pull-*</code> modifier classes.</p>
                                <div className="row show-grid">
                                    <div className="col-md-9 col-md-push-3">.col-md-9 .col-md-push-3</div>
                                    <div className="col-md-3 col-md-pull-9">.col-md-3 .col-md-pull-9</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.col-lg-12 --> */}
                </div>
                {/* <!-- /.row --> */}
            </React.Fragment>
         );
    }
}
 
export default OrderingColumn;
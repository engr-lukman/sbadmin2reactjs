import React, { PureComponent } from 'react';

class OffsettingColumn extends PureComponent {
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
                                <h3 id="grid-offsetting">Offsetting columns</h3>
                                <p>Move columns to the right using
                                    <code>.col-md-offset-*</code> classes. These classes increase the left margin of a column by
                                    <code>*</code> columns. For example,
                                    <code>.col-md-offset-4</code> moves
                                    <code>.col-md-4</code> over four columns.</p>
                                <div className="row show-grid">
                                    <div className="col-md-4">.col-md-4</div>
                                    <div className="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
                                </div>
                                <div className="row show-grid">
                                    <div className="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
                                    <div className="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
                                </div>
                                <div className="row show-grid">
                                    <div className="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>
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
 
export default OffsettingColumn;
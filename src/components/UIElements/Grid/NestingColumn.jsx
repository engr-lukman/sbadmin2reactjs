import React, { PureComponent } from 'react';

class NestingColumn extends PureComponent {
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
                                <h3 id="grid-nesting">Nesting columns</h3>
                                <p>To nest your content with the default grid, add a new
                                    <code>.row</code> and set of
                                    <code>.col-md-*</code> columns within an existing
                                    <code>.col-md-*</code> column. Nested rows should include a set of columns that add up to 12.</p>
                                <div className="row show-grid">
                                    <div className="col-md-9">
                                        Level 1: .col-md-9
                                        <div className="row show-grid">
                                            <div className="col-md-6">
                                                Level 2: .col-md-6
                                            </div>
                                            <div className="col-md-6">
                                                Level 2: .col-md-6
                                            </div>
                                        </div>
                                    </div>
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
 
export default NestingColumn;
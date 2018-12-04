import React, { PureComponent } from 'react';

class Code extends PureComponent {
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
                            Code
                        </div>
                        <div className="panel-body">
                            <p>This is an example of an inline code element within body copy. Wrap inline code within a
                                <code>&lt;code&gt;...&lt;/code&gt;</code>tag.</p>
                            <pre>This is an example of preformatted text.</pre>
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
 
export default Code;

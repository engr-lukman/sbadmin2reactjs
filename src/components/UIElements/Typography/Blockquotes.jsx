import React, { PureComponent } from 'react';

class Blockquotes extends PureComponent {
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
                            Blockquotes
                        </div>
                        <div className="panel-body">
                            <h4>Default Blockquote</h4>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            </blockquote>
                            <h4>Blockquote with Citation</h4>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <small>Someone famous in
                                    <cite title="Source Title">Source Title</cite>
                                </small>
                            </blockquote>
                            <h4>Right Aligned Blockquote</h4>
                            <blockquote className="pull-right">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            </blockquote>
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
 
export default Blockquotes;
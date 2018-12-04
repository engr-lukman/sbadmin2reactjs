import React, { PureComponent } from 'react';

class Abbreviation extends PureComponent {
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
                            Abbreviations
                        </div>
                        <div className="panel-body">
                            <p>The abbreviation of the word attribute is
                                <abbr title="attribute">attr</abbr>.</p>
                            <p>
                                <abbr title="HyperText Markup Language" className="initialism">HTML</abbr>is an abbreviation for a programming language.</p>
                            <br />
                            <h4>Addresses</h4>
                            <address>
                                <strong>Twitter, Inc.</strong>
                                <br />795 Folsom Ave, Suite 600
                                <br />San Francisco, CA 94107
                                <br />
                                <abbr title="Phone">P:</abbr>(123) 456-7890
                            </address>
                            <address>
                                <strong>Full Name</strong>
                                <br />
                                <a href="mailto:#">first.last@example.com</a>
                            </address>
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
 
export default Abbreviation;
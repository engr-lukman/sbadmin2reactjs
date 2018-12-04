import React, { PureComponent } from 'react';
import Headings from './Headings';
import Paragraphs from './Paragraphs';
import Emphasis from './Emphasis';
import Abbreviation from './Abbreviation';
import Blockquotes from './Blockquotes';
import Lists from './Lists';
import DescriptionList from './DescriptionList';
import Code from './Code';

class Typography extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.title = "Typography";
        document.getElementById("pageTitle").innerHTML = "Typography";
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <Headings />
                    <Paragraphs />
                    <Emphasis />
                </div>
                {/* <!-- /.row --> */}
                <div className="row">
                    <Abbreviation />
                    <Blockquotes />
                    <Lists />
                </div>
                {/* <!-- /.row --> */}
                <div className="row">
                    <DescriptionList />
                    <Code />
                </div>
                {/* <!-- /.row --> */}
            </React.Fragment>
         );
    }
}
 
export default Typography;
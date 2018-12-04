import React, { PureComponent } from 'react';
import DataTables from './DataTables';
import KitchenSink from './KitchenSink';
import Basic from './Basic';
import Striped from './Striped';
import Bordered from './Bordered';
import Hover from './Hover';
import Context from './Context';

import $ from "jquery";
//import "../../../node_modules/datatables/media/css/jquery.dataTables.min.css";
//import "../../../node_modules/datatables/media/js/jquery.dataTables.min.js";

class Tables extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.title = "Tables";
        document.getElementById("pageTitle").innerHTML = "Tables";
        
        // Datatable
        // $(document).ready(function() {
        //     $('#dataTables-example').DataTable({
        //         responsive: true
        //     });
        // });
    }
    render() { 
        return ( 
            <React.Fragment>
                {/* <!-- /.row --> */}
                    <DataTables />
                    <div className="row">
                        <KitchenSink />
                        <Basic />
                    </div>
                    {/* <!-- /.row --> */}
                    <div className="row">
                        <Striped />
                        <Bordered />
                    </div>
                    {/* <!-- /.row --> */}
                    <div className="row">
                        <Hover />
                        <Context />
                    </div>
                    {/* <!-- /.row --> */}
            </React.Fragment>
         );
    }
}
 
export default Tables;
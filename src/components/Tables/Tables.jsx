// jQuery
import $ from "jquery";
// Bootstrap Core JavaScript
import "bootstrap/dist/js/bootstrap.js";
// Metis Menu Plugin JavaScript
import "my-module/metisMenu/metisMenu.js";
// DataTables JavaScript
import "my-module/datatables/js/jquery.dataTables.js";
// import "my-module/datatables-plugins/dataTables.bootstrap.js";
// import "my-module/datatables-responsive/dataTables.responsive.js";
// Custom Theme JavaScript
import "my-module/sb-admin-2.js";

import React, { PureComponent } from 'react';
import DataTables from './DataTables';
import KitchenSink from './KitchenSink';
import Basic from './Basic';
import Striped from './Striped';
import Bordered from './Bordered';
import Hover from './Hover';
import Context from './Context';

class Tables extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.title = "Tables";
        document.getElementById("pageTitle").innerHTML = "Tables";

        // Datatables
        $(document).ready(function() {
            $('#dataTables-example').DataTable({
                responsive: true
            });
        });
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
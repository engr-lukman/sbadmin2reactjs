import React, { PureComponent } from 'react';

// Bootstrap Core CSS
import "../../../node_modules/assets/vendor/bootstrap/css/bootstrap.min.css";
// MetisMenu CSS
import "../../../node_modules/assets/vendor/metisMenu/metisMenu.min.css";
// DataTables CSS
import "../../../node_modules/assets/vendor/datatables-plugins/dataTables.bootstrap.css";
// DataTables Responsive CSS
import "../../../node_modules/assets/vendor/datatables-responsive/dataTables.responsive.css";
// Social Buttons CSS
import "../../../node_modules/assets/vendor/bootstrap-social/bootstrap-social.css";
// Morris Charts CSS
import "../../../node_modules/assets/vendor/morrisjs/morris.css";
// Custom CSS
import "../../../node_modules/assets/dist/css/sb-admin-2.css";
// Custom Fonts
import "../../../node_modules/assets/vendor/font-awesome/css/font-awesome.min.css";


// jQuery
import $ from "jquery";
import jQuery from "jquery";
// import $ from "../../../node_modules/assets/vendor/jquery/jquery.min.js";
// import jQuery from "../../../node_modules/assets/vendor/jquery/jquery.min.js";
// // Bootstrap Core JavaScript
// import "../../../node_modules/assets/vendor/bootstrap/js/bootstrap.min.js";
// // Metis Menu Plugin JavaScript
// import "../../../node_modules/assets/vendor/metisMenu/metisMenu.min.js";
// Flot Charts JavaScript
import "../../../node_modules/assets/vendor/flot/excanvas.min.js";
// import "../../../node_modules/assets/vendor/flot/jquery.flot.js";
// import "../../../node_modules/assets/vendor/flot/jquery.flot.pie.js";
// import "../../../node_modules/assets/vendor/flot/jquery.flot.resize.js";
// import "../../../node_modules/assets/vendor/flot/jquery.flot.time.js";
// import "../../../node_modules/assets/vendor/flot-tooltip/jquery.flot.tooltip.min.js";
// import "../../../node_modules/assets/data/flot-data.js";
// Morris Charts JavaScript
import "../../../node_modules/assets/vendor/raphael/raphael.min.js";
//import "../../../node_modules/assets/vendor/morrisjs/morris.min.js";
//import "../../../node_modules/assets/data/morris-data.js";
// DataTables JavaScript
import "../../../node_modules/assets/vendor/datatables/js/jquery.dataTables.min.js";
import "../../../node_modules/assets/vendor/datatables-plugins/dataTables.bootstrap.min.js";
import "../../../node_modules/assets/vendor/datatables-responsive/dataTables.responsive.js";
// // Custom Theme JavaScript
// import "../../../node_modules/assets/dist/js/sb-admin-2.js";

class Script extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        
        // Datatables
        $(document).ready(function() {
            $('#dataTables-example').DataTable({
                responsive: true
            });
        });

        // tooltip demo
        // $('.tooltip-demo').tooltip({
        //     selector: "[data-toggle=tooltip]",
        //     container: "body"
        // })
        // // // popover demo
        // $("[data-toggle=popover]").popover()

    }
    render() { 
        return ( 
            null
         );
    }
}
 
export default Script;
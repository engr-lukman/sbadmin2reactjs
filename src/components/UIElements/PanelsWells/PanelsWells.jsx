import React, { PureComponent } from 'react';
import DefaultPanel from './DefaultPanel';
import PrimaryPanel from './PrimaryPanel';
import SuccessPanel from './SuccessPanel';
import InfoPanel from './InfoPanel';
import WarningPanel from './WarningPanel';
import DangerPanel from './DangerPanel';
import GreenPanel from './GreenPanel';
import YellowPanel from './YellowPanel';
import RedPanel from './RedPanel';
import AccordionPanel from './AccordionPanel';
import BasicTab from './BasicTab';
import PillTab from './PillTab';
import NormalWell from './NormalWell';
import LargeWell from './LargeWell';
import SmallWell from './SmallWell';
import Jumbotron from './Jumbotron';

class PanelsWells extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.title = "Panels and Wells";
        document.getElementById("pageTitle").innerHTML = "Panels and Wells";
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <DefaultPanel />
                    <PrimaryPanel />
                    <SuccessPanel />
                </div>
                {/* <!-- /.row --> */}
                <div className="row">
                    <InfoPanel />
                    <WarningPanel />
                    <DangerPanel />
                </div>
                {/* <!-- /.row --> */}
                <div className="row">
                    <GreenPanel />
                    <YellowPanel />
                    <RedPanel />
                </div>
                {/* <!-- /.row --> */}
                <div className="row">
                    <AccordionPanel />
                </div>
                {/* <!-- /.row --> */}
                <div className="row">
                    <BasicTab />
                    <PillTab />
                </div>
                {/* <!-- /.row --> */}
                <div className="row">
                    <NormalWell />
                    <LargeWell />
                    <SmallWell />                    
                </div>
                {/* <!-- /.row --> */}
                <div className="row">
                    <Jumbotron />
                </div>
                {/* <!-- /.row --> */}
            </React.Fragment>
         );
    }
}
 
export default PanelsWells;
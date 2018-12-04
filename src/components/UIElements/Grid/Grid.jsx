import React, { PureComponent } from 'react';
import GridOptions from './GridOptions';
import StackedHorizontal from './StackedHorizontal';
import MobileDesktop from './MobileDesktop';
import MobileTabletDesktops from './MobileTabletDesktops';
import ResponsiveColumn from './ResponsiveColumn';
import OffsettingColumn from './OffsettingColumn';
import OrderingColumn from './OrderingColumn';

class Grid extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        document.title = "Grid";
        document.getElementById("pageTitle").innerHTML = "Grid";
    }
    render() { 
        return ( 
            <React.Fragment>
                <GridOptions />
                <StackedHorizontal />
                <MobileDesktop />
                <MobileTabletDesktops />
                <ResponsiveColumn />
                <OffsettingColumn />
                <OrderingColumn />            
            </React.Fragment>
         );
    }
}
 
export default Grid;
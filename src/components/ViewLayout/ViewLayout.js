import React from 'react';
import Image from '../Image/Image';

import columnIcon from '../../images/column.svg';
import halfIcon from '../../images/half.svg';
import stackIcon from '../../images/stack.svg';

import columnIconRed from '../../images/columnHover.svg';
import halfIconRed  from '../../images/halfHover.svg';
import stackIconRed  from '../../images/stackHover.svg';

import { LayoutContext } from '../../context/LayoutContext';

class ViewLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            column: columnIconRed,
            half: halfIcon,
            stack: stackIcon
        };
    }

    static contextType = LayoutContext;

    columnLayout = () => {
        this.context.setGridLayout("column");
        this.setState({
            column: columnIconRed,
            half: halfIcon,
            stack: stackIcon
        });
    };

    // columnOnHover = () => {
    //     this.setState({ column: columnIconRed });
    // }

    // columnOnLeave = () => {
    //     this.setState({ column: columnIcon });
    // }

    halfLayout = () => {
        this.context.setGridLayout("half");
        this.setState({
            column: columnIcon,
            half: halfIconRed,
            stack: stackIcon
        });
    }

    // halfOnHover = () => {
    //     this.setState({ half: halfIconRed });
    // }

    // halfOnLeave = () => {
    //     this.setState({ half: halfIcon });
    // }

    stackLayout = () => {
        this.context.setGridLayout("stack");
        this.setState({
            column: columnIcon,
            half: halfIcon,
            stack: stackIconRed
        });
        // console.log(this.state.stack);
    }

    // stackOnHover = () => {
    //     this.setState({ stack: stackIconRed });
    // }

    // stackOnLeave = () => {
    //     this.setState({ stack: stackIcon });
    // }
    
    render(){
        return(
            <div className="view">
                <div className="button " onClick={ this.columnLayout} onMouseOver={ this.columnOnHover } onMouseLeave={ this.columnOnLeave }>
                    <Image imgSrc={ this.state.column }  />
                </div>
                <div className="button" onClick={ this.halfLayout} onMouseOver={ this.halfOnHover } onMouseLeave={ this.halfOnLeave } >
                    <Image imgSrc={ this.state.half } />
                </div>
                <div className="button" onClick={ this.stackLayout} onMouseOver={ this.stackOnHover } onMouseLeave={ this.stackOnLeave } >
                    <Image imgSrc={ this.state.stack } />
                </div>
            </div>
        );
    }
}

export default ViewLayout;
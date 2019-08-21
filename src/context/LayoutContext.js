import React, { Component } from 'react';

export const LayoutContext = React.createContext({});

export class LayoutProvider extends Component {

    constructor(props){
        super(props);

        this.state = {
            gridLayout: 'column'
        }
    }

    setGridLayout = (layout) => {
        this.setState({
            gridLayout: layout
        });
    }
    
    render() {
        return (
            <LayoutContext.Provider value={{
                setGridLayout: this.setGridLayout,
                gridLayout: this.state.gridLayout
            }}>
                {this.props.children}
            </LayoutContext.Provider>
        )
    }
}

export const LayoutConsumer = LayoutContext.Consumer;
import React from 'react';
import ViewLayout from '../ViewLayout/ViewLayout';
import Social from '../Social/Social';

import '../../styles/skew.scss'
import './PageFooter.scss';

class PageFooter extends React.Component {

    render() {
        return(
            <div className="footer">
                <div className="skew skew-bottom skew-left skew-negative-y"></div>
                <div className="skew skew-bottom skew-right skew-positive-y"></div>
                <ViewLayout />
                <Social />
            </div>
        );
    }
}

export default PageFooter;
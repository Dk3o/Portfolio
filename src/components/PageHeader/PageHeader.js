import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Image from '../Image/Image';

import '../../styles/skew.scss'
import './PageHeader.scss';

import logo from '../../images/Logo.svg';

class PageHeader extends React.Component {
    render() {
        return(
            <div className="header">
                <div className="skew skew-top skew-left skew-positive-y"></div>
                <div className="skew skew-top skew-right skew-negative-y"></div>
                <div className="logo">
                    <Link to="/">
                        <Image imgSrc={logo} />
                    </Link>
                </div>
                <Nav />
            </div>
        );
    }
}

export default PageHeader;
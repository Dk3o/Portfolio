import React from 'react';

import './Social.scss';

class Social extends React.Component {
    render(){
        return(
            <div className="social">
                <ul>
                    <li><a href="http://www.facebook.se">Facebook</a></li>
                    <li><a href="http://www.google.se">Google</a></li>
                    <li><a href="http://www.instagram.com">Instagram</a></li>
                    <li><a href="http://www.linkedin.com">LinkedIn</a></li>
                </ul>
            </div>
        );
    }
}

export default Social;
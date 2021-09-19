import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Share() {
    return <div className="share">
        <span className="share-icon">SHARE</span>
        <FontAwesomeIcon className="share-icon" icon="facebook-f" />
        <FontAwesomeIcon className="share-icon" icon="twitter" />
    </div>
        ;
}
export default Share;
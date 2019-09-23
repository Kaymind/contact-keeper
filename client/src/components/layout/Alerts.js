import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Alerts = () => {
    // Font-Awesome Library
    library.add(fas);

    const alertContext = useContext(AlertContext);

    return (
       alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
           <div key={alert.id} className={`alert alert-${alert.type}`} >
            <FontAwesomeIcon icon={['fas', 'info-circle']} /> {alert.msg}
           </div>
       ))
    );
};

export default Alerts

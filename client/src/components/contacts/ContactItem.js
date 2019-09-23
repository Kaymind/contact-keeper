import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactItem = ({ contact }) => {
  // Font-Awesome Library
  library.add(fas);

  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  
  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  }

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{" "}
        <span style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >{type.charAt(0).toUpperCase() + type.slice(1)}</span>
      </h3>
      <ul>
          {email && (<li>
            <FontAwesomeIcon icon={['fas', 'envelope-open']} /> {email}
            </li>)}
          {phone && (<li>
            <FontAwesomeIcon icon={['fas', 'phone']} /> {phone}
            </li>)}
      </ul>
      <p>
          <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem;

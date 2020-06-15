import React from 'react';
import './styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="applications">
        <ul>
          <li>
            <a href="/user-portal">User Portal</a>
          </li>
          <li>
            <a href="/cluster-manager">Cluster Manager</a>
          </li>
        </ul>
      </div>
      <div className="user-portal">
        <ul>
          <li>
            <a href="/user-portal/voicemails">Voicemails</a>
          </li>
          <li>
            <a href="/user-portal/faxes">Faxes</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import '../css/tab.css';

const Tab = ({ activeTab, label, onClick }) => {
    const className = `tab-list-item ${activeTab === label ? 'tab-list-active' : ''}`;

    return (
        <li className={className} onClick={() => onClick(label)}>
            {label}
        </li>
    );
}
export default Tab;
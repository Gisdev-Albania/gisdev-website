import React from 'react';
import styles from '../../styles/components/Tabs.module.scss';

const TabNavItem = (props: any) => {
  const { id, title, activeTab, setActiveTab } = props;

  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? styles.active : ''}>
      {title}
    </li>
  );
};
export default TabNavItem;

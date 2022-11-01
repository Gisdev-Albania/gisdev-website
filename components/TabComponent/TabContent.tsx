import React from 'react';
import styles from '../../styles/components/Tabs.module.scss';

const TabContent = (props: any) => {
  const { id, activeTab, children } = props;
  return activeTab === id ? (
    <div className={styles.TabContent}>{children}</div>
  ) : null;
};

export default TabContent;

import React, { useState } from 'react';
import TabNavItem from './TabNavItem';
import TabContent from './TabContent';
import styles from '../../styles/components/Tabs.module.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className={styles.Tabs}>
      <ul className={styles.nav}>
        <TabNavItem
          title="Back-end"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Front-end"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Cloud"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Databases"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Project"
          id="tab5"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="UI/UX"
          id="tab6"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className={styles.outlet}>
        <TabContent id="tab1" activeTab={activeTab}>
          <div className={styles.outlet__container}>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
          </div>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <div className={styles.outlet__container}>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/625047b9b8ef632fd016ad1f_js-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Java Script</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/625047b9b8ef632fd016ad1f_js-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Java Script</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/625047b9b8ef632fd016ad1f_js-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Java Script</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/625047b9b8ef632fd016ad1f_js-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Java Script</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/625047b9b8ef632fd016ad1f_js-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Java Script</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/625047b9b8ef632fd016ad1f_js-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Java Script</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/625047b9b8ef632fd016ad1f_js-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Java Script</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/625047b9b8ef632fd016ad1f_js-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Java Script</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/625047b9b8ef632fd016ad1f_js-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Java Script</div>
            </div>
          </div>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <div className={styles.outlet__container}>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
          </div>
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <div className={styles.outlet__container}>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
          </div>
        </TabContent>
        <TabContent id="tab5" activeTab={activeTab}>
          <div className={styles.outlet__container}>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
          </div>
        </TabContent>
        <TabContent id="tab6" activeTab={activeTab}>
          <div className={styles.outlet__container}>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
            <div
              id="w-node-_7635924c-88cd-cf25-aedc-f8c9987dea4c-a62e4074"
              className={styles.logo__wrapper}
            >
              <img
                loading="lazy"
                src="https://uploads-ssl.webflow.com/623b0c2afad0188787f8925e/624ee1b4f215a555f532a4a6_ruby-logo.svg"
                alt=""
              />
              <div className={styles.text__tech}>Ruby</div>
            </div>
          </div>
        </TabContent>
      </div>
    </div>
  );
};
export default Tabs;

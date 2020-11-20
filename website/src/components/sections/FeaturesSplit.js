import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Our Ambition',
    paragraph: 'To drive customers to purchase from participating businesses and empower businesses with a new way for pedestrians to discover what they offer.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Empowering local 
                  </div>
                <h3 className="mt-0 mb-12">
                Easy participation.
                  </h3>
                <p className="m-0">
                Businesses participate by allocating their internet bandwidth to the KCN. With access points already available in most businesses, this requires little setup or configuration. This doesn't take away from the connection speed of the participating business, it only pools resources to allow for a limited capacity connection that other nearby businesses are contributing to. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/bitswift-mobile.png')}
                  alt="Bitswift Mobile"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Free Wi-Fi for Pedestrians
                  </div>
                <h3 className="mt-0 mb-12">
                  Reliable, Secure.
                  </h3>
                <p className="m-0">
                This means that a connected pedestrian walking from store A to store D, where all stores A-D have participating access points, will likely be consuming bandwidth from multiple business access points on their journey from A to D. 
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/bitswift-security.png')}
                  alt="Bitswift Security"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  How it works
                  </div>
                <h3 className="mt-0 mb-12">
                  Mesh magic.
                  </h3>
                <p className="m-0">
                It's like being connected to the Wi-Fi of a 4 story house and going from the basement to the top floor: at no point do you lose connection, rather your device adapts to connect to the access point closest to you. This type of infrastructure is called a Mesh Network and is a popular choice to ensure no downtime and maximum reliability.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/bitswift-house.png')}
                  alt="Bitswift House"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  No risk of downtime
                  </div>
                <h3 className="mt-0 mb-12">
                  More mesh magic.
                  </h3>
                <p className="m-0">
                This decentralized model implies that in a network of 3 participating businesses for example, if the access point or bandwidth is down for one business and the other access points are in close enough range, the business whose connection is down can rely on KCN to maintain a connection. Additionally, the more businesses participating in the network, the wider the network coverage is. Useful for localized power outages for example.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/bitswift-wifi.png')}
                  alt="Bitswift Wifi"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
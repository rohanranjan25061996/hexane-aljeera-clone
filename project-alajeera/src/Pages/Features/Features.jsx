import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { FooterContainer } from '../../Common/Footer/Containers/Footer';
import { FeaturesWithoutFooter } from './FeaturesWithoutFooter';
const Features = () => {
  const footer_styles = {
    marginTop: '50%',
  };
  const { isLoading, isError, fea_filter_data } = useSelector(
    (state) => state.fea,
    shallowEqual
  );
  return (
    <div>
      <FeaturesWithoutFooter />
      <div style={isLoading ? footer_styles : null}>
        <FooterContainer />
      </div>
    </div>
  );
};

export { Features };

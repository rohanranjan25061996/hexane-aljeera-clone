import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { FooterContainer } from '../../Common/Footer/Containers/Footer';
import { EconomyWithoutFooter } from './EconomyWithoutFooter';

const footer_styles = {
  marginTop: '50%',
};

function Economy() {
  const { isLoading, isError, filter_data } = useSelector((state) => state.eco, shallowEqual);

  return (
    <>
      <EconomyWithoutFooter />
      <div style={isLoading ? footer_styles : null}>
        <FooterContainer />
      </div>
    </>
  );
}

export { Economy };

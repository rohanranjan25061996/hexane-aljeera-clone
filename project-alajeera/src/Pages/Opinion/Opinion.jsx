import React from 'react';
import { FooterContainer } from '../../Common/Footer/Containers/Footer';
import { OpinionWithoutFooter } from './OpinionWithoutFooter';

const Opinion = () => {
  return (
    <div>
      <OpinionWithoutFooter />
      <FooterContainer />
    </div>
  );
};

export { Opinion };

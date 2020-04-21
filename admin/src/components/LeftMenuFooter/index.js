/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import LeftMenuLink from '../LeftMenuLink';
import Wrapper from './Wrapper';
import messages from './messages.json';

defineMessages(messages);

const LeftMenuFooter = ({ version }) => {
  return (
    <Wrapper>
      <div className="poweredBy">
        <FormattedMessage
          id={messages.poweredBy.id}
          defaultMessage={messages.poweredBy.defaultMessage}
          key="poweredBy"
        />
        <span>
          WAZA-GAME
        </span>
      </div>
    </Wrapper>
  );
};

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;

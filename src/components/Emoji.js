import React from 'react';
import PropTypes from 'prop-types';

import { getImageSrcByUnicodeOrShortName } from '../utils/emojiUtil';

function Emoji(props) {
  const {
    unicodeOrShortName,
    style,
    ...restProps
  } = props;

  return (
    <img
      className="plain" // so that reveal.css doesn't put a frame around the image
      src={getImageSrcByUnicodeOrShortName(unicodeOrShortName)}
      alt={`${unicodeOrShortName} emoji`}
      style={{
        height: '1em',
        ...style,
      }}
      {...restProps}
    />
  );
}

Emoji.propTypes = {
  unicodeOrShortName: PropTypes.string.isRequired,
};

export default Emoji;

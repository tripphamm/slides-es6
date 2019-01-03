import React from 'react';
import PropTypes from 'prop-types';

import Emoji from './Emoji';

function ListWithEmojis(props) {
  const {
    items,
    animated,
  } = props;

  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      {items.map(item => (
        <li
          key={item.text.split(' ').join('')}
          className={animated ? 'fragment fade-in' : ''}
          style={{
            display: 'flex',
            alignItems: 'center',
            lineHeight: '1.3333em',
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Emoji
            unicodeOrShortName={item.emojiUnicodeOrShortName}
            style={{
              height: '1.3333em',
              marginRight: 15,
            }}
          />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

ListWithEmojis.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      emojiUnicodeOrShortName: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  animated: PropTypes.bool,
};

ListWithEmojis.defaultProps = {
  animated: false,
};

export default ListWithEmojis;

import React from 'react';
import childrenPropType from 'react-children-proptype';

export default function Slide(props) {
  const {
    children,
  } = props;

  return (
    <section>
      {children}
    </section>
  );
}

Slide.propTypes = {
  children: childrenPropType.isRequired,
};

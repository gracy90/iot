import React from 'react';
import { Panel } from 'rsuite';

const Card = React.forwardRef((props, ref) => (
  <Panel {...props} ref={ref} bordered header={props.title} style={{...props.style}}>
    {props.children}
  </Panel>
));

export default Card
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';
import PropTypes from 'prop-types';

import { getTransitionStyles } from '@helpers/style';

const TIMEOUT = 500;
const transitionStyles = getTransitionStyles(TIMEOUT);
function PageTransition({ children, location }) {
  return (
    <TransitionGroup style={{ position: 'relative' }}>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {(status) => (
          <div
            style={{
              ...transitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
}
PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
};

export default PageTransition;

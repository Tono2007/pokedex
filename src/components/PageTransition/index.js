import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';

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

export default PageTransition;

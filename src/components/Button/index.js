import { createElement } from 'react';
import PropTypes from 'prop-types';

const colors = {
  default: {
    color: 'DBlue',
    hoverColor: 'CBlue',
    textColor: 'contrastText',
    styles: 's',
  },
  primary: {
    color: 'DBlue',
    hoverColor: 'CBlue',
    textColor: 'contrastText',
    styles: '',
  },
};
const sizes = {
  small: {
    style: 'px-4 py-1.5  font-medium text-xs ',
  },
  medium: {
    style: 'px-6 py-2.5  font-normal text-sm ',
  },
  large: {
    style: 'px-7 py-3.5  font-normal text-md ',
  },
};
const colorsName = Object.entries(colors).map(([key]) => key);
const sizesNames = Object.entries(sizes).map(([key]) => key);

function Button(props) {
  const {
    color = 'primary',
    children,
    variant,
    size = 'medium',
    classes,
    component,
    ...rest
  } = props;

  // if (!colors[color]) color = 'default';

  const {
    hoverColor,
    textColor,
    color: btnColor,
  } = colors[color] || colors.default;
  const { style: sizeStyle } = sizes[size] || sizes.medium;

  const conditionalStyle = ` bg-${btnColor} text-${textColor}
  hover:bg-${hoverColor}
   focus:bg-${hoverColor} active:bg-${hoverColor}/70  ${classes}
   ${sizeStyle}
   `;
  const style = `inline-block hover:cursor-pointer
  leading-tight uppercase rounded shadow-md  hover:shadow-lg
  focus:shadow-lg focus:outline-none focus:ring-0 
  active:shadow-lg transition duration-150 ease-in-out ${conditionalStyle}`;

  const container = component ?? 'button';

  return createElement(container, { className: style, ...rest }, children);

  /*   return (
    <button
      type="button"
      className={`inline-block 
      leading-tight uppercase rounded shadow-md  hover:shadow-lg
      focus:shadow-lg focus:outline-none focus:ring-0 
   active:shadow-lg transition duration-150 ease-in-out ${style}`}
      {...rest}
    >
      {children}
    </button>
  );
 */
}

Button.propTypes = {
  color: PropTypes.oneOf(colorsName),
  size: PropTypes.oneOf(sizesNames),
  children: PropTypes.node,
  classes: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  component: PropTypes.string,
};
Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  children: null,
  classes: '',
  variant: 'contained',
  component: 'button',
};

export default Button;

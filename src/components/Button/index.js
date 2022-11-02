import { createElement } from 'react';

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

function Button(props) {
  const { color = 'primary' } = props;
  const {
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
  console.log(container);

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

export default Button;
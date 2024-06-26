import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  const color = props.color;
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M11 20a9 9 0 100-18 9 9 0 000 18zM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97z"
        stroke={color ? color : '#9D9291'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;

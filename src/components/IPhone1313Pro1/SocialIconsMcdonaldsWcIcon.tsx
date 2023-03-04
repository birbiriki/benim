import { memo, SVGProps } from 'react';

const SocialIconsMcdonaldsWcIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={24} cy={24} r={24} fill='white' fillOpacity={0.87} />
    <path
      d='M30.9922 11.989C33.7466 11.989 35.9808 23.6271 35.9808 38H40C40 22.526 35.9453 10 30.9804 10C28.1433 10 25.6372 13.7531 23.9823 19.649C22.3273 13.7531 19.8212 10 17.0078 10C12.0429 10 8 22.5142 8 37.9882H12.0192C12.0192 23.6152 14.2298 11.989 16.9841 11.989C19.7385 11.989 21.9727 22.7391 21.9727 35.9992H25.9682C25.9682 22.7391 28.2143 11.989 30.9686 11.989'
      fill='#FFCC00'
    />
  </svg>
);

const Memo = memo(SocialIconsMcdonaldsWcIcon);
export { Memo as SocialIconsMcdonaldsWcIcon };

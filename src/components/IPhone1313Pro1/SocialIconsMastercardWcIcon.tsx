import { memo, SVGProps } from 'react';

const SocialIconsMastercardWcIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={24} cy={24} r={24} fill='white' />
    <path d='M19.6734 31.862H28.3265V16.1381H19.6734V31.862Z' fill='#FF5F00' />
    <path
      d='M20.2229 24C20.2229 20.8101 21.6999 17.969 24 16.1381C22.3177 14.799 20.1954 14.0001 17.8884 14.0001C12.4271 14.0001 8 18.4773 8 24C8 29.5228 12.4271 34 17.8884 34C20.1954 34 22.3177 33.2011 24 31.862C21.6999 30.0308 20.2229 27.19 20.2229 24'
      fill='#EB001B'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M30.1116 33.9999C35.5726 33.9999 40 29.5227 40 24C40 18.4772 35.5726 14 30.1116 14C27.8046 14 25.682 14.7989 24 16.138C26.3001 17.9692 27.7771 20.8102 27.7771 24C27.7771 27.1899 26.3001 30.031 24 31.8619C25.682 33.201 27.8046 33.9999 30.1116 33.9999ZM39.6912 30.1966V29.8085H39.591L39.4759 30.0755L39.3605 29.8085H39.2602V30.1966H39.3308V29.9038L39.4391 30.1563H39.5124L39.6206 29.9033V30.1966H39.6912ZM39.0564 30.1966V29.8747H39.185V29.8091H38.8581V29.8747H38.9864V30.1966H39.0564Z'
      fill='#F79E1B'
    />
  </svg>
);

const Memo = memo(SocialIconsMastercardWcIcon);
export { Memo as SocialIconsMastercardWcIcon };
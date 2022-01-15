import { memo, SVGProps } from 'react';

export default Icon;
function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 762 884"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M-105.214 859.099l-10.468-822.665c-.176-13.805 10.874-25.14 24.68-25.316L735.739.598c22.301-.283 33.784 26.563 18.176 42.494L-62.358 876.277c-15.566 15.888-42.573 5.064-42.856-17.178z"
        fill="url(#prefix__paint0_linear_71:30191)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_71:30191"
          x1={633.662}
          y1={277.12}
          x2={-295.597}
          y2={-463.346}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C4E5F4" />
          <stop offset={0.245} stopColor="#E1F2F9" />
          <stop offset={0.667} stopColor="#F3F9FC" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export const OffersTriangle = memo(Icon);

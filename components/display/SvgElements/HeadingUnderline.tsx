import { memo, SVGProps } from 'react';

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 112 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M101.314 10V0H111.5l-10.186 10z"
        fill="#CF2C2B"
        fillOpacity={0.86}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M101.314 10H0V0h101.314v10z"
        fill="#CF2C2B"
        fillOpacity={0.86}
      />
    </svg>
  );
}

export const HeadingUnderline = memo(Icon);

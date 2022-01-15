import { memo, SVGProps } from 'react';

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 332 335"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d_68:29527)">
        <path
          d="M167.335 280.649c30.528-.38 59.659-12.98 81-35.037s33.15-51.77 32.836-82.619l-1.107-98.128a18.347 18.347 0 00-5.436-12.824 17.967 17.967 0 00-12.811-5.201l-97.109 1.096c-30.539.344-59.69 12.934-81.038 34.999C62.32 105 50.523 134.732 50.872 165.592c.348 30.859 12.814 60.318 34.655 81.896 21.841 21.577 51.268 33.505 81.808 33.161z"
          fill="url(#prefix__paint0_linear_68:29527)"
          fillOpacity={0.12}
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear_68:29527"
          x1={167.335}
          y1={280.649}
          x2={301.104}
          y2={8.689}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0169C2" />
          <stop offset={1} stopColor="#7ED4EF" />
        </linearGradient>
        <filter
          id="prefix__filter0_d_68:29527"
          x={0.865}
          y={0.839}
          width={330.312}
          height={333.817}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={25} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.664 0 0 0 0 0.84 0 0 0 0 0.936 0 0 0 0.38 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_68:29527"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_68:29527"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export const Shape2_About = memo(Icon);

import { memo, SVGProps } from 'react';

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 443 815"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.6} filter="url(#prefix__filter0_d_71:29768)">
        <path
          d="M-149.501 363.001l-13.008-269.839c-1.178-24.422 23.037-42.066 45.924-33.463l480.108 180.475c23.823 8.955 29.723 39.948 10.857 57.03L-134.001 757.5l-15.5-394.499z"
          fill="url(#prefix__paint0_linear_71:29768)"
          style={{
            mixBlendMode: 'darken'
          }}
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear_71:29768"
          x1={-191.659}
          y1={640.385}
          x2={609.543}
          y2={11.735}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#83D1EE" />
          <stop offset={1} stopColor="#298BD0" />
        </linearGradient>
        <filter
          id="prefix__filter0_d_71:29768"
          x={-219.551}
          y={0.49}
          width={662.121}
          height={814.01}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={28.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.330081 0 0 0 0 0.674797 0 0 0 0 0.869919 0 0 0 0.5 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_71:29768"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_71:29768"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export const BlueTriangle = memo(Icon);

import { memo, SVGProps } from 'react';

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 321 267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.55}
        d="M-4.423 147.048c32.089-1.432 61.786 13.664 89.084 33.18 27.298 19.517 52.87 43.599 80.735 61.572 27.866 17.973 58.721 29.809 91.112 23.399 12.317-2.441 24.939-7.646 36.241-18.219 11.303-10.573 21.194-27.017 25.3-45.934 4.08-18.814 2.115-38.312-3.096-53.946-5.213-15.623-13.414-27.868-22.038-38.922C238.193 38.066 163.69 9.05 87.982 2.001 59.942-.606 31.087-.34 2.41 11.41-26.268 23.164-55 47.485-74.776 84.864c-9.963 18.823-17.204 40.996-20.688 63.531-2.115 13.664-7.499 61.959 7.218 49.022 13.79-12.123 24.263-27.798 39.47-36.715 14.543-8.539 29.662-13.006 44.353-13.653z"
        fill="url(#prefix__paint0_linear_71:29980)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_71:29980"
          x1={-84.839}
          y1={89.493}
          x2={324.841}
          y2={163.918}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.266} stopColor="#FEE0D3" stopOpacity={0.86} />
          <stop offset={0.711} stopColor="#FEE0D3" />
          <stop offset={1} stopColor="#FFCDB7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export const Shape1_About = memo(Icon);

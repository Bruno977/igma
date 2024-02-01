type LogoProps = {
  width?: number;
  height?: number;
};

export function LogoHeader({ width = 120, height = 42 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_128_44185)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M120 0H0v42h112.125V13.125H120V0z"
          fill="#211E1E"
        />
      </g>
      <defs>
        <clipPath id="clip0_128_44185">
          <path fill="#fff" d="M0 0H120V42H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

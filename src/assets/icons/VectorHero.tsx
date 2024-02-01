import { IconProps } from '../../@types/icon';

export function VectorHero({ width = 60, height = 157 }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 157"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60 0H0v157h18l42-42V0z"
        fill="#863920"
      />
    </svg>
  );
}

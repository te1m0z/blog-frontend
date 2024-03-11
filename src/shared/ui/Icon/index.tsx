import cn from "classnames";

interface IProps {
  name: string;
  size?: string | number;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function Icon(props: IProps) {
  const { name, size, width, height, className } = props;

  return (
    <svg
      width={size || width || "100%"}
      height={size || height || "100%"}
      className={cn("icon", `icon-${name}`, className)}
    >
      <use href={`/sprite.svg#${name}`} />
    </svg>
  );
}


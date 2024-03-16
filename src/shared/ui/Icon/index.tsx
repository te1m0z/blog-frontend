import * as S from './styles'

interface IProps {
  name: string;
  size?: string | number;
  width?: string | number;
  height?: string | number;
}

export default function Icon(props: IProps) {
  const { name, size, width, height } = props;

  return (
    <S.Svg
      width={size || width || "100%"}
      height={size || height || "100%"}
    >
      <use href={`/sprite.svg#${name}`} />
    </S.Svg>
  );
}


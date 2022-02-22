type ElmentMapType = { [key in keyof JSX.IntrinsicElements]?: boolean };

type Props = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  className?: string;
  children: React.ReactNode;
};

const TitleComponent: React.FC<Props> = ({
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  className,
  children,
}) => {
  const elements: ElmentMapType = { h1, h2, h3, h4, h5, h6 };
  const tags = (Object.keys(
    elements
  ) as (keyof JSX.IntrinsicElements)[]).filter((tag) => elements[tag]);
  const Component = tags[0] ?? "h1";
  return <Component className={className}>{children}</Component>;
};

const Title = TitleComponent;

export default Title;

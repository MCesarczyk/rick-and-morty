type TitleProps = {
  title: string
}

const Headline = ({ title }: TitleProps) => (
  <h1 data-testid="header">
    {title}
  </h1>
);

export default Headline;
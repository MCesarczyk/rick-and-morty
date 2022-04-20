type TitleProps = {
  heroName: string,
  heroLink: string
}

const HeroTitle = ({ heroName, heroLink }: TitleProps) => (
  <h1 >
    Welcome to
    <a
      href={heroLink}
      target="_blank"
      rel='noopener noreferrer'
    >
      {` ${heroName} `}
    </a>
    page!
  </h1>
);

export default HeroTitle;
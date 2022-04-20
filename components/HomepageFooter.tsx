type footerProps = {
  date: number,
  title: string,
  link: string
}

const HomepageFooter = ({ date, title, link }: footerProps) => (
  <footer data-testid="footer">
    {date}
    {' '}
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  </footer>
);

export default HomepageFooter;
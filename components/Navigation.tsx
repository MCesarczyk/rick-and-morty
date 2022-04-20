
import Link from 'next/link'

type navigationProps = {
  subpages: { id: number, items: string }[]
}

const Navigation = ({ subpages }: navigationProps) => (
  <nav>
    <ul>
      {subpages.map(page => (
        <li key={page.id}>
          <Link href={`/${page.items}`}>
            <a>{page.items}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
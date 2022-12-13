import { request, gql } from 'graphql-request';
import { Framework } from '../app/types';

export async function getServerSideProps() {
  const query = gql`
    {
      frameworks {
        id
        name
      }
    }
  `;

  const data = await request('http://localhost:3000/api/graphql', query);

  const { frameworks } = data
  return {
    props: {
      frameworks,
    },
  }
};

interface HomeProps {
  frameworks: Framework[];
};

export default function Home({ frameworks }: HomeProps) {
  return (
    <div>
      <ul>
        {frameworks.map(f => (
          <li key={f.id}>{f.name}</li>
        ))}
      </ul>
    </div>
  )
};

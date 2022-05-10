import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

export default function LinkList() {
  const LINKS = gql`
    query Query {
      links {
        url
        slug
      }
    }
  `;

  const { loading, error, data } = useQuery(LINKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.links.map(({ url, slug }) => (
    <Link key={slug} url={url} slug={slug} />
  ));
}

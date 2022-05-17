import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

export default function App() {
  const { slug } = useParams();
  const LINK = gql`
    query Query($slug: String) {
      link(slug: $slug) {
        url
      }
    }
  `;

  const { loading, error, data } = useQuery(LINK, { variables: { slug } });

  if (loading) return <p>Redirecting...</p>;
  if (error) return <p>Error :(</p>;

  window.location.assign(data.link[0].url);
  return <p>Redirecting...</p>;
}

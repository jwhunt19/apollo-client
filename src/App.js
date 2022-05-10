import "./styles.css";
import { Container } from '@mui/material';
import { useQuery, gql } from "@apollo/client";

export default function App() {


  return (
    <Container maxWidth="xl" className="App">
      <h1>Joey's URL Shortener</h1>
    </Container>
  );
}

import "./styles.css";
import { Container } from "@mui/material";
import LinkList from "./components/LinkList";
import LinkForm from "./components/LinkForm";

export default function App() {
  return (
    <Container maxWidth="xl" className="App">
      <h1>Joey's URL Shortener</h1>
      <LinkForm />
      <LinkList />
    </Container>
  );
}

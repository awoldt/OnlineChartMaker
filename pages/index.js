import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <h1>Easily create a chart</h1>
      <ul>
        <li>
          <a href={"/bar"}>Bar chart</a>
        </li>
      </ul>
    </Container>
  );
}

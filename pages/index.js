import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <h1 style={{ maxWidth: "500px", fontSize: "60px" }}>
        Making a Chart Has Never Been Easier
      </h1>
      <p>Choose from a variety of charts and custom make it how you like</p>

      <h2>Supported Charts</h2>
      <ul>
        <li>
          <a href={"/bar"}>Bar chart</a>
        </li>
      </ul>
      <p>
        made by <a href={"https://awoldt.com"}>awoldt</a>
      </p>
    </Container>
  );
}

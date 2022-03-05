import { Container } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";

export default function Home() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <h1 style={{ maxWidth: "700px", fontSize: "60px" }}>
          Making a Chart Has Never Been Easier
        </h1>
        <p>
          Choose from a variety of charts and custom make it how you like.
          Support on both desktop and mobile devices
        </p>

        <h2>Supported Charts</h2>
        <ul>
          <li>
            <a href={"/bar"}>Bar chart</a>
          </li>
          <li>
            <a href={"/line"}>Line chart</a>
          </li>
          <li>
            <a href={"/radar"}>Radar chart</a>
          </li>
        </ul>
        <p>
          made by <a href={"https://awoldt.com"}>awoldt</a>
        </p>
      </Container>
    </>
  );
}

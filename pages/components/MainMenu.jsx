// own components
import MainMenuModule from "./MainMenuModule";

// lib
import { v4 as uuidv4 } from "uuid";

export default function MainMenu() {
  const items = new Array(10).fill({
    title: "First",
    description: "Description",
    text: "This is the first text",
  });

  return items.map((item) => {
    const randomKey = uuidv4();
    return <MainMenuModule key={randomKey} info={item} />;
  });
}

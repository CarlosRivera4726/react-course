import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export const App = () => {
  return (
    <section className="App">
      <TwitterFollowCard username="midudev" name="Miguel Angel Duran" />
      <TwitterFollowCard username="carlos" name="Carlos Rivera" />
      <TwitterFollowCard username="elonmusk" name="Elon Musk" />
    </section>
  );
};

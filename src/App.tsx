import CounterContainer from "./containers/counter-container/counter-container";
import { GithubProfileLoader } from "./containers/github-profile-loader/github-profile-loader";

function App() {
  return (
    <div className="App">
      <GithubProfileLoader />
      {/* <CounterContainer /> */}
    </div>
  );
}

export default App;

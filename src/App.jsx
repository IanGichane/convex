import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


function App() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="App">
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    <SignedIn>

      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      </SignedIn>
    </div>
  );
}

export default App;


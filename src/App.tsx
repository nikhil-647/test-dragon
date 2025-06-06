import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

async function sayHello() {
  const result = await client.queries.sayHello({ name: "Hercules" });
  console.log(result);
}

function App() {
  return (
    <main>
     <button onClick={sayHello}>Say Hello Dragon</button>
    </main>
  );
}

export default App;

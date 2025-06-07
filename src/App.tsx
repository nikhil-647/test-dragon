import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
const client = generateClient<Schema>();

async function sayHello() {
  const result = await client.queries.sayHello({ name: "Hercules" });
  console.log(result);
}

function App() {
  return (
    <Authenticator>
            {({ signOut, user }) => (
              <>
                <h1>Hello {user?.username}</h1>
                <main>
                  <button onClick={sayHello}>Say Hello Dragon</button>
                </main>
                <button onClick={signOut}>Sign out</button>
              </>
            )}
    </Authenticator>
  );
}

export default App;

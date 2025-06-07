import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { fetchUserAttributes } from '@aws-amplify/auth';
import { useState, useEffect } from 'react';

const client = generateClient<Schema>();

async function sayHello() {
  const result = await client.queries.sayHello({ name: "Hercules" });
  console.log(result);
}

function App() {
  return (
    <Authenticator signUpAttributes={['nickname']}>
            {({ signOut }) => (
              <>
                <UserDetails />
                <main>
                  <button onClick={sayHello}>Say Hello Dragon</button>
                </main>
                <button onClick={signOut}>Sign out</button>
              </>
            )}
    </Authenticator>
  );
}

const UserDetails = () => {
  const [nickname, setNickname] = useState<string | null>(null);

  useEffect(() => {
    const fetchAttributes = async () => {
      const attributes = await fetchUserAttributes();
      setNickname(attributes?.nickname || null);
    };
    fetchAttributes();
  }, []);

  return (
    <div>
      <h1>Hello {nickname}</h1>
    </div>
  )
}

export default App;

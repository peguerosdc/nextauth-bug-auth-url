"use client"

import { signIn } from "next-auth/react";
import { serverSignIn } from "./actions";

export default async function Home() {
  return (
    <main >
      <form action={serverSignIn}>
        <button type="submit">Sign In Server</button>
      </form>
      <button onClick={() => signIn()}>Sign In Client</button>
    </main>
  );
}

import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignIn = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace("/events");
    }
  }, [session]);

  return <button onClick={() => signIn("github")}>signin</button>;
};

export default SignIn;

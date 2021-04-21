import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  LoginPageContainer,
  LoginCard,
  StyledGoogleLogo,
  GoogleSignInButton
} from "../styles/signInStyles";

const SignIn = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace("/events");
    }
  }, [session]);

  if (session) {
    router.replace("/events");
  }

  return (
    <LoginPageContainer>
      <LoginCard>
        <GoogleSignInButton onClick={() => signIn("google")}>
          <StyledGoogleLogo
            src="/assets/images/google-logo.svg"
            width={22}
            height={22}
          />
          <span>Sign in with Google</span>
        </GoogleSignInButton>
      </LoginCard>
    </LoginPageContainer>
  );
};

export default SignIn;

import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

const ProfilePage = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  if (!session && !loading) {
    router.replace("/signin");
  }
  if (loading) {
    return <p>loading...</p>;
  }

  return <p>Profile Page</p>;
};

export default ProfilePage;

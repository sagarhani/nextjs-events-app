import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { AddNewEvent as AddEvent } from "../../components/AddNewEvent";

const AddNewEvent = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && !loading) {
      router.replace("/signin");
    }
  }, [session]);

  if (loading) {
    return <p>loading...</p>;
  }

  return <AddEvent />;
};

export default AddNewEvent;

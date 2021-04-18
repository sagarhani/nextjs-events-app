import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const AddNewEvent = () => {
  const [session, loading] = useSession();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      isFeatured: false
    }
  });

  const createEventHandler = async data => {
    const response = await fetch("/api/events/addNew", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({ "content-type": "application/json" })
    }).then(res => res.json());
  };

  useEffect(() => {
    if (!session && !loading) {
      router.replace("/signin");
    }
  }, [session]);

  if (loading) {
    return <p>loading...</p>;
  }

  console.log("sessions", session);

  const onSubmit = data => {
    console.log("data", data);
    createEventHandler(data);
  };
  console.log(errors);

  return (
    <div>
      <p>Add New Event</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            name="title"
            {...register("title", { required: true, maxLength: 80 })}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Meetup Image</label>
          <input
            type="url"
            name="imageUrl"
            {...register("imageUrl", { required: true, maxLength: 200 })}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            {...register("description", { required: true, maxLength: 120 })}
          />
          <label htmlFor="isFeatured">Feature this event ?</label>
          <input
            type="checkbox"
            name="isFeatured"
            {...register("isFeatured", { required: false, disabled: true })}
          />
        </div>

        <div>
          <button type="submit">Create Event</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewEvent;

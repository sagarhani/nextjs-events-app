import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/client";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  AddNewEventPageContainer,
  AddNewEventFormContainer,
  AddNewEventTextInput,
  AddNewEventTextArea,
  ImageUploadContainer,
  ImageInput,
  FormFooter,
  ImagePreviewContainer,
  CancelUpload
} from "./styles";
import { Button } from "../common";

export const AddNewEvent = () => {
  const [session, loading] = useSession();
  const [preview, setPreview] = useState();
  const router = useRouter();

  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      image: "",
      isFeatured: false
    }
  });

  const createEventHandler = async ({
    title,
    image,
    description,
    isFeatured
  }) => {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("image", acceptedFiles[0]);
    formData.append("description", description);
    formData.append("isFeatured", isFeatured);

    const response = await fetch("/api/events/addNew", {
      method: "POST",
      body: formData
    });
    if (response) {
      router.push("/events");
    }
  };

  useEffect(() => {
    if (!session && !loading) {
      router.replace("/signin");
    }
  }, [session]);

  if (loading) {
    return <p>loading...</p>;
  }

  const onSubmit = data => {
    createEventHandler(data);
  };

  const onPreviewCancelClickHandler = () => {
    setPreview(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AddNewEventPageContainer>
        <AddNewEventFormContainer>
          <div>
            <AddNewEventTextInput
              placeholder="Enter event name"
              type="text"
              required
              name="title"
              {...register("title", { required: true, maxLength: 80 })}
            />
            <AddNewEventTextArea
              placeholder="Enter description of the event"
              type="text"
              name="description"
              {...register("description", { required: true, maxLength: 120 })}
            />
            {!preview && (
              <ImageUploadContainer {...getRootProps()}>
                <ImageInput {...getInputProps()} accept="image/*" />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </ImageUploadContainer>
            )}
            {preview && (
              <ImagePreviewContainer>
                <img
                  src={preview}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
                <CancelUpload onClick={onPreviewCancelClickHandler}>
                  Cancel
                </CancelUpload>
              </ImagePreviewContainer>
            )}

            <FormFooter>
              {/* TODO: Add this back later */}
              {/* <span>Feature this event ?</span>
              <input
                type="checkbox"
                name="isFeatured"
                {...register("isFeatured", { required: false, disabled: true })}
              /> */}
              <Button type="submit">Create</Button>
            </FormFooter>
          </div>
        </AddNewEventFormContainer>
      </AddNewEventPageContainer>
    </form>
  );
};

import { useForm } from "react-hook-form";

// type LoginData = {};

export default function Form() {
  // const handleSubmitOne: FormEventHandler<HTMLFormElement> = e => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const dataSubmitted = Object.fromEntries(formData.entries());
  // };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const emaiRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="your Compony Name"
        {...register("ComponyName", {
          required: "Compony Name is required",
          minLength: {
            value: 4,
            message: "Compony Name must be at least 2 characters",
          },
        })}
      />
      {errors.ComponyName && (
        <p className="text-red-500 font-bold text-md">
          {errors.ComponyName?.message}
        </p>
      )}

      <input
        type="text"
        placeholder="Nature of Business"
        {...register("NatureOfBusiness", {
          required: "Nature Of Business is required",
          minLength: {
            value: 4,
            message: "Nature Of Business must be at least 2 characters",
          },
        })}
      />
      {errors.NatureOfBusiness && (
        <p className="text-red-500 font-bold text-md">
          {errors.NatureOfBusiness?.message}
        </p>
      )}

      <input
        type="text"
        placeholder="email@xyz.com"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <p className="text-red-500 font-bold text-md">
          {errors.email?.message}
        </p>
      )}

      <input
        type="file"
        placeholder="Uploading file"
        {...register("file", {
          required: "Uploading file is required",
        })}
      />
      {errors.file && (
        <p className="text-red-500 font-bold text-md">{errors.file?.message}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

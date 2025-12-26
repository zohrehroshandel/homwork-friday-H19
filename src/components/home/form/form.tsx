import { useForm } from 'react-hook-form';

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

  const onSubmit = data => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="your Compony Name"
        {...register('ComponyName', {
          required: 'Compony Name is required',
          minLength: {
            value: 4,
            message: 'Compony Name must be at least 2 characters',
          },
        })}
      />
      {errors.ComponyName && (
        <p className="text-red-500 font-bold text-md">
          {errors.ComponyName?.message}
        </p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

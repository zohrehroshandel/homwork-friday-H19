import type { FormEventHandler } from "react";
import { useForm } from "react-hook-form";

type LoginData = {};

export default function Form() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as LoginData;
  };
  return (
    <form>
      <input type="text" />
    </form>
  );
}

import { useForm, SubmitHandler } from "react-hook-form";

// ✅ Define the expected form fields and types
interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto space-y-4 bg-white p-6 shadow-md rounded-lg"
    >
      {/* Name Input */}
      <div>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="border p-2 w-full rounded"
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>

      {/* Email Input */}
      <div>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
          })}
          placeholder="Email"
          className="border p-2 w-full rounded"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      {/* Message Input */}
      <div>
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Message"
          className="border p-2 w-full rounded resize-none h-32"
        />
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition">
        Send
      </button>
    </form>
  );
}
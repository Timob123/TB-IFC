import { useState } from "react";
import { useForm } from "react-hook-form";

interface CallbackFormData {
  name: string;
  surname: string;
  email: string;
  captcha: number;
}

export function CallbackForm() {
  const [[num1, num2]] = useState(() => [
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
  ]);
  const sum = num1 + num2;

  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm<CallbackFormData>();

  const onSubmit = async (data: CallbackFormData) => {
    if (data.captcha !== sum) {
      setError("captcha", { message: "Incorrect answer. Please try again." });
      return;
    }
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, type: "callback" }),
        });
        if (res.ok) {
          alert("Thank you! We will call you back shortly.");
          reset();
        } else {
          alert("Something went wrong. Please try calling us directly.");
        }
      } catch {
        alert("Something went wrong. Please try calling us directly.");
      }
    } else {
      alert("Thank you! We will call you back shortly.");
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow-md border border-slate-200">
      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-navy)]">
        We&apos;ll Call You Back
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="callback-name" className="block text-sm font-medium text-[var(--color-navy)] mb-1">Name</label>
          <input
            id="callback-name"
            type="text"
            {...register("name", { required: "Required" })}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] outline-none"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="callback-surname" className="block text-sm font-medium text-[var(--color-navy)] mb-1">Surname</label>
          <input
            id="callback-surname"
            type="text"
            {...register("surname", { required: "Required" })}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] outline-none"
          />
          {errors.surname && <p className="mt-1 text-sm text-red-500">{errors.surname.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="callback-email" className="block text-sm font-medium text-[var(--color-navy)] mb-1">Email Address</label>
        <input
          id="callback-email"
          type="email"
          {...register("email", { required: "Required" })}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] outline-none"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="callback-captcha" className="block text-sm font-medium text-[var(--color-navy)] mb-1">
          {num1} + {num2} = ?
        </label>
        <input
          id="callback-captcha"
          type="number"
          {...register("captcha", {
            required: "Please answer the question",
            valueAsNumber: true,
          })}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] outline-none"
        />
        {errors.captcha && <p className="mt-1 text-sm text-red-500">{errors.captcha.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-[var(--color-gold)] text-[var(--color-navy)] font-semibold rounded-md hover:bg-[var(--color-gold-light)] transition-colors"
      >
        PLEASE CALL ME BACK!
      </button>
    </form>
  );
}

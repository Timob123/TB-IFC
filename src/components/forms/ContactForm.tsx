import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          alert("Thank you for your message. We will be in touch shortly.");
          reset();
        } else {
          alert("Something went wrong. Please try calling us directly.");
        }
      } catch {
        alert("Something went wrong. Please try calling us directly.");
      }
    } else {
      alert("Thank you for your message. We will be in touch shortly.");
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-navy)] mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-navy)] mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-navy)] mb-1">
          Contact Phone No <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone", { required: "Phone is required" })}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-navy)] mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message", { required: "Message is required" })}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none resize-y"
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="px-6 py-3 bg-[var(--color-navy)] text-white font-semibold rounded-md hover:bg-[var(--color-navy-light)] transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}

import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle?: string;
  variant?: "full" | "compact";
  backgroundImage?: string;
}

export function Hero({ title, subtitle, variant = "full", backgroundImage }: HeroProps) {
  if (variant === "compact") {
    return (
      <section className="relative bg-[var(--color-navy)] text-white py-16 lg:py-20 overflow-hidden">
        {backgroundImage && (
          <>
            <img
              src={backgroundImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[var(--color-navy)]/80" />
          </>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-bold"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-slate-300 text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[var(--color-navy)] text-white overflow-hidden min-h-[28rem] lg:min-h-[32rem]">
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)]/60 via-[var(--color-navy)]/50 to-[var(--color-navy)]/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-light)] to-[var(--color-navy)] opacity-90" />
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-xl text-slate-200 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

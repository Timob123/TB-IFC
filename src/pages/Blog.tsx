import { Hero } from "@/components/sections/Hero";
import { IMAGES } from "@/content/images";

const PLACEHOLDER_POSTS = [
  { slug: "welcome", title: "Welcome to the IFC Finance Blog", date: "2024-01-15", excerpt: "Our blog will feature insights on financial planning, pensions, and market updates." },
  { slug: "pension-tips", title: "Top Tips for Pension Planning", date: "2024-01-10", excerpt: "Practical advice for anyone starting to think about their retirement." },
  { slug: "protection", title: "Why Protection Matters", date: "2024-01-05", excerpt: "Understanding the importance of income protection and life assurance." },
];

export function Blog() {
  return (
    <>
      <Hero title="Blog" subtitle="Insights and updates from IFC Finance" variant="compact" backgroundImage={IMAGES.forestPath} />
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {PLACEHOLDER_POSTS.map((post, i) => (
              <article
                key={post.slug}
                className="rounded-lg border border-slate-200 overflow-hidden hover:border-[var(--color-gold)]/30 transition-colors"
              >
                <div className="aspect-video bg-slate-200">
                  <img
                    src={[IMAGES.irishGreenField, IMAGES.dublinBridge, IMAGES.irishCliffs][i % 3]}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-navy)]">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--color-slate)] mt-2">{post.date}</p>
                <p className="text-[var(--color-slate)] mt-4">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

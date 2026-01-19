import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
};

export default function Card({
  title,
  description,
  href,
  comingSoon = false,
}: CardProps) {
  const content = (
    <div
      className={`
        rounded-xl border border-border bg-background p-6
        transition-transform
        ${comingSoon
          ? "opacity-60 cursor-not-allowed"
          : "hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgb(0,0,0)]"}
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        {comingSoon && (
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium">
            Coming soon
          </span>
        )}
      </div>

      <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
        {description}
      </p>
    </div>
  );

  if (comingSoon || !href) {
    return content;
  }

  return <Link href={href}>{content}</Link>;
}

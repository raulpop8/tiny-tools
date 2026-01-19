import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href: string;
};

export default function Card({ title, description, href }: CardProps) {
  return (
    <Link
      href={href}
      className="
        block rounded-xl border border-border bg-background p-6
        transition-transform
        hover:-translate-x-1 hover:-translate-y-1
        hover:shadow-[6px_6px_0_0_rgb(0,0,0)]
      "
    >
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      <p className="text-sm text-foreground/80 leading-relaxed">
        {description}
      </p>
    </Link>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`
        rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground
        transition
        hover:-translate-x-1 hover:-translate-y-1
        hover:shadow-[3px_3px_0_0_rgb(0,0,0)]
        ${className}
      `}
      {...props}
    />
  );
}

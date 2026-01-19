type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground ${className}`}
      {...props}
    />
  );
}

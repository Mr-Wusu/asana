import { cn } from "@/lib/utils";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";

}

export default function Button(props: ButtonProps) {
  const { onClick, className, children, disabled, type = "button" } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn("px-4 py-2 rounded bg-black text-white", className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
  
}

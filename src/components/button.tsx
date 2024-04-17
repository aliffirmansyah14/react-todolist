import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
   icon: IconType;
   className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ icon, className, ...props }: ButtonProps) => {
   const Icon = icon;
   return (
      <button
         className={twMerge(
            "hover:bg-indigo-400 p-1 rounded transition-all",
            className
         )}
         {...props}
      >
         <Icon className="size-6 text-white" />
      </button>
   );
};

export default Button;

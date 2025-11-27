import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const delayApiCall = async (num: number = 1500) => {
  new Promise(resolve => setTimeout(resolve, num));
}


export const ErrorMessage = (message: string, bg: "red" | "blue" | "orange" = "red") => {
  return toast.error(message, {
    position: "top-right",
    duration: 4000,
    style: {
      backgroundColor: bg === 'red' ? "#dc2626" : bg === 'orange' ? "#ea580c" : "#dc2626",
      color: "#ffffff"
    }
  });
};


export const SuccessMessage = (message: string) => {
  return toast.success(message, {
    position: "top-right",
    duration: 4000,
    style: {
      backgroundColor: "#a9d926",
      color: 'white'
    }

  })
}
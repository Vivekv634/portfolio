import { aldrich } from "../fonts/aldrich-font";

export default function TextComponent({ children, className }) {
  return (
    <div
      className={`bg-white dark:text-zinc-300 dark:bg-zinc-900 border-2 border-zinc-900 rounded-lg w-fit h-fit relative after:content-[''] after:rounded-lg after:absolute after:w-width-inherit after:h-height-inherit after:bg-zinc-800 after:top-2 after:left-1 after:-z-10 hover:after:top-0 hover:after:left-0 after:transition-all ease-in-out p-2 px-4 ${aldrich.className} ${className}`}
    >
      {children}
    </div>
  );
}

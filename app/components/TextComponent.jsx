import { aldrich } from "../fonts/aldrich-font";

export default function TextComponent({ children, className }) {
  return (
    <div
      className={`bg-white text-black dark:text-neutral-300 dark:bg-neutral-900 border-2 border-neutral-900 rounded-lg w-fit h-fit relative after:content-[''] after:rounded-lg after:absolute after:w-width-inherit after:h-height-inherit after:bg-neutral-800 after:top-2 after:left-1 after:-z-10 hover:after:top-0 hover:after:left-0 after:transition-all ease-in-out p-2 px-4 ${aldrich.className} ${className}`}
    >
      {children}
    </div>
  );
}

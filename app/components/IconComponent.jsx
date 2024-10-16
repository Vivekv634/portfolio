import { aldrich } from "../fonts/aldrich-font";

export default function IconComponent({ children, className }) {
  return (
    <div
      className={`bg-white dark:bg-zinc-900 border-2 border-zinc-900 rounded-full w-fit h-fit relative after:content-[''] after:rounded-full after:absolute after:w-width-inherit after:h-height-inherit after:bg-zinc-800 after:top-1 after:left-1 after:-z-10 hover:after:top-0 hover:after:left-0 after:transition-all ease-in-out p-2 ${aldrich.className} ${className}`}
    >
      {children}
    </div>
  );
}

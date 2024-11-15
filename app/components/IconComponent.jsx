import { aldrich } from "../fonts/aldrich-font";

export default function IconComponent({ children, className, ...props }) {
  return (
    <div
      {...props}
      className={`bg-white cursor-pointer text-black dark:text-neutral-300 dark:bg-neutral-900 border-2 border-neutral-900 rounded-full w-fit h-fit relative after:content-[''] after:rounded-full after:absolute after:w-width-inherit after:h-height-inherit after:bg-neutral-800 after:top-1 after:left-1 after:-z-10 hover:after:top-0 hover:after:left-0 after:transition-all ease-in-out p-2 ${aldrich.className} ${className}`}
    >
      {children}
    </div>
  );
}

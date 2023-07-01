import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
    //The cool part about twMerge is that we can set default css style and use className to pass in more css
      className={twMerge(`
         bg-neutral-900
         rounded-lg
         h-fit
         w-full
        `,
         className
        
        )}
    >
      {children}
    </div>
  );
};

export default Box;

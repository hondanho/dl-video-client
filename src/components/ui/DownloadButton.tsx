import { cn } from "@/utils";

export interface DownloadButtonProps extends React.ComponentProps<"button"> {
  isLoading: boolean;
  btnText: string;
  btnLoadingText: string;
}

const DownloadButton = (props: DownloadButtonProps) => {
  const { isLoading, className, btnText, btnLoadingText, ...buttonProps } =
    props;
  return (
    <button
      disabled={isLoading}
      {...buttonProps}
      className={cn(
        "flex items-center justify-center gap-2 rounded p-3 font-bold shadow-md",
        "h-[58px] w-full md:w-[150px]",
        "bg-secondary text-white",
        "transition-colors duration-200 ease-in-out",
        {
          "hover:bg-green-500": !isLoading,
          "cursor-not-allowed": isLoading,
        },
        className
      )}
    >
      {isLoading ? (
        <>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="animate-spin text-xl"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"></path>
          </svg>
          <span aria-hidden="true">{btnLoadingText}</span>
        </>
      ) : (
        <>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-xl"
            aria-hidden="true"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
          </svg>
          <span aria-hidden="true">{btnText}</span>
        </>
      )}
    </button>
  );
};

export default DownloadButton;

import { cn } from "@/utils";

export interface InputFieldProps extends React.ComponentProps<"input"> {
  isLoading: boolean;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  clearBtnProps?: React.HTMLAttributes<HTMLButtonElement>;
  handleClear?: () => void;
}

const InputField = (props: InputFieldProps) => {
  const {
    isLoading,
    containerProps,
    clearBtnProps,
    handleClear,
    ...inputProps
  } = props;
  return (
    <div
      {...containerProps}
      className={cn("relative h-[48px] w-full", containerProps?.className)}
    >
      <label htmlFor={inputProps.id} className="sr-only">
        {inputProps["aria-label"]}
      </label>
      <input disabled={isLoading} {...inputProps} />
      {handleClear && inputProps.value && !isLoading && (
        <div className="absolute inset-y-0 right-0 flex items-center px-2">
          <button
            type="button"
            aria-label="Clear URL input"
            onClick={handleClear}
            {...clearBtnProps}
            className={cn(
              "flex items-center rounded bg-gray-500/80 p-2 text-white",
              clearBtnProps?.className
            )}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
            <span className="text-sm font-light">Clear</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default InputField;

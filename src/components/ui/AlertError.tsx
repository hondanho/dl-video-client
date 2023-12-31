interface AlertErrorProps {
  errorMsg: string;
  handleReset: () => void;
}

const AlertError = (props: AlertErrorProps) => {
  const { errorMsg, handleReset } = props;
  return (
    <div className="mb-2 w-full">
      {!!errorMsg && (
        <div
          role="alert"
          aria-label="Alert"
          className="flex items-center justify-between border-l-4 border-red-500 bg-red-50 p-2"
        >
          <div className="flex items-center gap-1 text-red-500">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="hidden text-2xl sm:block"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
              <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
            </svg>
            <span className="text-sm  md:text-base">{errorMsg}</span>
          </div>
          <button
            aria-label="Close alert"
            onClick={handleReset}
            className="hidden text-sm text-red-500 sm:block md:text-base"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              fillRule="evenodd"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default AlertError;

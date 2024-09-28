import { useEffect } from "react";

const sizeClassNames = {
  small: "md:w-[472px]",
  full: "w-full h-screen",
};

export const Modal: React.FC<Modal> = ({
  isOpen,
  children,
  size = "small",
  handleClose,
  isSuccessModal,
  title,
}) => {
  const modalClassName = `max-width m-2 md:m-0 px-8 py-6 relative z-[2500] w-full rounded-lg bg-[white]`;

  const sizeClassName = sizeClassNames[size];
  const classNames = `${modalClassName} ${sizeClassName}`;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.classList.contains("ohw-modal") ||
        target.classList.contains("close")
      ) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClose]);

  return (
    isOpen && (
      <div
        data-testid="modal-click-outside"
        className="ohw-modal fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center  justify-center bg-[rgba(76,76,76,0.40)] backdrop-blur-[2px]"
      >
        <div className={`${classNames} grid `}>
          <h2 className="text-green-700 font-medium text-xl text-center">
            {title}
          </h2>

          <div className={`w-full flex flex-col items-center justify-center`}>
            {isSuccessModal && (
              <img src="/lottie.gif" alt="success" width={170} height={136} />
            )}
          </div>
          <div
            data-testid="modal-content"
            className={`${isSuccessModal ? "text-center" : "text-left"} py-4`}
          >
            {children}
          </div>
        </div>
      </div>
    )
  );
};

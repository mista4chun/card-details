function Button({ children, className, onClick }) {
  return (
    <button
      className={`rounded-md bg-VeryDarkViolet p-3 font-space text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

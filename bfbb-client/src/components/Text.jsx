const Text = ({ children, className }) => {
  return (
    <p className={`text-white text-lg md:text-2xl ${className ? className : ''}`}>{children}</p>
  );
};

export { Text }

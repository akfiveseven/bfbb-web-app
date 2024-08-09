const Header = ({ label, className }) => {
  return (
    <h1 
      className={`font-bob text-2xl text-white md:text-4xl 
      ${className ? className : ''}`}
    >
        {label}
    </h1>
  );
};


const Text = ({ children, className }) => {
  return (
    <p 
      className={`text-white text-lg md:text-2xl 
      ${className ? className : ''}`}
    >
      {children}
    </p>
  );
};

export { Header, Text }

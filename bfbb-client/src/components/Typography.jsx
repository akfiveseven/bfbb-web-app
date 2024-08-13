const Header = ({ label, className }) => {
  return (
    <h1
      className={`font-bob text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
      ${className ? className : ''}`}
    >
      {label}
    </h1>
  );
};


const Text = ({ children, className }) => {
  return (
    <p
      className={`text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl ${className ? className : ''}`}
    // className={`text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:text-5xl ${className ? className : ''}`}
    >
      {children}
    </p>
  );
};

const LineBreak = ({ className }) => {
  return <br className={`${className ? className : ''}`} />
};

export { Header, Text, LineBreak }

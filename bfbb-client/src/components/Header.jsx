const Header = ({ label, className }) => {
  return (
    <h1 className={`font-bob text-2xl text-white md:text-4xl ${className ? className : ''}`}>{label}</h1>
  );
};

export { Header }

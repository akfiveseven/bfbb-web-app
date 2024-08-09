const Footer = ({ children, className }) => {
  return (
    <div className={`mx-12 mb-8 md:mx-24 ${className ? className : ''}`}>
      {children}
    </div>
  );
};

export { Footer }

const PageContent = ({ children, className }) => {
  return (
    <div
      className={`flex min-h-[calc(100vh-5rem)] 
      ${className ? className : ''}`}
    >

      <div className={`m-6 md:m-12 `}>
        {children}
      </div>

    </div>
  );
};

export { PageContent }

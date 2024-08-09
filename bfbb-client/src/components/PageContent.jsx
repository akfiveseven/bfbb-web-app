const PageContent = ({ children, className }) => {
  return (
    <div 
      className={`flex min-h-[calc(100vh-5rem)] 
      ${className ? className : ''}`}
    >

      <div className={`m-12 md:m-24 `}>
        {children}
      </div>

    </div>
  );
};

export { PageContent }

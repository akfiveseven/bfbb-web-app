const PageContent = ({ children, className }) => {


  return (
    <div
      className={`flex min-h-[calc(100vh-5rem)] ${className ? className : ''}`}
    >

      <div className={`text-white my-0 md:my-8 mx-auto`}>
        {children}
      </div>

    </div>
  );
};

export { PageContent }

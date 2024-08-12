const Container = ({ children, className }) => {
  return (
    <div className={`bg-transparent lg:bg-[#010048]/70 p-6 md:p-12 rounded-2xl md:min-w-[48rem] md:max-w-[64rem] 2xl:max-w-[96rem] ${className ? className : ''}`}>
      {children}
    </div>
  );
};

export { Container }

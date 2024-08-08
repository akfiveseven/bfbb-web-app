const PageContent = ({ children, className }) => {
    return(
        <div className={`min-h-[calc(100vh-5rem)] ${className ? className : ''}`}>
            { children }
        </div>
    );
};

export { PageContent }
const Table = ({ children, className }) => {
  return (
    <div className='text-white my-table-container'>
      <table className={`my-table ${className ? className : ''}`}>
        {children}
      </table>
    </div>
  );
};

const TableHead = ({ children, className }) => {
  return (
    <thead className={`${className ? className : ''}`}>{children}</thead>
  );
};

const TableBody = ({ children, className }) => {
  return (
    <tbody className={`${className ? className : ''}`}>{children}</tbody>
  );
};

const TableRow = ({ children, className }) => {
  return (
    <tr className={`${className ? className : ''}`}>{children}</tr>
  );
};

const TableHeader = ({ children, className }) => {
  return (
    <th className={`font-bob ${className ? className : ''}`}>{children}</th>
  );
};

const TableCell = ({ children, className }) => {
  return (
    <td className={`${className ? className : ''}`}>{children}</td>
  );
};



export { Table, TableHead, TableBody, TableRow, TableHeader, TableCell }

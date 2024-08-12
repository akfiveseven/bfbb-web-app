import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../components/DataTable';
import { Container } from "../components/Container";

const Strats = () => {

  const data = {
    "name": "Hammer Skip",
    "level": "JellyFish Fields"
  };

  return (
    <div className=''>
      <Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Hello</TableHeader>
              <TableHeader>Hi</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Bye</TableCell>
              <TableCell>See ya</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Container>


      {/* <div className='text-white'> */}
      {/*   <Container className='mx-auto p-0 md:w-[70%] md:overflow-x-auto md:mx-auto md:my-0'> */}
      {/*     <table className='w-full border-collapse mx-[20px] my-0 text-[18px] text-left border-[8px]'> */}
      {/*       <thead> */}
      {/*         <TableHeader label='Name' /> */}
      {/*         <TableHeader label='About' /> */}
      {/*       </thead> */}
      {/*       <tbody> */}
      {/*         <td>Hello</td> */}
      {/*         <td>Hi</td> */}
      {/*       </tbody> */}
      {/*     </table> */}
      {/*   </Container> */}
      {/* </div> */}
    </div>
  );
};

export { Strats }

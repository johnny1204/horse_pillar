import { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RaceContentType } from '@/types/Race';

export const RaceContent: FC<{ props: RaceContentType[] }> = ({ props }) => (
  <TableContainer component={Paper}>
    <Table sx={{ width: '100%' }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>馬番</TableCell>
          <TableCell></TableCell>
          <TableCell>軸</TableCell>
          <TableCell>相手</TableCell>
          <TableCell>穴</TableCell>
          <TableCell>勝利期待値</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.map((row) => (
          <TableRow
            key={row.num}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.num}
            </TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.mark}</TableCell>
            <TableCell>{row.aite}</TableCell>
            <TableCell>{row.ana}</TableCell>
            <TableCell>{row.win}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

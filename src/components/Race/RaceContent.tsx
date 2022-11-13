import { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const RaceContent: FC = () => {
  const createData = (
    num: string,
    name: string,
    mark: null | string,
    fat: null | string,
    carbs: null | string,
    protein: number
  ) => {
    return { num, name, mark, fat, carbs, protein };
  };

  const rows = [
    createData('1', '馬名1', null, null, null, 33),
    createData('2', '馬名2', '△', null, null, 85),
    createData('3', '馬名3', null, null, null, 66),
    createData('4', '馬名4', null, null, null, 45),
    createData('5', '馬名5', '◎', null, null, 70),
    createData('6', '馬名6', null, null, null, 13),
    createData('7', '馬名7', '◯', null, null, 11),
    createData('8', '馬名8', null, null, null, 58),
    createData('9', '馬名9', '▲', null, null, 36),
    createData('10', '馬名10', null, null, null, 1),
    createData('11', '馬名11', null, null, null, 10)
  ];

  return (
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
          {rows.map((row) => (
            <TableRow
              key={row.num}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.num}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.mark}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

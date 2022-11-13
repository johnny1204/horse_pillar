import { Link, Typography } from '@material-ui/core';
import { FC } from 'react';

type PropTypes = {
  linkPath: string;
  label: string;
  underline?: 'none' | 'hover' | 'always';
};

export const RacePageLink: FC<PropTypes> = ({ linkPath, label, underline }) => (
  <Link href={linkPath} underline={underline}>
    <Typography variant="h6">{label}</Typography>
  </Link>
);

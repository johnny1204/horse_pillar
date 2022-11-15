import { RacePageLinkTypes } from '@/types/Race';
import { Link, Typography } from '@material-ui/core';
import { FC } from 'react';

export const RacePageLink: FC<RacePageLinkTypes> = ({ linkPath, label, underline }) => (
  <Link href={linkPath} underline={underline}>
    <Typography variant="h6">{label}</Typography>
  </Link>
);

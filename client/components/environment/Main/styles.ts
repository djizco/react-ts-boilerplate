import { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const styles = (theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(6.5),
    minHeight: 'calc(100vh - 101px)',
  },
}) as const;

export default styles;

export const useStyles = makeStyles()(styles);

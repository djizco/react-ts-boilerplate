import { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const styles = (theme: Theme) => ({
  button: {
    margin: theme.spacing(1.25),
  },
}) as const;

export default styles;

export const useStyles = makeStyles()(styles);

import { tokens } from './tokens';
import { alpha, getContrastRatio } from '@mui/material/styles';

const { cc } = tokens;

export const violetButtonOverrides = {
  outlined: {
    '&.MuiButton-outlinedViolet': {
      color: cc.ref.palette.violet['40'],
      border: `1px solid ${cc.ref.palette.violet['40']}`,
      backgroundColor: cc.ref.palette.violet['10'],
    },
    '&.MuiButton-outlinedViolet:hover': {
      backgroundColor: alpha(cc.ref.palette.violet['30'], 0.4),
      color: cc.ref.palette.violet['40'],
    },
    '&.MuiButton-outlinedViolet:active': {
      color: cc.ref.palette.violet['40'],
      backgroundColor: alpha(cc.ref.palette.violet['40'], 0.2),
    },
    '&.MuiButton-outlinedViolet.Mui-disabled': {
      color: cc.sem.colour.text.disabled,
      border: `1px solid ${cc.sem.colour.action.disabled}`,
      backgroundColor: 'transparent',
    },
  },
  contained: {
    '&.MuiButton-containedViolet': {
      backgroundColor: cc.ref.palette.violet['40'],
      color: getContrastRatio(cc.ref.palette.violet['40'], '#fff') > 4.5 ? '#fff' : '#111',
    },
    '&.MuiButton-containedViolet:hover': {
      backgroundColor: alpha(cc.ref.palette.violet['30'], 0.5),
    },
    '&.MuiButton-containedViolet:active': {
      backgroundColor: alpha(cc.ref.palette.violet['40'], 0.9),
    },
    '&.MuiButton-containedViolet.Mui-disabled': {
      backgroundColor: cc.sem.colour.action.disabled,
      color: cc.sem.colour.text.disabled,
    },
  },
};

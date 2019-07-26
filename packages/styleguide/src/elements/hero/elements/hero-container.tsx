import { styled } from '@material-ui/core/styles';

export const HeroContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@supports (display: grid)': {
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: '290px 1fr',
      gridTemplateRows: 'auto auto',
      gridColumnGap: '50px',
      alignItems: 'start',
    },
  },
}));

export default HeroContainer;

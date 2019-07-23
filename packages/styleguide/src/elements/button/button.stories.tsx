import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button';
import {
  ButtonGroup,
  Grid,
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(3),
    },
    input: {
      display: 'none',
    },
  }),
);

const SpacedButtons = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div>
      <div>
        <Button className={classes.button} variant="contained">
          Default
        </Button>
      </div>
      <div>
        <Button className={classes.button} variant="contained" color="primary">
          Primary
        </Button>
      </div>
      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          Secondary
        </Button>
      </div>
      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          disabled
        >
          Disabled
        </Button>
      </div>
      <div>
        <Button
          className={classes.button}
          variant="contained"
          href="#contained-buttons"
        >
          Link
        </Button>
      </div>
    </div>
  );
};

storiesOf('Elements/Button', module)
  .add('contained', () => <SpacedButtons />)
  .add('text', () => (
    <div>
      <div>
        <Button variant="text">Default</Button>
      </div>
      <div>
        <Button variant="text" color="primary">
          Primary
        </Button>
      </div>
      <div>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
      </div>
      <div>
        <Button variant="text" color="secondary" disabled>
          Disabled
        </Button>
      </div>
      <div>
        <Button variant="text" href="#contained-buttons">
          Link
        </Button>
      </div>
    </div>
  ))
  .add('outlined', () => (
    <div>
      <div>
        <Button variant="outlined">Default</Button>
      </div>
      <div>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="secondary" disabled>
          Disabled
        </Button>
      </div>
      <div>
        <Button variant="outlined" href="#contained-buttons">
          Link
        </Button>
      </div>
    </div>
  ))
  .add('grouped', () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <ButtonGroup size="small" aria-label="Small outlined button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              color="primary"
              aria-label="Outlined primary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              color="secondary"
              size="large"
              aria-label="Large outlined secondary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <ButtonGroup
              variant="contained"
              size="small"
              aria-label="Small contained button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="Full-width contained primary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <ButtonGroup
              variant="contained"
              color="secondary"
              size="large"
              aria-label="Large contained secondary button group"
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ButtonGroup fullWidth aria-label="Full width outlined button group">
          <Button>Full</Button>
          <Button>width</Button>
          <Button>ButtonGroup</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  ))
  .add('sizes', () => (
    <div>
      <div>
        <Button size="small" variant="contained">
          Small
        </Button>
      </div>
      <div>
        <Button size="medium" variant="contained">
          Medium
        </Button>
      </div>
      <div>
        <Button size="large" variant="contained">
          Large
        </Button>
      </div>
    </div>
  ));

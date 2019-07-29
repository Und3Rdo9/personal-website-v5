import React from 'react';
import {
  Card,
  makeStyles,
  createStyles,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  useTheme,
  Theme,
} from '@material-ui/core';

export interface ArticleCardProps {
  title: string;
  summary: string;
  image: {
    url: string;
    alt: string;
  };
  imageComponent: React.ElementType;
  linkComponent: React.ElementType;
  url: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.contrastText,
    },
    media: {
      height: '190px',
    },
    content: {
      padding: theme.spacing(2),
    },
    actions: {
      padding: theme.spacing(2),
    },
    title: {
      marginBottom: theme.spacing(1.5),
    },
  }),
);

export const ArticleCard = ({
  title,
  summary,
  image: { url: imageUrl, alt: imageAlt },
  url,
  imageComponent,
  linkComponent,
}: ArticleCardProps) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Card className={classes.root}>
      <CardActionArea component={linkComponent} to={url}>
        <CardMedia
          image={imageUrl}
          title={title}
          component={imageComponent}
          alt={imageAlt}
          className={classes.media}
        />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h4"
            component="h3"
            className={classes.title}
          >
            {title}
          </Typography>

          <Typography variant="body2" component="p">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button
          component={linkComponent}
          to={url}
          size="small"
          color="secondary"
        >
          Discover more
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;

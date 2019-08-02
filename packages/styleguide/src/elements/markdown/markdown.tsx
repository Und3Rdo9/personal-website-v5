/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
// import { withStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
export interface MarkdownProps {
  linkComponent: React.ElementType;
  imageComponent: React.ElementType;
  md: string;
}

// const styles = (theme: Theme) => ({
//   listItem: {
//     marginTop: theme.spacing(1),
//   },
// });

// const ListItem = () =>
//   withStyles(styles)(({ classes }: any) => (
//     <li className={classes.listItem}>
//       <Typography component="span" />
//     </li>
//   ));

const getOptions = (
  linkComponent: React.ElementType,
  imageComponent: React.ElementType,
) => ({
  overrides: {
    h1: {
      component: (props: any) => (
        <Typography gutterBottom variant="h1" {...props} />
      ),
    },
    h2: {
      component: (props: any) => (
        <Typography gutterBottom variant="h2" {...props} />
      ),
    },
    h3: {
      component: (props: any) => <Typography variant="h3" {...props} />,
    },
    h4: {
      component: (props: any) => <Typography variant="h4" {...props} />,
    },
    h5: {
      component: (props: any) => <Typography variant="h5" {...props} />,
    },
    h6: {
      component: (props: any) => <Typography variant="h6" {...props} />,
    },
    p: {
      component: (props: any) => (
        <Typography gutterBottom paragraph {...props} />
      ),
    },
    a: { component: linkComponent },
    img: { component: imageComponent },
  },
});

export default function Markdown({
  md,
  linkComponent,
  imageComponent,
  ...rest
}: MarkdownProps) {
  return (
    <ReactMarkdown
      options={getOptions(linkComponent, imageComponent)}
      {...rest}
    >
      {md}
    </ReactMarkdown>
  );
}

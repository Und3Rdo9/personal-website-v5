# Personal website v5

Welcome to the repository for my personal website v5.
This monorepo project uses React, TypeScript, Gatsby and Storybook.

## Getting started

This project uses Yarn workspaces and Lerna together. Yarn workspaces allows us to bootstrap and manage the dependencies of our different subrepositories or packages. To get started `yarn` in the root directory. This will install all dependencies of all package folders in `/packages`.

Once Yarn has successfully installed all dependencies, you can run `yarn develop` in the root directory to start working on all packages at the same time (this will run the develop command in each packages needed for development of this project).

To see the current structure of the workspaces/packages: run `yarn workspaces info` in the root directory.

## Publishing and versioning

We use Lerna for publishing our different packages to the appropriate location. More info once this feature has been developed.

## Linting & formatting

We use ESLint with plugins for TypeScript, React and Prettier support. For a good developer experience, it's useful to setup your editor to automatically run ESLint fix command whenever you save a file. If you open this project as a VSCode workspace, it will automatically configure this using the settings in `.vscode/settings.json`

Code formatting will happen automatically using prettier.

Linting and formatting can be customized by extending the base config in each individual package.

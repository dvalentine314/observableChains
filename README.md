# ObservableChains

This demo project showcases different ways to write observables where one is dependent on the other. Each sample is in its own component which is referenced by the main `app.component.html` file.

The primary focus of this effort is to consider the most readable and maintainable ways to write observables. I have included comments at the top of every example class (above the `@Component()` declaration) explaining the main difference from the previous example as well as some thoughts on the approach.

You may feel free to use the codebase as a playground for your own rxjs experiments.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Test Status:

[![Jasmine Tests](https://github.com/dvalentine314/observableChains/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/dvalentine314/observableChains/actions/workflows/node.js.yml)

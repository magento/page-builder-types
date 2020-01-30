# Magento 2 Page Builder TypeScript Definitions
This repository contains generated types for Magento Page Builder for usage within other Magento modules requiring access to Page Builder's types.

## Installation
```
yarn add --dev https://github.com/magento/page-builder-types.git
```
or
```
npm install --save-dev https://github.com/magento/page-builder-types.git
```

> If a module you desire isn't included yet please open an issue or pull request to this repository.

## Usage
You can import the modules using the standard TypeScript `import` syntax:
```js
import widgetInitializer from "Magento_PageBuilder/js/widget-initializer";
```

Then you're able to use the modules as you would in normal JavaScript:
```js
// Widget initializer
 widgetInitializer({some: 'config'});

```

When TypeScript compiles the .ts files to JavaScript it will maintain the module name in the require dependencies. Resulting in the actual libraries being imported in the browser.

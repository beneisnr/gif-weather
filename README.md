# Frontend Starterpack
\* includes [`image-webpack-loader`](https://www.npmjs.com/package/image-webpack-loader) for compression + optimization

## Environment
### npm & yarn
npm and yarn are package managers that allow us to easily include open source libraries in our projects. The command `npm install package-name` or `yarn add package-name` adds the dependency to our `package.json` file, then pulls the source code down into a folder called `node_modules` within our project, and we can then import the necessary modules.

While npm and yarn work similarly, we should only use one package manager per project as each generates files (`package.lock` and `yarn.lock` respectively).
### webpack
Webpack is a build tool that links/bundles all of the JavaScript (and possibly other) files used by the application. Webpack extracts all necessary (used) code from `src` and included libraries, and combines them into one file.

In addition to JavaScript, webpack can preprocess and bundle HTML, CSS/SCSS, images, etc., through various loaders (which can be found in npm) which allow for automatically optimized images, converting sass to css, transpiling es6 JavaScript into es5, etc.

### babel
Babel is used to transpile our JavaScript with es6 features into the es5 equivalent that is safer for most browsers. In this case, babel is used as a webpack loader (described above).
### eslint
eslint parses our JavaScript to enforce a set of style and syntax rules. In this case, eslint is used as a webpack loader (described above).

### sass
sass is a preprocessor style language that compiles into CSS but has many desirable features such as variables, imports, and operators. In this case, our sass is compiled into css by a webpack loader (described above). 
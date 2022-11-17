# Webpack Template:
webpack-template is a webpack configuration to create modern javascript web applications.

## Installation
This webpack starter kit can be installed in 2 ways.

1. Clone this repository and start working on the main branch.
2. Using degit.

### Commands while cloning the repository and working on the main branch:
``` git clone https://github.com/ankit9015/webpack-template.git
cd webpack-template
npm install
```

### Commands while using degit

``` 
npm install -g degit
```

Follow the below instructions to use this starter kit:

``` degit ankit9015/webpack-template#main my-app-name
cd my-app-name
npm install

# to start your application in localhost:3000
using npm --> npm run start
using yarn --> yarn start
```

## List of Dependencies
This application contains the following dependencies provided by wepack.

- Babel
- CSS support
- Assets (images)
- Code Splitting
- Caching
- HTML optimisation

## Development Mode
- Run using `npm start` which will create a live server with hot-reload.
## Production mode
- Run `npm run build`, this'll combine and create a `dist` with the resulted code for deployment.

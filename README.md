# Getting Started with Vite

This project was bootstrapped with [Vite](https://vitejs.dev/).

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [Deploying a Static Site](https://vitejs.dev/guide/static-deploy.html) for more information.

### `yarn preview`

It is important to note that vite preview is intended for previewing the build locally and not meant as a production server.

The vite preview command will boot up local static web server that serves the files from dist at http://localhost:5000. It's an easy way to check if the production build looks OK in your local environment.

You may configure the port of the server py passing `--port` flag as an argument.

```json
{
  "scripts": {
    "serve": "vite preview --port 8080"
  }
}
```

Now the `preview` method will launch the server at http://localhost:8080.

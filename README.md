# my-world

This is a Hiber3D Development Kit (HDK) project created using [create-hdk](https://www.npmjs.com/package/create-hdk)

Please see [HDK Docs](https://developer.hiber3d.com/docs/) for full documentation.

Install with this command:

```bash bash copy
npm install
```

Then run with:

```bash bash copy
npm run dev
```

Upgrade to the latest version of HDK with:

```bash bash copy
npx update
```

and enjoy the hiber experience at
(<http://localhost:5173/>)

Happy coding!

## Adding local assets

To add assets to your project, follow these steps:

- Place any `.glb` file into the `./assets` directory.
- When the `dev` script is running, the Importer tool will automatically convert the `.glb` file into Hiber3D-compatible formats and place them in a `./build` folder. The processed assets will then be served via the local development server.

# Pokemon App

This project is a simple front-end application, using React and GraphQL using the public [Pokemon GraphQL api](https://graphql-pokemon2.vercel.app)

## Features

- Displays Pokemon details e.g. mage, numeric ID (001 - 151), fast and slow attacks and resistances / weaknesses.
- Navigation between different pokemon using previous or next buttons.

## Reflection

Familiarised myself with the GraphQL api by testing the api in the playground before starting. I started the process by using the `create-react-app` boilerplate, then adding `scss` for styling.

One of the main challenges i ran into was trying to navigate from one pokemon to another pokemon by using the `ID` which was in the requirement but by testing the api beforehand i found out the `ID` was not in the format of `001` but infact this format `UG9rZW1vbjowMDE=`.

Also I couldn't pass `number` as request parameter into the graphql query to retrieve the data for that pokemon because it only required `$first` for the `Fetch Pokémons` operation. I then tested the `Fetch single Pokémon` operation and the request parameters that had were `id` and `name` so i couldnt use that either.

So I opted to store the all 151 pokemons in the app state and filter the pokemons by the pokemon number which would be stored also in the app state. The pokemon number would increment or decrement based on the two buttons you click which are `previous` or `next`.

## Improvements

- Store the colors of each type and use that for the different types e.g. water will be blue, fire type will be red/orange etc.
- Migrate from scss to styled components
- Make it responsive
- Testing react component
## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

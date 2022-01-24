# Highlightr
### Minimalist Chrome extension that keeps track of your favorite videos' timestamps.

This project was created with TS, React + Redux (wrapped with [webext-redux](https://github.com/tshaddix/webext-redux) in order to sync across the extension's components and [chakra UI](https://github.com/chakra-ui/chakra-ui))

## Running

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Go to Chrome extensions page (chrome://extensions/), check the developer mode and load unpacked the `dev` folder from your project. 
You should see the extension added in your browser now. To test it, go to any Youtube page and click the button that appears next to the like button.
A menu should appear on the page

![Menu appearing](https://user-images.githubusercontent.com/14197491/150785750-ba964f81-0649-4dd6-be30-360f989df13c.png)


### `npm run build`

Builds the app for production to the `build` folder.\
Repeat the steps from the development mode, only with the `build` folder.

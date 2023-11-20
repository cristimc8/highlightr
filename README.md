# Highlightr
### Minimalist Chrome extension that keeps track of your favorite videos' timestamps.

You can download the latest stable version from [CWS](https://chromewebstore.google.com/detail/highlightr/menfkmihklgdfpbgikdddmiafmfllhmn?hl=en-GB)

This project was created with TS, React + Redux (wrapped with [webext-redux](https://github.com/tshaddix/webext-redux) in order to sync across the extension's components and [chakra UI](https://github.com/chakra-ui/chakra-ui))

## Running

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Go to Chrome extensions page (chrome://extensions/), check the developer mode and load unpacked the `dev` folder from your project. 
You should see the extension added in your browser now. To test it, go to any Youtube page and click the button that appears next to the like button.
A popup should appear on the page

![popup menu](https://github.com/cristimc8/highlightr/assets/14197491/51ce9a09-e715-48cb-aacd-b0a102645c2a)

After saving a highlight, you can revisit it by clicking the bookmark found on the popup itself.

![popup](https://github.com/cristimc8/highlightr/assets/14197491/e4a152c8-43df-4b48-8670-a0a7938777f2)


### `npm run build`

Builds the app for production to the `build` folder.\
Repeat the steps from the development mode, only with the `build` folder.

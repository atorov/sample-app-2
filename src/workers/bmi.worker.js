/* eslint no-restricted-globals: 1 */
/* eslint no-undef: 1 */

self.onmessage = (req) => {
    console.log('::: req.inputValue:', req.data.inputValue)

    const inputValue = req.data.inputValue
    const outputValue = inputValue ** 2

    setTimeout(
        () => self.postMessage({ outputValue }),
        1500,
    )
};

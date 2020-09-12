import Loader from './modules/Loader/index.js'

(async function () {
    const { rows, errors } = await Loader.load();
})();
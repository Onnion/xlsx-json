import Loader from './modules/Loader/index.js'
import Writer from './modules/Writer/index.js';

(async function () {
    const rows = await Loader.load();
    await Writer.write(rows);
})();
import { brotliCompress } from 'zlib';
import Converter from './modules/Converter/index.js';
import Loader from './modules/Loader/index.js'
import Writer from './modules/Writer/index.js';

(async function () {
    const rows = await Loader.load();
    const converted = await Converter.do(rows);
    await Writer.write(converted);
})();
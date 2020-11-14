// Reference: https://parceljs.org/api.html#bundler

const Bundler = require('parcel-bundler');
const Path = require('path');

// Single entrypoint file location:
const entryFiles = Path.join(__dirname, './src/index.html');

// Bundler options
const options = {
  outDir: './parcel/dist', // The out directory to put the build files in, defaults to dist
  outFile: 'index.html', // The name of the outputFile
  publicUrl: '/', // The url to serve on, defaults to '/'
  watch: true, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
  cache: true, // Enabled or disables caching, defaults to true
  cacheDir: './parcel/.cache', // The directory cache gets put in, defaults to .cache
  contentHash: false, // Disable content hash from being included on the filename
  minify: true, // Minify files, enabled if process.env.NODE_ENV === 'production'
  scopeHoist: true, // Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
  target: 'browser', // Browser/node/electron, defaults to browser
  logLevel: 3, // 5 = save everything to a file, 4 = like 3, but with timestamps and additionally log http requests to dev server, 3 = log info, warnings & errors, 2 = log warnings & errors, 1 = log errors, 0 = log nothing
  hmr: true, // Enable or disable HMR while watching
  hmrPort: 8885, // The port the HMR socket runs on, defaults to a random free port (0 in node.js resolves to a random free port)
  sourceMaps: true, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
  hmrHostname: '', // A hostname for hot module reload, default to ''
  detailedReport: true, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
  autoInstall: true, // Enable or disable auto install of missing dependencies found during bundling
};

const onBundled = (bundle) => {
  // bundler contains all assets and bundles, see documentation for details
  console.log('Bundled the dapp ...');

};

(async function() {
  const bundler = new Bundler(entryFiles, options);
  console.log('HELLO')
  bundler.on('bundled', onBundled);

  const bundle = await bundler.bundle();
  
  
  bundler.serve();
})();
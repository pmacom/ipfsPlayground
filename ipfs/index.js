const chokidar = require('chokidar');
const path = require('path');
const contentPath = path.join(__dirname, './content');

let needsRepublish = false;

const watcher = chokidar.watch(`${contentPath}/*`, {
  // ignored: /^\./,
  persistent: true,
  // usePolling: true,
  // interval: 3000,
});

const requestRePublish = (path) => {
  console.log(`Ready to republish. Reason: ${path}`);
  needsRepublish = true;
}

const rePublish = () => {
  console.log('Actually going to attempt to republish now');
  needsRepublish = false;
}

setInterval(() => {
  if(needsRepublish){
    rePublish();
  }
}, 3000)

watcher
  .on('add', requestRePublish)
  .on('change', requestRePublish)
  .on('unlink', requestRePublish)
  .on('error', function(error) {console.log('Error happened', error);})
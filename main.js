const { app, BrowserWindow } = require('electron');
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1250,
    height: 800,
    backgroundColor: '#2f2f2f'
  });
  win.loadURL(`file://${__dirname}/dist/electronapp/index.html`);
  win.on('closed', function () {
    win = null;
  });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin')
    app.quit();
});
app.on('activate', function () {
  if (win === null)
    createWindow();
});

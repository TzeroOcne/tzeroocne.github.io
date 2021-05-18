const path = require('path');

const {app, BrowserWindow} = require('electron');
function createWindow () {   
  // Create the browser window.     
  let win = new BrowserWindow({width: 800, height: 600});
       
  // and load the index.html of the app.
  // win.loadURL('http://localhost:3000/');
  win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
}
app.on('ready', createWindow)

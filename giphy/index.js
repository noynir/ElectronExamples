'use strict';

const electron = require('electron');
const ipcMain = electron.ipcMain;
const app= electron.app;
const downloader = require('./app/modules/downloader');

let mainWindow=null;

function createMainWindow(){
    mainWindow=new electron.BrowserWindow({
        width:800,
        height:600
    });

    mainWindow.loadURL(`file://${__dirname}/app/views/main.html`);
    mainWindow.on('closed',onClosed);

    ipcMain.on('saveImage',function(event,arg){
    console.log(arg);
    downloader(arg.imageUrl,arg.path).then(function(filename){
        console.log(filename + ' saved');
        event.sender.send('imageSaved',filename);
    });


});

}
function onClosed() {
    // dereference the window
    // for multiple windows store them in an array
    mainWindow = null;
}

app.on('ready', createMainWindow);


// Quit when all windows are closed.
app.on('window-all-closed',() => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createMainWindow();
  }
});



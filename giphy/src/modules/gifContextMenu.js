'use strict';

const remote = require('electron').remote;
const Menu = remote.Menu;
const MenuItem = remote.MenuItem;
const dialog = remote.dialog;
const clipboard = require('electron').clipboard;
const ipc =  require('electron').ipcRenderer;

ipc.on('imageSaved',(event,arg) => {

    let notification = new Notification('Download Complete', {
      body: arg + ' saved'
    });

    window.setTimeout(notification.close.bind(notification), 5000);
});
module.exports.show = (image) => {

    var menu = new Menu();
    menu.append(new MenuItem({ label: 'Copy Url',click:copyToClipboard }));
    menu.append(new MenuItem({ label: 'Download Image', click:download }));



    function copyToClipboard(){
        clipboard.writeText(image.url);
    }

    function download(){
       let filePath=dialog.showSaveDialog(remote.getCurrentWindow(),{ filters:[{ name: 'Images', extensions: ['gif'] }] });
       if(filePath){
        ipc.send('saveImage',{path:filePath, imageUrl:image.download_url });   
       }
       
    }
    
  
    menu.popup(remote.getCurrentWindow());
}



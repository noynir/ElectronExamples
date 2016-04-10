'use strict';

var remote = require('electron').remote;
var Menu = remote.Menu;
var MenuItem = remote.MenuItem;
var dialog = remote.dialog;
var clipboard = require('electron').clipboard;
var ipc = require('electron').ipcRenderer;

ipc.on('imageSaved', function (event, arg) {

    var notification = new Notification('Download Complete', {
        body: arg + ' saved'
    });

    window.setTimeout(notification.close.bind(notification), 5000);
});
module.exports.show = function (image) {

    var menu = new Menu();
    menu.append(new MenuItem({ label: 'Copy Url', click: copyToClipboard }));
    menu.append(new MenuItem({ label: 'Download Image', click: download }));

    function copyToClipboard() {
        clipboard.writeText(image.url);
    }

    function download() {
        var filePath = dialog.showSaveDialog(remote.getCurrentWindow(), { filters: [{ name: 'Images', extensions: ['gif'] }] });
        if (filePath) {
            ipc.send('saveImage', { path: filePath, imageUrl: image.download_url });
        }
    }

    menu.popup(remote.getCurrentWindow());
};
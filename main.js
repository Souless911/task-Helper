const path = require('path');
const {app,BrowserWindow} = require('electron');
const url=require('url');

let mainWindow;

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Task Helper",
    })
    mainWindow.loadURL(
        url.format({
            pathname:path.join(__dirname,'./renderer/index.html'),
            protocol:'file:',
            slashes:true
        })
        );
}

app.whenReady().then(()=>{
    createMainWindow();

    app.on('activate',()=>{
        if(BrowserWindow.getAllWindows().length ===0){
            createMainWindow()
        }
    })
})

app.on('window-all-closed',()=>{
    if(process.platform !=='darwin')
        app.quit();
})
const path = require('path');
const {app,BrowserWindow} = require('electron');
const url=require('url');

let mainWindow;

function createMainWindow() {
    const startUrl= url.format({
        pathname:path.join(__dirname,'./my-app/build/index.html'),
        protocol:'file',
    })
   
   
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Task Helper",
    })
     //opens devtools within browser
    mainWindow.webContents.openDevTools();


    mainWindow.loadURL(startUrl);
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
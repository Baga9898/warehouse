const { app, Menu, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    title: 'Warehouse',
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  });

  win.loadURL('http://localhost:3000');
//   win.loadFile('index.html');

  win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    const menuTemplate = [
        {
            label: 'options',
            submenu: [
                {role: 'reload'},
            ]
        },
    ]

    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})

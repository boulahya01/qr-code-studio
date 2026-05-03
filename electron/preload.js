const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  appVersion: '1.0.0',
  platform: process.platform,
})

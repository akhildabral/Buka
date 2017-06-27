const {app, Menu} = require('electron')

const template = [
  {
    label: 'File',
    submenu: [
      {label: 'Scan for PDF',
          submenu: [
          {label: 'Special Directories'},
          {label: 'Browse Folder...'},
          {label: 'Complete Scan'}
        ]
      },
      {label: 'exit'}
    ]
  },
  {
    label: 'Open',
    submenu: [
    ]
  },
  {
    label: 'Debug',
    submenu: [
      {role: 'reload'},
      {role: 'forcereload'},
      {role: 'toggledevtools'},
      {role: 'togglefullscreen'}
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About',
        click () { require('electron').shell.openExternal('https://github.com/oguzhaninan/Buka') }
      },
      {
        label: 'Github',
        click () { require('electron').shell.openExternal('https://github.com/oguzhaninan/Buka') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  })

  // Edit menu
  template[1].submenu.push(
    {type: 'separator'},
    {
      label: 'Speech',
      submenu: [
        {role: 'startspeaking'},
        {role: 'stopspeaking'}
      ]
    }
  )

  // Window menu
  template[3].submenu = [
    {role: 'close'},
    {role: 'minimize'},
    {role: 'zoom'},
    {type: 'separator'},
    {role: 'front'}
  ]
}

module.exports = Menu.buildFromTemplate(template)
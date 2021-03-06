import '@logseq/libs';
import { transformDate } from './lib'

const pluginName = ["logseq-days-plugin", "logseq-days-plugin"]

async function insertDate(dow) {
  const dayOfWeekDigit = new Date().getDay();
  
  if (dow <= dayOfWeekDigit) {
    dow += 7;
  }

  const difference = dow - dayOfWeekDigit;

  let date = new Date();
  date.setDate(date.getDate() + difference)

  const format = (await logseq.App.getUserConfigs()).preferredDateFormat

  logseq.App.insertAtEditingCursor('[[' + transformDate(date, format) + ']]')
}

const main = async () => {
  console.log(`Plugin: ${pluginName[1]} loaded`)
  
  logseq.Editor.registerSlashCommand('Monday', async (e) => {
    insertDate(1)
  })

  logseq.Editor.registerSlashCommand('Tuesday', async (e) => {
    insertDate(2)
  })

  logseq.Editor.registerSlashCommand('Wednesday', async (e) => {
    insertDate(3)
  })

  logseq.Editor.registerSlashCommand('Thursday', async (e) => {
    insertDate(4)
  })

  logseq.Editor.registerSlashCommand('Friday', async (e) => {
    insertDate(5)
  })

  logseq.Editor.registerSlashCommand('Saturday', async (e) => {
    insertDate(6)
  })

  logseq.Editor.registerSlashCommand('Sunday', async (e) => {
    insertDate(0)
  })
}

logseq.ready(main).catch(console.error);

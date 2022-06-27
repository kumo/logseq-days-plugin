import '@logseq/libs';
import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin';

const pluginName = ["{{% plugin-name %}}", "{{% plugin-title %}}"]
let settingsTemplate: SettingSchemaDesc[] = [  
  {
    key: "emoji",
    type: 'string',
    default: "⏱",
    title: "Note taking Emoji",
    description: "Emoji printed when transcribing video",
  }]

//Inputs 5 numbered blocks when called
async function insertSomeBlocks (e) {
  console.log('Open the calendar!')
  let numberArray = [1, 2, 3, 4, 5]
  for (const number in numberArray){
  logseq.App.showMsg("Function has been run")
  logseq.Editor.insertBlock(e.uuid, `This is block ${numberArray[number]}`, {sibling: true})}

  }
  

const main = async () => {
  console.log(`Plugin: ${pluginName[1]} loaded`)
  await logseq.useSettingsSchema(settingsTemplate)

  logseq.Editor.registerSlashCommand('insertBlocks', async (e) => {
    insertSomeBlocks(e)
  }
    
  )}

logseq.ready(main).catch(console.error);

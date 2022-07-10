const discord = require("discord.js")
const client =new discord.Client()
const talkedRecently = new Set();    



client.on("ready", () => {
  console.log("BOTI_RANYAI")
  client.user.setActivity("Send Link Robot UP , BOTI_RANYAI")
})



client.on("message", vex => { 
if(vex.content.includes("https://discord.gg/uUrxZEvC")){ 
    
    if (talkedRecently.has(vex.author.id)) {
      vex.author.send("Wait 1 minute before getting typing this again. - ");
    } else {

if(vex.channel.type === "r!"){ 
if(vex.author.id===client.user.id) return; 
vex.author.send("https://discord.gg/BmzN8ZvgQN")
let s2 = vex .content = vex.content.replace(/@(everyone)/, "🥰").replace(/@(here)/, "🥰");
let hama1 = client.channels.cache.get("995081431925657682")//id bashe reklam
RANYAI.send(`
ناردرا لە لایەن
<@${vex.author.id}> ` +`
سێرڤەرەکە
${s2}
          `)
  }

}}
  talkedRecently.add(vex.author.id);
        setTimeout(() => {
          talkedRecently.delete(vex.author.id);
        }, 60000);
  
  
})

const channelid = "848301704100577290"//id channele vc
client.on("ready", (r!join vc) => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join(r!join vc).then(connection => {
        console.log("Successfully connected.");
    }).catch(r! => {
        console.error(r!);
    });
});


client.login("OTk1NzU2MzAzMTM1ODA5NjU4.G6tn-Y.kL9YyG5Wf0GyOcG1S_aVilfMZIA44m2yc3MGK0")

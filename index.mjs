import note from "./data.json" assert { type: "json" };
import DomParser from "dom-parser";
import fs from 'fs-js'

console.log("-------------------------------" + "JSON File" + "-------------------------------");
note.note.map((item, index) => {
  console.log("-------------------------------note"+ index + 1 + "-------------------------------");
  for (const key in item) {
    console.log(`${key}:${item[key]}`);
}});

console.log("-------------------------------" + "XML File" + "-------------------------------");
const parser = new DomParser();

 fs.readFile ('data.xml', 'utf8', function (err, xml) {
  if (!err) {
    var dom = parser.parseFromString(xml, 'text/xml');
    const allNots = dom.getElementsByTagName("array")[0];
    var counter = 0;

    for (let i = 1; i < allNots.childNodes.length; i = i + 2) {
      counter++;
      console.log("-------------------------------" + allNots.childNodes[i].nodeName + " " + counter + "-------------------------------");

      for (let j = 1; j < allNots.childNodes[i].childNodes.length; j = j + 2) {
        console.log(`${allNots?.childNodes[i]?.childNodes[j]?.nodeName}: ${allNots?.childNodes[i]?.childNodes[j]?.textContent}`);
      }
    }
  }
});
console.log("hello1111");
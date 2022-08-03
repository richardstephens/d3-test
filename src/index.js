import * as d3 from "d3"

import {Tree} from "./d3-tree";
//import flare from "./graph.json";
/*let flare = {
    name: "flare",
    children: [
        {name: "A"}
    ]
};*/


let flare = {
    name: "a",
    children: [
        {name: "b", children:[{name:"d"}]},
        {name: "c", children:[{name:"d"}]},
    ]
}
let chart = Tree(flare, {
    label: d => d.name,
    title: (d, n) => `${n.ancestors().reverse().map(d => d.data.name).join(".")}`, // hover text
    link: (d, n) => `https://github.com/prefuse/Flare/${n.children ? "tree" : "blob"}/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}${n.children ? "" : ".as"}`,
    sort: (a, b) => d3.descending(a.height, b.height), // reduce link crossings
    tree: d3.cluster,
    width: 1152
})

let target = d3.select("#target");
target.node().appendChild(chart);
let rect = chart.getBoundingClientRect();

target.attr("width", rect.width*2);
target.attr("height", rect.height);
console.log("ok");

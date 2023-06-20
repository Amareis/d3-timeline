const exampleData = [
  {name: "DFX", date: "2011-11-10", amount: "4000000", amounttext: "$4M", group: "defi-hack"},
  {name: "FTX", date: "2011-11-12", amount: "450000000", amounttext: "$450M", group: "defi-hack"},
  {name: "Ankr", date: "2011-12-02", amount: "5000000", amounttext: "$5M", group: "defi-hack"},
  {name: "Lodestar Finance", date: "2011-12-10", amount: "6900000", amounttext: "$6.9M", group: "defi-hack"},
  {name: "ElasticSwap", date: "2011-12-13", amount: "854000", amounttext: "$854k", group: "defi-hack"},
  {name: "Raydium", date: "2011-12-16", amount: "4400000", amounttext: "$4.4M", group: "defi-hack"},
  {name: "Rubic", date: "2011-12-25", amount: "1410000", amounttext: "$1.41M", group: "defi-hack"},
  {name: "ROE Finance", date: "2012-01-11", amount: "80000", amounttext: "$80k", group: "defi-hack"},
  {name: "Midas Capital", date: "2012-01-17", amount: "660000", amounttext: "$660k", group: "defi-hack"},
  {name: "BonqDAO", date: "2012-02-01", amount: "120000000", amounttext: "$120M", group: "defi-hack"},
  {name: "Orion", date: "2012-02-02", amount: "3000000", amounttext: "$3M", group: "defi-hack"},
];

const parseDate = d3.timeParse("%Y-%m-%d");
exampleData.forEach(d => {
  d.date = parseDate(d.date);
});

let currentData = exampleData

function importCsv(file) {
  const reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = function (evt) {
    const data = csvJSON(evt.target.result)
    data.forEach(d => {
      d.amount = d.amount.replace(/\D/g, '');
    });
    currentData = data

    createChart(data)
  }
}

function csvJSON(csv){
  const lines = csv.split("\n");

  const result = [];
  const headers = lines[0].split(",").map(s => s.trim());

  for(let i=1; i<lines.length; i++){
    const obj = {};
    let currentline = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

    for(let j=0; j<headers.length; j++){
      let column = currentline[j]
      if (column && column.startsWith('"')) {
        column = column.replace(/\\"/g, '"')
        column = column.substring(1, column.length-1)
      }
      obj[headers[j]] = column.trim();
    }

    result.push(obj);

  }
  return result
}

let CircleMaxSizeSettings = 600;
let ChartHeightSettings = 1000;
let PaddingSettings = 10;
let forceYMinStrengthSettings = 20.0;
let forceYMaxStrengthSettings = 180;
let forceYRangeSettings = 1.0;
let forceXSettings = 2;
let forceCollideMultiplierSettings = 1;
let forceManyBodySettings = -1600;
let borderForceSettings = 0.01;
let forceXClampSettings = 8;
let constrainPositionSettings = 1000;
let simulationForceXStrengthSettings = 1;
let simulationForceYStrengthSettings = 0.1;
let simulationAlphaDecaySettings = 0.005;
let tickedForceXClampSettings = 0.1;
let tickedBorderForceSettings = 0.1;


function setInputValues() {
  document.getElementById("CircleMaxSize").value = CircleMaxSizeSettings;
  document.getElementById("ChartHeight").value = ChartHeightSettings;
  document.getElementById("Padding").value = PaddingSettings;
  document.getElementById("forceYMinStrength").value = forceYMinStrengthSettings;
  document.getElementById("forceYMaxStrength").value = forceYMaxStrengthSettings;
  document.getElementById("forceYRange").value = forceYRangeSettings;
  document.getElementById("forceX").value = forceXSettings;
  document.getElementById("forceCollideMultiplier").value = forceCollideMultiplierSettings;
  document.getElementById("forceManyBody").value = forceManyBodySettings;
  document.getElementById("borderForce").value = borderForceSettings;
  document.getElementById("forceXClamp").value = forceXClampSettings;
  document.getElementById("constrainPosition").value = constrainPositionSettings;
  document.getElementById("simulationForceXStrength").value = simulationForceXStrengthSettings;
  document.getElementById("simulationForceYStrength").value = simulationForceYStrengthSettings;
  document.getElementById("simulationAlphaDecay").value = simulationAlphaDecaySettings;
  document.getElementById("tickedForceXClamp").value = tickedForceXClampSettings;
  document.getElementById("tickedBorderForce").value = tickedBorderForceSettings;
}

setInputValues();



document.getElementById("CircleMaxSize").addEventListener("input", updateParameters);
document.getElementById("ChartHeight").addEventListener("input", updateParameters);
document.getElementById("Padding").addEventListener("input", updateParameters);
document.getElementById("forceYMinStrength").addEventListener("input", updateParameters);
document.getElementById("forceYMaxStrength").addEventListener("input", updateParameters);
document.getElementById("forceYRange").addEventListener("input", updateParameters);
document.getElementById("forceX").addEventListener("input", updateParameters);
document.getElementById("forceCollideMultiplier").addEventListener("input", updateParameters);
document.getElementById("forceManyBody").addEventListener("input", updateParameters);
document.getElementById("borderForce").addEventListener("input", updateParameters);
document.getElementById("forceXClamp").addEventListener("input", updateParameters);
document.getElementById("constrainPosition").addEventListener("input", updateParameters);
document.getElementById("simulationForceXStrength").addEventListener("input", updateParameters);
document.getElementById("simulationForceYStrength").addEventListener("input", updateParameters);
document.getElementById("simulationAlphaDecay").addEventListener("input", updateParameters);
document.getElementById("tickedForceXClamp").addEventListener("input", updateParameters);
document.getElementById("tickedBorderForce").addEventListener("input", updateParameters);

let simulation

function createChart(data) {
  simulation?.stop()

  data.forEach(d => {
    d.date = new Date(d.date);
    d.amount = +d.amount;
  });
  d3.select("#chart svg").remove();

  const xScale = d3.scaleTime()
    .domain([new Date(2011, 0, 1), new Date(2023, 11, 31)])
    .range([0, 23740]);

  const sizeScale = d3.scaleSqrt()
    .domain([2000, 2900000000])
    .range([2, CircleMaxSizeSettings]);

  const width = xScale(new Date(2023, 11, 31));
  const height = ChartHeightSettings;

  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const padding = PaddingSettings;
  data.forEach(d => {
    d.r = sizeScale(d.amount) / 2;
  });


  function eventsInRange(data, event, range) {
    const start = d3.timeMonth.offset(event.date, -range);
    const end = d3.timeMonth.offset(event.date, range);
    return data.filter(d => d.date >= start && d.date <= end).length;
  }

// V2 Вычисляет силу отталкивания на основе количества событий
  function forceStrength(event, range, minStrength, maxStrength) {
    const eventsCount = eventsInRange(data, event, range);
    return eventsCount > 10 ? minStrength : maxStrength - (eventsCount / 10) * (maxStrength - minStrength);
  }


  const minStrength = forceYMinStrengthSettings;
  const maxStrength = forceYMaxStrengthSettings;
  const range = forceYRangeSettings;

  const forceCollide = d3.forceCollide(d => sizeScale(d.amount) / 2 + forceCollideMultiplierSettings * forceStrength(d, range, minStrength, maxStrength));

  const forceManyBody = d3.forceManyBody().strength(d => forceManyBodySettings * sizeScale(d.amount) / 300);


  function borderForce(alpha) {
    data.forEach(d => {
      const forceStrength = borderForceSettings * sizeScale(d.amount);
      if (d.x < d.r + padding) {
        d.vx += (d.r + padding - d.x) * alpha * forceStrength;
      } else if (d.x > width - d.r - padding) {
        d.vx -= (d.x - (width - d.r - padding)) * alpha * forceStrength;
      }
      if (d.y < d.r + padding) {
        d.vy += (d.r + padding - d.y) * alpha * forceStrength;
      } else if (d.y > height - d.r - padding) {
        d.vy -= (d.y - (height - d.r - padding)) * alpha * forceStrength;
      }
    });
  }

  function forceXClamp(alpha) {
    data.forEach(d => {
      const targetX = xScale(d.date);
      d.vx += (targetX - d.x) * alpha * forceXClampSettings;
    });
  }

  simulation = d3.forceSimulation(data)
    .force("x", d3.forceX(d => xScale(d.date)).strength(simulationForceXStrengthSettings))
    .force("y", d3.forceY(d => height / 2).strength(simulationForceYStrengthSettings))
    .force("collide", forceCollide)
    .force("manyBody", forceManyBody)
    .alphaDecay(simulationAlphaDecaySettings)
    .on("tick", ticked);


  const xAxis = d3.axisBottom(xScale)
    .tickFormat(d3.timeFormat("%Y-%m"))
    .ticks(d3.timeMonth.every(1));

  svg.append("g")
    .attr("transform", `translate(0,${1000 - 20})`)
    .call(xAxis);

  const colorScale = d3.scaleOrdinal()
    .domain(["hack", "scam", "defi-hack"])
    .range(["#00FFF0", "#29313D", "#7E8BFF"]);

  const formatDate = d3.timeFormat("%b %d, %Y");

  const groups = svg.selectAll(false) // const circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("g")
    .attr("id", d => `${d.name}, ${d.amounttext}`)

  const circles = groups
    .append("circle")
    .attr("id", d => `${d.name}, ${d.amounttext}, ${formatDate(d.date)}`)
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", d => sizeScale(d.amount) / 2)
    .attr("fill", d => colorScale(d.group))
    .attr("stroke", "#fff")
    .attr("stroke-width", 0);

  const texts = groups
    .append("text")
    .each(function(d) {
      const diameter = sizeScale(d.amount);
      const fontSizeFirstLine = Math.max(diameter / 5.25, 6); // 6.25, 6
      const fontSizeSecondLine = Math.max(diameter / 12.5, 4);

      let colorFirstLine = "#000000";
      let colorSecondLine = "rgba(0, 0, 0, 0.5)";
      // let yFirstLine = d.y + fontSizeFirstLine / 3;
      // let ySecondLine = d.y + fontSizeSecondLine / 2 - fontSizeFirstLine;
      // let yFirstLine = d.y - fontSizeFirstLine / 4;
      // let ySecondLine = d.y + fontSizeFirstLine / 2 - fontSizeFirstLine / 4;
      let yFirstLine = d.y - fontSizeFirstLine * 0.2;
      let ySecondLine = d.y + fontSizeFirstLine / 2 - fontSizeFirstLine * 0.2;

      if (diameter < 50) {
        colorSecondLine = d3.color(colorScale(d.group)).copy({opacity: 0.5});  // colorScale(d.group);
        yFirstLine = d.y;
        ySecondLine = d.y + d.r + 3;
      }

      if (diameter < 20) {
        colorFirstLine = colorScale(d.group);
        colorSecondLine = d3.color(colorScale(d.group)).copy({opacity: 0.5});  // colorScale(d.group);
        yFirstLine = d.y - d.r - 40;
        ySecondLine = d.y + d.r + 30;
      }

      d3.select(this).append("tspan")
        .attr("x", d.x)
        .attr("y", yFirstLine + fontSizeFirstLine / 2) // добавляем половину размера шрифта
        .attr("font-family", "Inter")
        .attr("font-weight", "800")
        .attr("font-size", fontSizeFirstLine + "px")
        .attr("fill", colorFirstLine)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "baseline") // заменяем dominant-baseline на alignment-baseline
        .text(d.amounttext);

      d3.select(this).append("tspan")
        .attr("x", d.x)
        .attr("y", ySecondLine + fontSizeSecondLine / 2) // добавляем половину размера шрифта
        .attr("font-family", "Inter")
        .attr("font-weight", "500")
        .attr("font-size", fontSizeSecondLine + "px")
        .attr("fill", colorSecondLine)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "baseline") // заменяем dominant-baseline на alignment-baseline
        .text(d.name);
    });



  const lines = svg.selectAll("line")
    .data(data)
    .enter()
    .append("line")
    .attr("x1", d => d.x)
    .attr("y1", d => d.y)
    .attr("x2", d => xScale(d.date))
    .attr("y2", d => d.y)
    .attr("stroke", "#fff")
    .attr("stroke-width", 1);



  function ticked() {
    forceXClamp(tickedForceXClampSettings);
    borderForce(tickedBorderForceSettings);

    circles
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    texts.selectAll('tspan')
      .attr("x", d => d.x)
      .each(function(d, i) {
        const diameter = sizeScale(d.amount);
        const fontSizeFirstLine = Math.max(diameter / 6.25, 6);
        const fontSizeSecondLine = Math.max(diameter / 12.5, 4);

//  let yFirstLine = d.y;
//  let ySecondLine = d.y + fontSizeFirstLine;
//  let yFirstLine = d.y - fontSizeFirstLine / 4;
//  let ySecondLine = d.y + fontSizeFirstLine - fontSizeFirstLine / 4;
        let yFirstLine = d.y - fontSizeFirstLine * 0.2;
        let ySecondLine = d.y + fontSizeFirstLine - fontSizeFirstLine * 0.2;

        if (diameter < 50) {
          yFirstLine = d.y;
          ySecondLine = d.y + d.r + 6;
        }

        if (diameter < 20) {
          yFirstLine = d.y - d.r - 8;
          ySecondLine = d.y + d.r + 6;
        }

        const yPos = i === 0 ? yFirstLine + fontSizeFirstLine / 2 : ySecondLine + fontSizeSecondLine / 2; // добавляем половину размера шрифта
        d3.select(this).attr("y", yPos);
      });

    lines
      .attr("x1", d => d.x)
      .attr("y1", d => d.y)
      .attr("x2", d => xScale(d.date))
      .attr("y2", d => d.y);
  }
}




function updateParameters() {
  CircleMaxSizeSettings = parseFloat(document.getElementById("CircleMaxSize").value);
  ChartHeightSettings = parseFloat(document.getElementById("ChartHeight").value);
  PaddingSettings = parseFloat(document.getElementById("Padding").value);
  forceYMinStrengthSettings = parseFloat(document.getElementById("forceYMinStrength").value);
  forceYMaxStrengthSettings = parseFloat(document.getElementById("forceYMaxStrength").value);
  forceYRangeSettings = parseFloat(document.getElementById("forceYRange").value);
  forceXSettings = parseFloat(document.getElementById("forceX").value);
  forceCollideMultiplierSettings = parseFloat(document.getElementById("forceCollideMultiplier").value);
  forceManyBodySettings = parseFloat(document.getElementById("forceManyBody").value);
  borderForceSettings = parseFloat(document.getElementById("borderForce").value);
  forceXClampSettings = parseFloat(document.getElementById("forceXClamp").value);
  constrainPositionSettings = parseFloat(document.getElementById("constrainPosition").value);
  simulationForceXStrengthSettings = parseFloat(document.getElementById("simulationForceXStrength").value);
  simulationForceYStrengthSettings = parseFloat(document.getElementById("simulationForceYStrength").value);
  simulationAlphaDecaySettings = parseFloat(document.getElementById("simulationAlphaDecay").value);
  tickedForceXClampSettings = parseFloat(document.getElementById("tickedForceXClamp").value);
  tickedBorderForceSettings = parseFloat(document.getElementById("tickedBorderForce").value);

  createChart(currentData);
}

createChart(currentData);



function saveSvg(svgElement, fileName) {
  const serializer = new XMLSerializer();
  const source = '<?xml version="1.0" standalone="no"?>\r\n' + serializer.serializeToString(svgElement);
  const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.target = "_blank";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById("save-svg").addEventListener("click", () => {
  saveSvg(document.querySelector('#chart svg'), "chart.svg");
});



let table;
let min;
let max;

function preload(){
  table = loadTable("data/rain.csv", "csv", "header");
}

function setup() {
  createCanvas(400,400); // set up my canvas at 400x400
  
  print(table); 
  noLoop(); 
  
  max = table.getRow(1).get(1);
  min = table.getRow(1).get(1);
  
 for (let r = 0; r < table.getRowCount(); r++){
  for (let c = 1; c < table.getColumnCount(); c++){
    let value = table.getRow(r).get(c);      
    
    if(value < min){
      min = value;
    }
    if(value > max){
      max = value;
    }
  }
 }
  print(min,max);
}


function draw() {
  background(255); 

  let rowHeight = height/(table.getRowCount()-1);
  let columnWidth = width/(table.getColumnCount()-1);
  
  let x = 0; 
  let y = 0;

  for(let r = 1; r < table.getRowCount(); r++){
    for(let c = 1; c < table.getColumnCount(); c++){
 
    let value = table.getRow(r).get(c);
    //let fillColor = map(value, min, max, 200, 0);
   
    noStroke();
    fill(18, 66, 193); 
    rect(x,y,columnWidth,-value*(rowHeight*5)); 

    x += columnWidth;
  }
       y += rowHeight;
       x = 0

 }
}

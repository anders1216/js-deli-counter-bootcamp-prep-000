function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
}
var count = 1
function currentLine(line) {
  if (line.length === 0){return "The line is currently empty."
   
  }
  else {
     for (var i=0; i < line.length ; i++) {
       line.splice(i+1 ,1,` ${i}. ${line[i]}`)
    }
    return `The line is currently:${line}.`
  }
}
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
  if (line.length > 0){
    for (var i=0; i < line.length ; i++) {
      line.push(i+"."+line[i])
    }
    return `The line is currently:${line}.`
  }
  else {
    return "The line is currently empty."
  }
}
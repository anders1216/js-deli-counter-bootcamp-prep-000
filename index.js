function takeANumber(line) {
  line.push(n++);
  return `You are number ${line[line.length -1]} in line.`
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
  if (line.length === 0){
    return "The line is currently empty."
  }
  else {
     var array = []
     for (var i=0; i < line.length ; i++) {
       var n = i + 1;
       array.push(` ${n}. ${line[i]}`)
    }
    return `The line is currently:${array}`
  }
}
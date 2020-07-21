function buildsquarebracemap(code){
    temp_bracestack = []
    bracemap = {}
    code = code.split("")
    for (const [position,command] of code.entries()) {
        if (command === "["){temp_bracestack.push(position)}
        if (command === "]"){
            start = temp_bracestack.pop()
            bracemap[start] = position
            bracemap[position] = start
        }
    }
    return bracemap
}

function run_code(){
    var code = document.getElementById('MAWP').value
    document.getElementById('code-output').innerHTML = ''
    document.getElementById('code-output').innerHTML = code
    console.log(code)
    console.log(buildsquarebracemap(code))
    var char = ''
    var pos = 0
    var stack = [1]
    var top
    var sec
    var numbers = ['0','1','2','3','4','5','6','7','8','9']
    var output = ''
    while (true) {
        char = code.charAt(pos)
        console.log(char)
        //console.log(typeof char)
        if (numbers.includes(char)) {
            stack.push(parseInt(char))
        }
        else if (char == 'M') {
            top = stack.pop()
            sec = stack.pop()
            stack.push(top + sec)
        }
        else if (char == 'A') {
            top = stack.pop()
            sec = stack.pop()
            stack.push(Math.abs(top - sec))
        }
        else if (char == 'W') {
            top = stack.pop()
            sec = stack.pop()
            stack.push(top * sec)
        }
        else if (char == 'P') {
            top = stack.pop()
            sec = stack.pop()
            stack.push(Math.floor(top / sec))
        }
        else if (char == '%') {
            stack.pop()
        }
        else if (char == '.') {
            document.getElementById('code-output').innerHTML = output
            return 0
        }
        else if (char == '!') {
            var temp = stack.pop()
            stack.push(temp,temp)
        }
        else if (char == ':') {
            output += stack.pop()
        }
        else if (char == ';') {
            var temp = stack.pop()
            output += String.fromCharCode(temp)
        }
        pos += 1
        console.log(stack)
        if (pos == code.length) {
            return 1
        }
    }
}

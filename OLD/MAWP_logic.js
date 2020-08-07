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
    console.log(code)
    console.log(buildsquarebracemap(code))
    var char = ''
    var pos = 0
    var stack = [1]
    var top
    var sec
    var numbers = ['0','1','2','3','4','5','6','7','8','9']
    var output = ''
    const squarebracemap = buildsquarebracemap(code)
    while (true) {
        console.log(pos)
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
            console.log(output)
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
        else if (char == '?') {
            if (stack[stack.length - 1] != 0) {
                ++pos
            }
        }
        else if (char == '[') {
            if (stack[-1] == 0) {
                console.log(squarebracemap,squarebracemap[pos])
                pos = squarebracemap[pos]
            }
        }
        else if (char == ']') {
            if (stack[-1] != 0) {
                console.log(squarebracemap,squarebracemap[pos])
                pos = squarebracemap[pos]
            }
        }
        pos += 1
        console.log(stack)
        if (output.length > 2048*8) {
            document.getElementById('code-output').innerHTML = output + "\nOutput reached limit of 16kb and was truncated."
            return 0
        }
        if (pos == code.length) {
            return 1
        }
    }
}

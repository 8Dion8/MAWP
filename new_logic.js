function buildbracemap(code, char1, char2) {
    temp_bracestack = []
    bracemap = {}
    code = code.split("")
    for (const [position, command] of code.entries()) {
        if (command === char1) { temp_bracestack.push(position) }
        if (command === char2) {
            start = temp_bracestack.pop()
            bracemap[start] = position
            bracemap[position] = start
        }
    }
    return bracemap
}

function debug_stack(stack, char, pos) {
    var current = document.getElementById('stack-debug').innerHTML
    document.getElementById('stack-debug').innerHTML = current.toString() + "<br>" + char.toString() + " : " + pos.toString() + " : [" + stack.toString() + "]"
}

function debug_code() {
    var t0 = performance.now()
    const code = document.getElementById('MAWP').value
    const input = document.getElementById('input').value
    document.getElementById('code-output').innerHTML = ''
    document.getElementById('stack-debug').innerHTML = 'chr:pos:stack'
        //
        //
    var char = ''
    var pos = 0
    var stack = [1]
    var top
    var sec
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var output = ''
    const squarebracemap = buildbracemap(code, "[", "]")
    const roundbracemap = buildbracemap(code, "(", ")")
    const longcondbracemap = buildbracemap(code, "<", ">")
    const invlongcondbracemap = buildbracemap(code, "{", "}")
    while (true) {
        char = code.charAt(pos)
        switch (code.charAt(pos)) {
            case '1':
                stack.push(1)
                break;
            case '2':
                stack.push(2)
                break;
            case '3':
                stack.push(3)
                break;
            case '4':
                stack.push(4)
                break;
            case '5':
                stack.push(5)
                break;
            case '6':
                stack.push(6)
                break;
            case '7':
                stack.push(7)
                break;
            case '8':
                stack.push(8)
                break;
            case '9':
                stack.push(9)
                break;
            case '0':
                stack.push(0)
                break;
            case 'M':
                top = stack.pop()
                sec = stack.pop()
                stack.push(top + sec)
                break;
            case 'A':
                top = stack.pop()
                sec = stack.pop()
                stack.push(Math.abs(top - sec))
                break;
            case 'W':
                top = stack.pop()
                sec = stack.pop()
                stack.push(top * sec)
                break;
            case 'P':
                top = stack.pop()
                sec = stack.pop()
                stack.push(Math.floor(sec / top))
                break;
            case '%':
                stack.pop()
                break;
            case '.':
                document.getElementById('code-output').innerHTML = output
                var t1 = performance.now()
                document.getElementById('code-time').innerHTML = ((t1 - t0) / 1000).toFixed(3) + " seconds elapsed";
                return 0
            case '!':
                var temp = stack.pop()
                stack.push(temp, temp)
                break;
            case ':':
                output += stack.pop()
                break;
            case ';':
                var temp = stack.pop()
                output += String.fromCharCode(temp)
                break;
            case '?':
                if (stack[stack.length - 1] != 0) {
                    ++pos
                }
                break;
            case '[':
                if (stack[stack.length - 1] == 0) {
                    pos = squarebracemap[pos]
                }
                break;
            case ']':
                if (stack[stack.length - 1] != 0) {
                    pos = squarebracemap[pos]
                }
                break;
            case '(':
                if (stack[stack.length - 1] != 0) {
                    pos = roundbracemap[pos]
                }
                break;
            case ')':
                if (stack[stack.length - 1] == 0) {
                    pos = roundbracemap[pos]
                }
                break;
            case '<':
                if (stack[stack.length - 1] != 0) {
                    pos = longcondbracemap[pos]
                }
                break;
            case '|':
                for (let i = 0; i < input.length; ++i) {
                    stack.push(input[i].charCodeAt(0))
                }
                break;
            case '~':
                stack = stack.reverse()
                break;
            case '{':
                if (stack[stack.length - 1] == 0) {
                    pos = invlongcondbracemap[pos]
                }
                break;
            case '@':
                for (let i = 0; i < input.length; ++i) {
                    if (input[i] == ' ') {
                        stack.push(0)
                    } else if (!isNaN(input[i])) {
                        stack.push(parseInt(input[i]))
                    } else {
                        stack.push(0)
                    }
                }
                break;
            case '_':
                stack.push(stack.length)
                break;
        }
        pos += 1

        if (output.length > 2048) {
            document.getElementById('code-output').innerHTML = output + "\nOutput reached limit of 2kb and was truncated."
            var t1 = performance.now()
            document.getElementById('code-time').innerHTML = ((t1 - t0) / 1000).toFixed(3) + " seconds elapsed";
            return 0
        }

        debug_stack(stack, char, pos)
        console.log('char: ', char);
        console.log('char type: ', typeof char);
        console.log('stack: ', stack);


        if (pos == code.length) {
            var t1 = performance.now()
            document.getElementById('code-time').innerHTML = ((t1 - t0) / 1000).toFixed(3) + " seconds elapsed";
            return 1
        }
    }
}
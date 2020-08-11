# MAWP
esolang wiki link: https://esolangs.org/wiki/MAWP

# PLEASE OPEN ANY ISSUES FOR BUGS AT [THIS](https://github.com/8Dion8/8Dion8.github.io) REPO. HOWEVER, ANY SUGGESTIONS SHOULD BE OPENED HERE
<table>
            <tr>
                <th>Symbol</th>
                <th>Meaning</th>
            </tr>
            <tr>
                <td>M</td>
                <td>Takes top two values of the stack and sums them.</td>
            </tr>
            <tr>
                <td>A</td>
                <td>Takes top two values of the stack and returns the absolute difference.</td>
            </tr>
            <tr>
                <td>W</td>
                <td>Takes top two values of the stack and multiplies them.</td>
            </tr>
            <tr>
                <td>P</td>
                <td>Takes top two values of the stack and floor divides the second by the other.</td>
            </tr>
            <tr>
                <td>%</td>
                <td>Pops top of stack.</td>
            </tr>
            <tr>
                <td>!</td>
                <td>Duplicates top of stack.</td>
            </tr>
            <tr>
                <td>:</td>
                <td>Prints top of stack without newline, removing it.</td>
            </tr>
            <tr>
                <td>;</td>
                <td>Prints top of stack as ascii char without newline, removing it.</td>
            </tr>
            <tr>
                <td>.</td>
                <td>Terminates program</td>
            </tr>
            <tr>
                <td>[</td>
                <td>Start of loop. jumps to its ] if top of stack equals to 0</td>
            </tr>
            <tr>
                <td>]</td>
                <td>End of loop. If top of stack doesn't equal to 0, then moves back to start of loop.</td>
            </tr>
            <tr>
                <td>(</td>
                <td>Start of inverted [] loop. Jumps to its ) if top of stack doesn't equal to 0</td>
            </tr>
            <tr>
                <td>)</td>
                <td>End of inverted [] loop. Jumps to its ( if top of stack equals to 0</td>
            </tr>
            <tr>
                <td>
                    <</td>
                        <td>Long conditional. If top of stack doesn't equal to 0, jumps to its ></td>
            </tr>
            <tr>
                <td>></td>
                <td>End of long conditional</td>
            </tr>
            <tr>
                <td>_</td>
                <td>Pushes length of stack</td>
            </tr>
            <tr>
                <td>?</td>
                <td>Short conditional. If top of stack doesn't equal to 0, skips next operator.</td>
            </tr>
            <tr>
                <td>|</td>
                <td>Pushes whole input byte by byte by its ASCII value</td>
            </tr>
            <tr>
                <td>~</td>
                <td>Reverses the stack</td>
            </tr>
            <tr>
                <td>{</td>
                <td>Long inverted conditional. If top of stack equals to 0, jumps to its }</td>
            </tr>
            <tr>
                <td>}</td>
                <td>End of long inverted conditional</td>
            </tr>
            <tr>
                <td>@</td>
                <td>Pushes whole input byte by byte. If character is an integer, then push that integer. Else push a 0</td>
            </tr>
            <tr>
                <td>/</td>
                <td>Cycles stack clockwise</td>
            </tr>
            <tr>
                <td>\</td>
                <td>Cycles stack anticlockwise</td>
            </tr>
        </table>

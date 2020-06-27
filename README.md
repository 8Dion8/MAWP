# MAWP
esolang wiki link: https://esolangs.org/wiki/MAWP
# Version 0.0
MAWP works on an integer stack, starting with an initial value of 1. The base operators are:

Any single-digit integer pushes that integer to stack.

M         takes top two values of the stack and sums them.                               [3,2,1] ==> [3,3]

A         takes top two values of the stack and subtracts the first from the other.      [3,2,1] ==> [3,1]

W         takes top two values of the stack and multiplies them.                         [3,2,1] ==> [3,2]

P         takes top two values of the stack and floor divides the second by the other.   [3,2,1] ==> [3,2]

%         pops top of stack.                                                             [3,2,1] ==> [3,2]

!         duplicates top of stack.                                                       [3,2,1] ==> [3,2,1,1]

:         prints top of stack without newline, removing it.                              [3,2,1] ==> [3,2] (STDOUT:1)

;         prints top of stack as ascii char without newline, popping it.                 [3,2,72]==> [3,2] (STDOUT:H)

.         terminates program

[         start of loop

]         end of loop. If top of stack doesn't equal to 0, then moves back to start of loop. (inspired by brainfuck)

?         conditional. If top of stack doesn't equal to 0, skips next operator.

|         reads a character off STDIN and pushes its ascii value. NOTE:integers still get pushed according to ascii value, not actual integer value.

# Version 0.1

MAWP 0.1 introduces several new features, and changes a couple old ones:

 ~         reverses stack                                                                [3,2,1] ==> [1,2,3]
 
 [         now also jumps to its ] if top of stack equals to 0
 
 (         start of inverted [] loop. Jumps to its ) if top of stack doesn't equal to 0
 
 )         end of inverted [] loop. Jumps to its ( if top of stack equals to 0
 
 <         long conditional. If top of stack doesn't equal to 0, jumps to its >
 
 A         now gives the absolute value of the difference
 
 |         now pushes whole input byte by byte, not only the first one
 
 _         pushes length of stack                                                        [3,2,1] ==> [3,2,1,3] 

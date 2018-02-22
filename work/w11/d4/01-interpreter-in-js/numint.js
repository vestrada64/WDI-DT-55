/* 

    Tokenizer: Our tokenizer accomplishes lexical analysis 
    What are tokens?

*/

const tokenize = (chars) => chars.replace(/\(/g, " ( ").replace(/\)/g, " ) ").split(" ");

function parse(program) {
    return readFromTokens(tokenize(program));
}

function readFromTokens(tokens) {
    if (!tokens.length) {
        throw "Syntax Error (Unexpected EOF)"
    }

    let token = tokens.pop();

    if (token === '(') {
        const AST = [];
        while (tokens[0] !== ')') {
            AST.push(read_from_tokens(tokens));
        }
        tokens.pop();
        return AST;
    } else if (token === ')') {
        return atom(token);
    }
}

function atom(token) {
    return parseInt(token, 10);
}

console.log(tokenize("(begin (define r 10) (* pi (* r r)))"))
console.log(parse("(begin (define r 10) (* pi (* r r)))"))
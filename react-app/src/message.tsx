//PascalCasing
function Message() {
    // this syntax is JSX, it looks like html but it stands for java script XML
    // this code will get converted to java script code during compilation(?)
    //can test the conversion out on babeljs.io/repl
    const name = ''
    if (name)
      return <h1>Hello {name} </h1>;
    return <h1>Hello World</h1>;
}

export default Message;
//PascalCasing: PascalCasing is used for the name of the file and the name of the component.
function Message(){
    const name = "Sandrine";
    
    if(name)
        return <h1>Hello {name}</h1>;

    return <h1>Hello World</h1>;
}

export default Message;
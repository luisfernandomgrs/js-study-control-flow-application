
// throw -> Lançar...

function sayMyName(name = "") {
    if (name === "") {
        throw new Error("Name is requered!");
    }
    
    // console.log("Code after Throw Error...");
    console.log("Your name is: " + name);
}

// Se executar sem um try catch... A aplicação será interrompid.
// sayMyName();

// try -> Tentar ... catch -> Pegar
try {
    sayMyName();
}
catch (e) {
    console.log(e);
}

try {
    sayMyName("Luis Fernando");
}
catch (e) {
    console.log(e);
}
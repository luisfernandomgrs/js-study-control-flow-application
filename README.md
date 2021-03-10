# -js-study-control-flow-application

Estudando Controle de fluxo da aplicação, Usando JS

O ponto forte deste projeto, com certeza é o uso Try...Catch

```js
function sayMyName(name = "") {
  if (name === "") {
    throw new Error("Name is requered!");
  }

  console.log("Your name is: " + name);
}

try {
  sayMyName("Luis Fernando");
} catch (e) {
  console.log(e);
}
```

`#NeverStopLearning` :)

console.log("Crie um array que receba 5 itens e exiba no console.");
const carros = ["Fusca","Kombi","Democrata","Monza","Santana"];
console.log(carros);

console.log("Utilize um método para adicionar um nome ao inicio do array.");
carros.unshift("Brasilia");
console.log(carros);

console.log("Utilize um método para remover o último nome do array.");
carros.pop();
console.log(carros);

console.log("Utilize um método para adicionar dois nomes ao fim do array.");
carros.push("DelRey","Chevette");
console.log(carros);

console.log("Utilize um método para remover o primeiro nome do array.");
carros.shift("Santana");
console.log(carros);

console.log("Utilize um método para organizar em ordem crescente o seguinte array: let numbers = [7,5,6,3,8,9,2,1,4]");
let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort();
console.log(numbers);

console.log("Bonus1: Utilize um método para remover o quarto e quinto da fila do array.");
carros.splice(3,2);
console.log(carros);

console.log("Bonus2: Utilize um método para adicionar dois nomes a partir do segundo da fila do array.");
carros.splice(1,length,"Corcel","Verona");
console.log(carros);

console.log("Bonus3: Utilize um método para organizar em ordem crescente o array de carros:");
carros.sort();
console.log(carros);
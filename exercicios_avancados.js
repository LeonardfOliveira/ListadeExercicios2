
// ==========================
// Seção 1: Estruturas de Controle Avançadas
// ==========================

// 1. Validação de Datas
function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;

  const diasNoMes = [31, (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return dia <= diasNoMes[mes - 1];
}

// 2. Jogo de Adivinhação
function jogoAdivinhacao() {
  const numero = Math.floor(Math.random() * 100) + 1;
  let tentativa, cont = 0;

  while (tentativa !== numero) {
    tentativa = parseInt(prompt("Adivinhe o número de 1 a 100:"));
    cont++;
    if (tentativa < numero) alert("Mais alto!");
    else if (tentativa > numero) alert("Mais baixo!");
    else alert(`Acertou em ${cont} tentativas!`);
  }
}

// 3. Palavras Únicas
function palavrasUnicas(frase) {
  const palavras = frase.split(" ");
  const unicas = [];
  for (let i = 0; i < palavras.length; i++) {
    let cont = 0;
    for (let j = 0; j < palavras.length; j++) {
      if (palavras[i] === palavras[j]) cont++;
    }
    if (cont === 1) unicas.push(palavras[i]);
  }
  return unicas;
}

// ==========================
// Seção 2: Funções e Recursão
// ==========================

// 4. Fatorial Recursivo
function fatorial(n) {
  if (n < 0) throw new Error("Número negativo não tem fatorial!");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

// 5. Debounce
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 6. Memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const chave = JSON.stringify(args);
    if (cache[chave]) return cache[chave];
    const resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}

// ==========================
// Seção 3: Arrays e Objetos Complexos
// ==========================

// 7. Mapeamento e Ordenação
function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco)
    .map(p => p.nome);
}

// 8. Agrupamento por Propriedade
function agruparVendas(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

// 9. Conversão Entre Formatos
function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

// ==========================
// Testes
// ==========================

console.log("Validação de datas:");
console.log(ehDataValida(29, 2, 2024)); // true
console.log(ehDataValida(31, 4, 2023)); // false

console.log("Fatorial:");
console.log(fatorial(5)); // 120

console.log("Palavras únicas:");
console.log(palavrasUnicas("olá mundo olá teste mundo")); // ['teste']

console.log("Nomes por preço:");
const produtos = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Tênis", preco: 200 },
  { nome: "Boné", preco: 30 }
];
console.log(nomesOrdenadosPorPreco(produtos)); // ['Boné', 'Camiseta', 'Tênis']

console.log("Agrupamento por cliente:");
const vendas = [
  { cliente: "Alice", total: 100 },
  { cliente: "Bob", total: 50 },
  { cliente: "Alice", total: 150 }
];
console.log(agruparVendas(vendas)); // { Alice: 250, Bob: 50 }

console.log("Conversão pares <-> objeto:");
const pares = [["nome", "Carlos"], ["idade", 30]];
const obj = { nome: "Carlos", idade: 30 };
console.log(paresParaObjeto(pares)); // { nome: "Carlos", idade: 30 }
console.log(objetoParaPares(obj));   // [["nome", "Carlos"], ["idade", 30]]

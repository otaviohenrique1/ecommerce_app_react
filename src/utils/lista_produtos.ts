export interface ListaProdutoTypes {
  codigo: number;
  nome: string;
  preco: number;
  quantidade: number;
  tipo: string;
  marca: string;
}

export const listaProdutos: ListaProdutoTypes[] = [
  {
    codigo: 1,
    nome: "GTX 750",
    preco: 800,
    quantidade: 1000,
    tipo: "Placa de video",
    marca: "Nvidia"
  },
  {
    codigo: 2,
    nome: "GTX 950",
    preco: 900,
    quantidade: 1000,
    tipo: "Placa de video",
    marca: "Nvidia"
  },
  {
    codigo: 3,
    nome: "GTX 1050",
    preco: 1000,
    quantidade: 1000,
    tipo: "Placa de video",
    marca: "Nvidia"
  },
  {
    codigo: 4,
    nome: "RTX 3050",
    preco: 1800,
    quantidade: 1000,
    tipo: "Placa de video",
    marca: "Nvidia"
  },
  {
    codigo: 5,
    nome: "RTX 2600",
    preco: 2000,
    quantidade: 1000,
    tipo: "Placa de video",
    marca: "Nvidia"
  },
  {
    codigo: 6,
    nome: "RTX 3090",
    preco: 4000,
    quantidade: 1000,
    tipo: "Placa de video",
    marca: "Nvidia"
  },
];
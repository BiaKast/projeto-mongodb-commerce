db.produtos.find(
  {
    $and: [
      { "valoresNutricionais.0.tipo": "calorias" },
      { "valoresNutricionais.0.quantidade": { $lt: 500 } },
    ],
  },
  { _id: 0, nome: 1 },
);

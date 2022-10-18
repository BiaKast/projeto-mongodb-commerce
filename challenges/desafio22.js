db.produtos.updateMany(
  {},
  { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0], $slice: 7 } } },
  { upsert: true },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $push: { vendasPorDia: { $each: [60], $position: 3, $slice: 7 } } },
);

db.produtos.updateMany(
  { tags: { $all: ["bovino"] } },
  { $push: { vendasPorDia: { $each: [120], $position: 6, $slice: 7 } } },
);

db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
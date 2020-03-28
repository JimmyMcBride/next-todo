// Plant seeds 🏡
exports.seed = function(knex) {
  return knex("todos").then(function() {
    // Inserts seed entries 🌱
    return knex("todos").insert([
      {
        id: 1,
        name: "Feed cat",
        description: "Feed Loki and Hudini after you wake up.",
        userId: 1,
        createdAt: "2020-03-27 02:49:54.709704-05",
      },
      {
        id: 2,
        name: "Cook diner",
        description: "Cook some dinner for the fam.",
        userId: 1,
        createdAt: "2020-03-27 02:49:54.709704-05",
      },
    ]);
  });
};

const express = require("express");
const { Prisma, PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
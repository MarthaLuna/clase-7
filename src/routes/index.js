const productsRouter = require("./products");
const categoriesRouter = require("./categories");
const usersRouter = require("./users");
const authRouter = require("./auth");

const apiRouter = (app) => {
    app.use("/api/v1/products", productsRouter);
    app.use("/api/v1/categories", categoriesRouter);
    app.use("/api/v1/users", usersRouter);
    app.use("/api/v1/auth",authRouter);
}

module.exports = apiRouter;
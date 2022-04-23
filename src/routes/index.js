const productsRouter = require("./products");
const categoriesRouter = require("./categories");
const usersRouter = require("./users")

const apiRouter = (app) => {
    app.use("/api/v1/products", productsRouter);
    app.use("/api/v1/categories", categoriesRouter);
    app.use("/api/v1/users", usersRouter);
}

module.exports = apiRouter;
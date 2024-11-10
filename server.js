import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use((req, res, next) => {
    console.log("req received")
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Method",
        "GET,POST,PUT,DELETE,OPTIONS"
    );
    res.header("Acess-Control-Allow-Headers",
        "Origin,X-Request-With,Content-Type,Accept"
    );
    next()
})
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})
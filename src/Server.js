import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      product: Model,
    },

    seeds(server) {
      server.create("product", { name: "Product-101", id: 1, completed: false})
      server.create("product", { name: "Product-102", id: 2, completed: false})
      server.create("product", { name: "Product-103", id: 3, completed: false})
      server.create("product", { name: "Product-104", id: 4, completed: false})
      server.create("product", { name: "Product-105", id: 5, completed: false})
      server.create("product", { name: "Product-106", id: 6, completed: false})
      server.create("product", { name: "Product-107", id: 7, completed: false})
      

    },



    routes() {
      this.namespace = "api"

      this.get("/products", (schema) => {
        return schema.products.all()
      })
    },
  })

  return server
}
import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      product: Model,
    },

    seeds(server) {
      server.create("product", { name: "Product-1", id: 1, completed: false})
      server.create("product", { name: "Product-2", id: 2, completed: false})
      server.create("product", { name: "Product-3", id: 3, completed: false})
      server.create("product", { name: "Product-4", id: 4, completed: false})
      server.create("product", { name: "Product-5", id: 5, completed: false})
      server.create("product", { name: "Product-6", id: 6, completed: false})
      server.create("product", { name: "Product-7", id: 7, completed: false})
      server.create("product", { name: "Product-8", id: 8, completed: false})
      server.create("product", { name: "Product-9", id: 9, completed: false})
      server.create("product", { name: "Product-10",id: 10, completed: false})

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
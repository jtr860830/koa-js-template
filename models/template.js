class Model {
  collection = "model";
  #session;

  constructor() {
    throw new Error("this class is just an example of model");
  }

  setDriver(db) {
    if (!this.#session) {
      this.#session = db.collection(this.collection);
      // create indexes here
      // e.g., this.#session.createIndex({ "id": 1 }, { unique: true });
    }
    return this;
  }

  // define methods
  // e.g., get(id) { ... }
}

export default Model;

const tag = "[store]";

export default class Store {
  constructor(storage) {
    if (!storage) throw "no storage";

    console.log(tag);
    this.storage = storage;
  }
}

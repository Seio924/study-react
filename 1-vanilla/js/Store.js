const tag = "[store]";

export default class Store {
  constructor(storage) {
    if (!storage) throw "no storage";

    console.log(tag);
    this.storage = storage;

    this.searchKeyword = "";
    this.searchResult = [];
  }

  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter((product) =>
      product.name.include(keyword)
    );
  }

  reset() {
    this.searchKeyword = "";
    this.searchResult = [];
  }
}

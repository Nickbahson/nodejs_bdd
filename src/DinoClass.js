class DinoClass {
  totalItems = 0;
  totalItemsMocked = 0;

  constructor () {
    console.log("init")
  }

  calculateTotalItems(items) {
    items.map((items, index) => {
      this.updateTotalItems(index)
      this.updateTotalItemsMocked(index)
    })
  }

  updateTotalItems(index) {
    this.totalItems ++
  }

  /**
   * Will be mocked and not called during tests
   * @param index
   */
  updateTotalItemsMocked(index) {
    this.totalItemsMocked ++
    console.log(this.totalItemsMocked)
  }


}

module.exports = DinoClass
let DinoClass = require("../src/DinoClass")
let chai = require("chai")
let sinon = require("sinon")
let Dino = new DinoClass()
let expect = chai.expect

describe("Test DinoClass", function () {

  it('should test passing add', function () {

  })

  it('should count updateTotalItems calls', function () {
    let spy = sinon.spy(Dino, "updateTotalItems")
    let items = ["1", "20", "Rex", "T-Rex", "200"]
    Dino.calculateTotalItems(items)
    /**
     * updateTotalItemsMocked is called and items consoled logged,
     * not called in below function
     */
    expect(spy.callCount).to.be.equal(items.length)
    expect(Dino.totalItems).to.be.equal(items.length)
  })

  it('should test updateTotalItemsMocked mocking', function () {
    let mock = sinon.mock(Dino)
    let expectation = mock.expects("updateTotalItemsMocked")

    let items = ["1", "20", "Rex", "T-Rex", "200"]
    // should be called as many times as items length
    expectation.exactly(items.length)
    Dino.calculateTotalItems(items)
    mock.verify()
  })
})
describe("pow", function() {

  it("2 to the power of 3 will be 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("3 to the power of 4 will be 81", function() {
    assert.equal(pow(3, 4), 81);
  });

  describe("raises to the power of 3", function() {
    function makeTest(x) {
      let expected = x * x * x;

      it(`${x} to the power of 3 will be ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  it("for negative n returns NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for fractional n returns NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

});
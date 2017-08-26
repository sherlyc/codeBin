var fibo = require("../fibonacci");
var chai = require("chai");
var assert = require("assert");

describe("fibonacci", function() {
  it("should return [0] when n=0", function() {
    assert.deepEqual(fibo.fibonacci(0), [0]);
  });
});

describe("fibonacci", function() {
  it("should return [0] when n is less than zero", function() {
    assert.deepEqual(fibo.fibonacci(-1), [0]);
    assert.deepEqual(fibo.fibonacci(-5), [0]);
  });
});

describe("fibonacci", function() {
  it("should return [0, 1] when n=1", function() {
    assert.deepEqual(fibo.fibonacci(1), [0, 1]);
  });
});

describe("fibonacci", function() {
  it("should return [0, 1, 1] when n=2", function() {
    assert.deepEqual(fibo.fibonacci(2), [0, 1, 1]);
  });
});

describe("fibonacci", function() {
  it("should return [0, 1, 1, 2] when n=3", function() {
    assert.deepEqual(fibo.fibonacci(3), [0, 1, 1, 2]);
  });
});

describe("fibonacci", function() {
  it("should return [0, 1, 1, 2, 3] when n=4", function() {
    assert.deepEqual(fibo.fibonacci(4), [0, 1, 1, 2, 3]);
  });
});

describe("fibonacci", function() {
  it("should return [0, 1, 1, 2, 3, 5] when n=5", function() {
    assert.deepEqual(fibo.fibonacci(5), [0, 1, 1, 2, 3, 5]);
  });
});

describe("fibonacci", function() {
  it("should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55] when n=10", function() {
    assert.deepEqual(fibo.fibonacci(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

describe("fibonacci", function() {
  it("should return out of range when n > 20", function() {
    assert.equal(fibo.fibonacci(21), "Out of range.");
  });
});

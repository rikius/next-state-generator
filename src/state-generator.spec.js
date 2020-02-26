import { expect } from "chai";
import stateGenerator from './state-generator';


describe("state generator", function() {
  const stateInitializer = "3 2 6 8 30 0 1 15 9".split(" ");

  beforeEach(function() {});

  describe("state validation", function() {
    it("previous state generates max number items of states", function() {
      const currentState = "0 0 0 0 0 0 0 0 0".split(" ");
      const currentExpectedState = "2 1 5 7 29 0 0 14 8".split(" ");

      const result = stateGenerator(stateInitializer, currentState, -1);

      expect(result).to.eql(currentExpectedState);
    });

    it("next state generates only first number increament", function() {
      const currentState = "0 0 0 0 0 0 0 0 0".split(" ");
      const currentExpectedState = "1 0 0 0 0 0 0 0 0".split(" ");

      const result = stateGenerator(stateInitializer, currentState, 1);

      expect(result).to.eql(currentExpectedState);
    });

    it("next state generates zeros when max reached test last number increase", function() {
      const currentState = "2 1 5 7 29 0 0 14 7".split(" ");
      const currentExpectedState = "0 0 0 0 0 0 0 0 8".split(" ");

      const result = stateGenerator(stateInitializer, currentState, 1);

      expect(result).to.eql(currentExpectedState);
    });

    it("next state generates zeros when max reached", function() {
      const currentState = "2 1 5 7 29 0 0 14 8".split(" ");
      const currentExpectedState = "0 0 0 0 0 0 0 0 0".split(" ");

      const result = stateGenerator(stateInitializer, currentState, 1);

      expect(result).to.eql(currentExpectedState);
    });

    it("having same generated state when increase is 0", function() {
      const currentState = "2 1 5 7 29 0 0 14 8".split(" ");
      const currentExpectedState = "2 1 5 7 29 0 0 14 8".split(" ");

      const result = stateGenerator(stateInitializer, currentState, 0);

      expect(result).to.eql(currentExpectedState);
    });

    it("normalize state to 0 when invalid value is passed", function() {
      const currentState = "-12 1a 111 7.1 p1 0 0 1e 8".split(" ");
      const currentExpectedState = "0 1 0 7 0 0 0 1 8".split(" ");

      const result = stateGenerator(stateInitializer, currentState, 0);

      expect(result).to.eql(currentExpectedState);
    });

  });
});
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "./index";

configure({ adapter: new Adapter() });

describe("counter tests", () => {
  it("should be 0 without props", () => {
    const wrapper = shallow(<Counter />);
    const counter = wrapper.find("span");
    expect(counter.text()).toBe("0");
  });
  it('shold be 10 with props "start" = 10', () => {
    const wrapper = shallow(<Counter start={10} />);
    const counter = wrapper.find("span");
    expect(counter.text()).toBe("10");
  });
  it('should have buttons "inc" and "dec"', () => {
    const wrapper = shallow(<Counter />);
    expect(
      wrapper.containsAllMatchingElements([
        <button>+</button>,
        <button>-</button>
      ])
    ).toBeTruthy();
  });
  it('should be modified after click buttons "+/-"', () => {
    const wrapper = shallow(<Counter />);
    const increment = wrapper
      .find("button")
      .filterWhere((el) => el.text() === "+");
    const decrement = wrapper
      .find("button")
      .filterWhere((el) => el.text() === "-");
    increment.simulate("click");
    increment.simulate("click");
    decrement.simulate("click");
    const counter = wrapper.find("span");
    expect(counter.text()).toBe("1");
  });
  it('should be modified after cliked "Zmień"', () => {
    const EXAMPLE = "231";
    const wrapper = shallow(<Counter />);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: EXAMPLE } });
    wrapper
      .find("button")
      .filterWhere((el) => el.text() === "Zmień")
      .simulate("click");
    const counter = wrapper.find("span");
    expect(counter.text()).toBe(EXAMPLE);
  });
  it('should be "start"/0 after Reset', () => {
    const wrapper = shallow(<Counter />);
    const increment = wrapper
      .find("button")
      .filterWhere((el) => el.text() === "+");
    increment.simulate("click");
    increment.simulate("click");
    wrapper
      .find("button")
      .filterWhere((el) => el.text() === "Reset")
      .simulate("click");
    const counter = wrapper.find("span");
    expect(counter.text()).toBe("0");
  });
});

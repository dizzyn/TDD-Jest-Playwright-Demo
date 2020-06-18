import api, { transform } from "./api";

it("SnakeCase", () => {
  expect(
    transform(
      "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo.",
      "snake"
    )
  ).toBe("buffalo_buffalo_buffalo_buffalo_buffalo_buffalo_buffalo_buffalo");
});

it("CamelCase", () => {
  expect(
    transform(
      "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo.",
      "camel"
    )
  ).toBe("buffaloBuffaloBuffaloBuffaloBuffaloBuffaloBuffaloBuffalo");
});

function testAPI(params: any, status?: number) {
  const req = {
    query: { ...params },
  } as any;

  const res = {
    status: jest.fn(),
    send: jest.fn(),
  } as any;

  api(req, res);

  if (status) {
    expect(res.status).toBeCalledWith(status);
  }

  return res.send.mock.calls[0][0];
}

it("Missing parameters", () => {
  expect(testAPI({}, 400)).toBe("Str not given");
  expect(testAPI({ str: "x" }, 400)).toBe("Case name not given");
});

it("Call Snake", () => {
  expect(testAPI({ str: "a b c", case: "snake" })).toBe("a_b_c");
});

it("Call Camel", () => {
  expect(testAPI({ str: "a b c", case: "camel" })).toBe("aBC");
});

it("Call cat", () => {
  expect(testAPI({ str: "a b c", case: "cat" }, 400)).toBe(
    "Unsupported transformation 'cat'"
  );
});

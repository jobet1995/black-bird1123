import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("renders Hello CodeSandbox v2", () => {
  const { getByText } = render(<App />),
    linkElement = getByText(/Hello CodeSandbox v2/iu);
  expect(linkElement).toBeInTheDocument();
});

import { expect, expectTypeOf, it } from "vitest";

/**
 * How do we type onFocusChange?
 */
const addListener = (onFocusChange: (isFocused: boolean) => void) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });
});

type AddListenerFn = (onFocusChange: (isFocused: boolean) => void) => void;

it("", () => {
  expectTypeOf(addListener).toEqualTypeOf<AddListenerFn>();
});

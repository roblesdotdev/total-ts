import { expectTypeOf, it } from "vitest";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */
interface Base {
  id: string;
}

interface User extends Base {
  // id: string;
  firstName: string;
  lastName: string;
}

interface Post extends Base {
  // id: string;
  title: string;
  body: string;
}

interface Comment extends Base {
  // id: string;
  comment: string;
}

it("asdfasdfasd", () => {
  const user = { id: "1", firstName: "Bar", lastName: "Baz" };
  expectTypeOf(user).toEqualTypeOf<User>();
});

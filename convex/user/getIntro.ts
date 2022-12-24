import { query } from "../_generated/server";

export default query(async ({ db, auth }, userId: string) => {
  const identity = await auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  const user = await db
    .query("users")
    .filter((q) => q.eq(q.field("_id"), userId))
    .first();

  return {
    introCompleted: user?.introduction?.completed ?? false,
    usernameSet: user?.username ? true : false,
  };
});

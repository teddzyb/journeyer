import { mutation } from "../_generated/server";

export default mutation(async ({ db, auth }, username: string) => {
  const identity = await auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  const user = await db
    .query("users")
    .filter((q) => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
    .first();

  return db.patch(user._id, {
    username: username.trim(),
  });
});

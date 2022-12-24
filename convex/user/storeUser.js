import { mutation } from "../_generated/server";

export default mutation(async ({ db, auth }) => {
  const identity = await auth.getUserIdentity();

  if (!identity) {
    throw new Error("Called storeUser without authentication present");
  }

  const user = await db
    .query("users")
    .filter((q) => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
    .first();

  if (user) return user._id;

  return db.insert("users", {
    tokenIdentifier: identity.tokenIdentifier,
  });
});

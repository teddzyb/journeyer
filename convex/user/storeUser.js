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

  if (user !== null) {
    if (user.name !== identity.name) {
      await db.patch(user._id, { name: identity.name });
    }
    return user._id;
  }

  return db.insert("users", {
    name: identity.name,
    newUser: true,
    tokenIdentifier: identity.tokenIdentifier,
  });
});

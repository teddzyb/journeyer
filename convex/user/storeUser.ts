import { mutation } from "../_generated/server";

export default mutation(async ({ db, auth }) => {
  const identity = await auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  const user = await db
    .query("users")
    .filter((q) => q.eq(q.field("tokenIdentifier"), identity.tokenIdentifier))
    .first();

  if (user) return user._id;

  return db.insert("users", {
    // username: "",
    inventory: { gold: 0, silver: 0 },
    status: { level: 1, xp: 0, xpToNextLevel: 100 },
    // campaign: { campaignId: "", campaignProgress: 0 },
    // introduction: { completed: false },
    tokenIdentifier: identity.tokenIdentifier,
  });
});

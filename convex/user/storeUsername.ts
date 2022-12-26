import { GenericId } from "convex/values";
import { mutation } from "../_generated/server";

export default mutation(async ({ db, auth }, userId: GenericId<string>, username: string) => {
  const identity = await auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  const user = await db.get(userId);

  return db.patch(user._id, {
    username: username.trim(),
  });
});

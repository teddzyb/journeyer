import { GenericId } from "convex/values";
import { query } from "../_generated/server";

export default query(async ({ db, auth }, userId: GenericId<string>) => {
  const identity = await auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  const user = await db.get(userId);

  return {
    introCompleted: user?.introduction?.completed ?? false,
    usernameSet: user?.username ? true : false,
  };
});

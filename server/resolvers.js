import { getJobs } from "./db/jobs.js";

export const resolvers = {
  Query: {
    jobs: getJobs, // Feasible because getJobs is already a function that returns a value (or a Promise)
    // jobs: () => getJobs(),
  },
};

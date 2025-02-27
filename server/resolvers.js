import { getJobs } from "./db/jobs.js";

const toIsoDate = date => date.slice(0, "yyyy-mm-dd".length);

export const resolvers = {
  Query: {
    jobs: getJobs, // Feasible because getJobs is already a function that returns a value (or a Promise)
    // jobs: () => getJobs(),
  },

  /* When the GraphQL server receives a request, it looks for field resolvers to provide the requested
  data.
  
  If a resolver cannot be found, then the value of the property with the same field name is returned and,
  if a property with the same field name cannot be found, `null` is returned for the requested field,
  unless the field is non-nullable in the schema.
  
  The `Job.date` resolver provides the value of the `date` field. Notice that `jobs` were requested,
  not `Job`, but since `getJobs` was supposed to provide data for `Job`s, the `Job.date` resolver
  takes precedence, but it also receives the data provided by the `jobs` resolver (the getJobs
  function) so that it can transform the data before providing the value.

  Here, `Job.date` formats the value of the `createdAt` property of every job object before returning
  it as the date value.
   */
  Job: {
    date: job => toIsoDate(job.createdAt),
    /* If the schema had a `createdAt` field, `Job.createdAt` would provide its value, even though 
    job objects contain a `createdAt` property. Again, this is because resolvers take precedence over
    properties with the same name of the requested field. */
    // createdAt: () => "2025-02-26",
  },
};

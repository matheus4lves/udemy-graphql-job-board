export const resolvers = {
  Query: {
    jobs: () => [
      {
        id: "job-id-1",
        title: "job title 1",
        description: "job description",
      },
      {
        id: "job-id-2",
        title: "job title 2",
        description: "job description",
      },
      // null, // Would cause an error
      // An empty array is perfectly acceptable, tough.
    ],
  },
};

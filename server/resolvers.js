export const resolvers = {
  Query: {
    job: () => ({
      id: "job-id",
      title: "job title",
      description: "job description",
    }),
  },
};

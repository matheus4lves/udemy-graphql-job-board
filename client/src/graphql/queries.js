import { gql, request } from "graphql-request";

const query = gql`
  {
    jobs {
      id
      title
      date
      company {
        name
      }
    }
  }
`;

async function getJobs() {
  const { jobs } = await request("http://localhost:9000/graphql", query);
  return jobs;
}

export default getJobs;

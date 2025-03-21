import { gql, request } from "graphql-request";

const url = "http://localhost:9000/graphql";

export async function getJob(jobId) {
  const document = gql`
    query JobByID($id: ID!) {
      job(id: $id) {
        id
        date
        title
        description
        company {
          id
          name
        }
      }
    }
  `;

  const variables = { id: jobId };

  const { job } = await request({ url, document, variables });
  return job;
}

export async function getJobs() {
  const document = gql`
    query Jobs {
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

  const { jobs } = await request({ url, document });
  return jobs;
}

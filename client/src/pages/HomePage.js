import React, { useEffect, useState } from "react";
import JobList from "../components/JobList";
import { getJobs } from "../graphql/queries.js";

function HomePage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(setJobs);

    // Alternatively...
    // async function fetchData() {
    //   const jobs = await getJobs();
    //   setJobs(jobs);
    // }

    // fetchData();
  }, []);

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;

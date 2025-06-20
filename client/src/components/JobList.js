import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/formatters";

function JobList({ jobs }) {
  return (
    <ul className="box">
      {jobs.map(job => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

function JobItem({ job }) {
  const title = job.company ? `${job.title} at ${job.company.name}` : job.title;
  return (
    <li className="media">
      <div className="media-left has-text-grey">{formatDate(job.date)}</div>
      <div className="media-content">
        <Link to={`/jobs/${job.id}`}>{title}</Link>
      </div>
    </li>
  );
}

export default JobList;

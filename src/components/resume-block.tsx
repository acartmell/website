import React, { ReactNode } from "react";
import BEM from "bem-cn";
import "./resume-block.scss";

const bem = BEM("resume-block");

interface JobSpan {
  job: string;
  timespan: string;
}

interface Props {
  name: string;
  city: string;
  jobSpans: JobSpan[];
  children?: ReactNode;
}

function ResumeBlock(props: Props) {
  const { name, city, jobSpans, children } = props;

  return (
    <div className={bem()}>
      <div className={bem("name")}>{name}</div>
      <div className={bem("city")}>{city}</div>
      {jobSpans.map((jobspan) => (
        <div key={jobspan.job} className={bem("jobspan")}>
          <span className={bem("job-title")}>{jobspan.job}</span>
          <span className={bem("sep")}>•</span>
          <span>{jobspan.timespan}</span>
        </div>
      ))}
      {children && <div className={bem("description")}>{children}</div>}
    </div>
  );
}

export default ResumeBlock;

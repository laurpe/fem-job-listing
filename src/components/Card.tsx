import { JobData } from "../types";

interface Props {
    job: JobData;
}

const Card = ({ job }: Props) => {
    return (
        <div className="job-container">
            <div className="job-left">
                <div className="job-image">
                    <img src={job.logo} alt="company logo" />
                </div>
                <div className="job-info">
                    <div className="job-subheader">
                        <div className="job-company">
                            <h3>{job.company}</h3>
                        </div>
                        {job.new && <div className="pill new">NEW!</div>}
                        {job.featured && (
                            <div className="pill featured">FEATURED</div>
                        )}
                    </div>
                    <div className="job-position">
                        <h2>{job.position}</h2>
                    </div>
                    <ul className="job-misc">
                        <li>{job.postedAt}</li>
                        <li>{job.contract}</li>
                        <li>{job.location}</li>
                    </ul>
                </div>
            </div>
            <ul className="job-languages">
                {job.languages.map((item) => (
                    <li className="job-language" key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Card;

import { JobData } from "../types";

interface Props {
    job: JobData;
}

const Card = ({ job }: Props) => {
    return (
        <div>
            <div>
                <img src={job.logo} alt="company logo" />
            </div>
            <div>
                <div>
                    <h3>{job.company}</h3>
                </div>
                <div>
                    <h2>{job.position}</h2>
                </div>
                <ul>
                    <li>{job.postedAt}</li>
                    <li>{job.contract}</li>
                    <li>{job.location}</li>
                </ul>
            </div>
            <div>
                {job.languages.map((item) => (
                    <div key={item}>{item}</div>
                ))}
            </div>
        </div>
    );
};

export default Card;

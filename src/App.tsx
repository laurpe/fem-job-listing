import { useEffect, useState } from "react";
import Card from "./components/Card";

interface JobData {
    company: string;
    contract: string;
    featured: boolean;
    id: number;
    languages: string[];
    level: string;
    location: string;
    logo: string;
    new: boolean;
    position: string;
    postedAt: string;
    role: string;
    tools: string[];
}

const getData = async <T,>(url: string): Promise<T> => {
    const response = await fetch(url);
    return response.json() as Promise<T>;
};

const App = () => {
    const [jobs, setJobs] = useState<JobData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await getData<JobData[]>("data.json");
            setJobs(result);
        };
        fetchData().catch((error) => console.error(error));
    }, []);

    return (
        <div>
            {jobs.map((job) => (
                <Card job={job} key={job.id} />
            ))}
        </div>
    );
};

export default App;

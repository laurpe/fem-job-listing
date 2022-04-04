import Card from "./components/Card";

const getData = async <T,>(url: string): Promise<T> => {
    const response = await fetch(url);
    const data = response.json() as Promise<T>;
    return data;
};

function App() {
    const data = getData("data.json");
    console.log(data);
    return (
        <div>
            <Card />
        </div>
    );
}

export default App;

import { useEffect, useState } from "react";
import NasaImage from "../../components/NasaImage";
import NasaVideo from "../../components/NasaVideo";
import "./NasaPage.css";

export default function NasaPage() {
    const [state, setState] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    setError(response);
                }
            })
            .then(json => setState(json))
            .catch(error => setError(error));
    }, []);

    if (error !== null) {
        return <div>Something went wrong :(</div>;
    }

    if (state === null) {
        return <div>Loading...</div>;
    }

    const Component = state.media_type === "video"
        ? NasaVideo
        : NasaImage;

    return (
        <div className="NasaPage">
            <h1>NASA</h1>
            <Component title={state.title}
                explanation={state.explanation}
                url={state.url}
            />
        </div>
    );
}
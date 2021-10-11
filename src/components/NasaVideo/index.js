export default function NasaVideo({ title, url, explanation }) {
    return (
        <div className="NasaVideo">
            <iframe width="640" height="480" src={url} title={title} />
            <div>{title}</div>
            <div>{explanation}</div>
        </div>
    );
}
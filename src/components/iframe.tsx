type Props = {
    url: string
}

const Iframe: React.FC<Props> = ({ url }) => {
    return (
        <iframe
            width="100%"
            height="386"
            style={{ marginBottom: '1rem' }}
            src={url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
    )
}

export default Iframe;

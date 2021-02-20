type Props = {
    url: string
}

const Iframe: React.FC<Props> = ({ url }) => {
    return <div dangerouslySetInnerHTML={{ 
        __html: `
        <iframe 
            width="100%" 
            height="386" 
            style="margin-bottom: 1rem;" 
            src="${url}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        `
    }} />
}

export default Iframe;

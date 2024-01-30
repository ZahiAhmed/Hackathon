const Video = () => {
    return (
        <>
            <div className="video-container">
            <iframe
                width="1080"
                height="604"
                src="https://www.youtube.com/embed/2iTZipttfJM"
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
        </>
    )
}

export default Video
import "./Photos.css"

export default function Photos({ data }) {
    if (data !== null) {
        return (
            <div className="Photos grid">
                {data.photos.map((photo, index) => {
                    return (
                      <a
                        href={photo.src.original}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                      >
                        {" "}
                        <img
                          src={photo.src.landscape}
                          key={index}
                          alt={photo.alt}
                          className="image"
                        />
                      </a>
                    );
                })}
            </div>
        )
    } else {
        return null
    }
}
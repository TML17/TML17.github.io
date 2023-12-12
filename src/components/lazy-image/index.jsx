
renderExternalProjects = () => {
    return externalProjects.map((item, index) => (
      <div className="project-container" key={index}>
        {/* Description at the top */}
        <div className="project-description">
          <h2>{item.title}</h2> {/* Assuming 'item.title' is the title of the project */}
          <p>{item.description}</p> {/* Assuming 'item.description' is the description */}
        </div>

        {/* Image below the description */}
        <a
          className="project-image"
          href={item.link}
          onClick={(e) => {
            e.preventDefault();
            if (googleAnalytics?.id) {
              ga.event({
                action: 'Click External Project',
                params: {
                  post: item.title,
                },
              });
            }
          }}
        >
          <LazyImage
            src={item.imageUrl}
            alt={item.title}
            className="w-full"
          />
        </a>
      </div>
    ));
};

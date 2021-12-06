const storiesList = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];

export default function Stories() {
    return (
        <div className="stories">
            {storiesList.map(story => {
                const src = `assets/img/${story}.svg`;
                const alt = `Logo ${story}`;
                
                return (
                    <div className="story">
                        <div className="imagem">
                            <img src={src} alt={alt}/>
                        </div>
                        <div className="usuario">
                            {story}
                        </div>
                    </div>
                )
            })}
            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
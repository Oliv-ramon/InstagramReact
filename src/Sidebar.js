const suggestions = ["bad.vibes.memes", "chibirdart", "razoesparaacreditar", "adorable_animals", "smallcutecats"]

const user = {
    src: "assets/img/catanacomics.svg",
    alt: "foto de perfil do usuario",
    text: 
        <div class="texto">
            <strong>catanacomics</strong>
            Catana
        </div>
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Usuario info={user}/>
            <div className="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {suggestions.map(suggestion => {
                    const src = `assets/img/${suggestion}.svg`;

                    return (
                        <div className="sugestao">
                            <div className="usuario">
                                <img src={src} alt={`foto de perfil usuario ${suggestion}`}/>
                                <div className="texto">
                                    <div className="nome">{suggestion}</div>
                                    <div className="razao">Segue você</div>
                                </div>
                            </div>

                            <div class="seguir">Seguir</div>
                        </div>
                    )})
                }
                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    )
}

function Usuario ({info}) {
    const {src, alt, text} = info;
    
    return (
        <div class="usuario">
            <img src={src} alt={alt}/>
            {text}
        </div>
    )
}
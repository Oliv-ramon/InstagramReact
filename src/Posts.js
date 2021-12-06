const posts = [
    {
    user: "meowed", 
    postImg: {
        src:"assets/img/gato-telefone.svg",
        alt: "gato fofo no telefone"
        },
    text: 
        <div className="texto">
            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
        </div>,
    textImg:{
        src: "assets/img/respondeai.svg",
        alt: "usuario que curtiu"}
    },
    {
        user: "barked", 
        postImg: {
            src:"assets/img/dog.svg",
            alt: "cachorro fofo"
            },
        text: 
            <div className="texto">
                Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
            </div>,
        textImg:{
            src: "assets/img/adorable_animals.svg",
            alt: "usuario que curtiu"}
    }
];


export default function Posts() {
    return (
        <div className="posts">
            {posts.map(post => {
                return (
                    <div className="post">
                        <Topo info={post}/>
                        <Conteudo info1={post}/>
                        <Fundo info2={post}/>
                    </div>
                )})}
        </div>
    )
}

function Topo({info}) {
    const {user} = info
    const src = `assets/img/${user}.svg`;
    const alt = `foto de perfil de ${user}`;
    return (
        <div className="topo">
            <div className="usuario">
                <img src={src} alt={alt}/>
                {user}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Conteudo({info1}) {
    const {postImg} = info1;
    const {src, alt} = postImg;

    return (
        <div className="conteudo">
            <img src={src} alt={alt} />
        </div>
    )
}

function Fundo({info2}) {
    return (
        <div className="fundo">
            <Acoes/>
            <Curtidas info={info2}/>
        </div>
    )
}

function Acoes() {
    return (
        <div className="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}

function Curtidas({info}) {
    const {text, textImg} = info;
    const {src, alt} = textImg;
    
    return (
        <div className="curtidas">
            <img src={src} alt={alt} />
            <div className="texto">
                {text}
            </div>
        </div>
    )
}
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";

function App() {
    return (
        <div>
            <Navbar/>
            <Corpo/>
            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector(".root"))
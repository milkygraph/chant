import '../css/App.css';
import {LeftPanel} from "./LeftPanel.js";
import {Chat} from "./Chat.js";

export default function App() {
    return (
        <div className="main-app">
            <LeftPanel />
            <Chat />
        </div>
    );
}

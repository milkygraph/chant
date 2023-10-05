import profilePhoto from '../res/profile.png'
import '../css/LeftPanel.css'
import {Contact} from "./Contacts.js";

const contacts = [
    {profilePicture: "../res/profile.png", name: "John", phone: "123456789", lastMessage: "Hello" },
    {profilePicture: "../res/profile.png", name: "Jane", phone: "1234567", lastMessage: "Hi" },
    {profilePicture: "../res/profile.png", name: "Joe", phone: "1234567890", lastMessage: "Hey" },
]

export function LeftPanel() {
    return (
        <div className="left-panel">
            <div className="user-profile">
                <div style={{alignSelf: "center"}}>
                    <img className="user-profile-picture" src={profilePhoto} alt="Profile" />
                </div>
                <div className="user-info">
                    <div className="username">John Doe</div>
                    <div className="nickname">@John</div>
                </div>
            </div>

            <div className="contacts">
                {contacts.map((contact) => <Contact key={contact.phone} contact={contact} />)}
            </div>
        </div>
    );
}

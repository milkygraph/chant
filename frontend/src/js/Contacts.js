import profilePhoto from '../res/profile.png'
import '../css/Contacts.css'

export function Contact({ contact }) {
    return (
    <div className="contact">
        <div className="contact-profile">
            <img src={profilePhoto} className="profile-photo" alt="profile" />
        </div>
        <div>
            <div className="contact-name">{contact.name}</div>
            <div className="last-message">{contact.lastMessage}</div>
        </div>
    </div>
    );
}
import '../css/Chat.css'

export function Chat() {
    return (
    <div className="chat-box">
        <div className="messages">
            <div className="sent-message">Sent</div>
            <div className="received-message">Received</div>
        </div>
        <div className="send-message-container">
            <input className="message-prompt" placeholder={"Type a message"}/>
            <button className="send-message-button"> Send </button>
        </div>
    </div>
    );
}
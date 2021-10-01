import UserInfo from "../UserInfo";
import UniqueId from "../UniqueId";
import CurrentDate from "../CurrentDate";
import "./Message.css";

export default function Message({ isImportant, message, title }) {
  if (message === "" || message == null) {
    return null;
  }

  let className = "Message";
  if (isImportant) className += " Message--important";

  return (
    <div className={className}>
      <div className="Message__title">{title}</div>
      <div className="Message__author"><UserInfo /></div>
      <div className="Message__id"><UniqueId /></div>
      <div className="Message__text">{message}</div>
      <div className="Message__date"><CurrentDate /></div>
    </div>
  );
}

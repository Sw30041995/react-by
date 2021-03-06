import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
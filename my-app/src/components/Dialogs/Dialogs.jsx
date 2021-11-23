import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Yaroslav'},
        {id: 3, name: 'Alexey'},
        {id: 4, name: 'Sergey'},
        {id: 5, name: 'Evgeniy'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Hello my friend'},
        {id: 4, message: 'heeeey'},
        {id: 5, message: 'I learn React and JS'},
    ];

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messagesData.map(message => <Message message={message.message} />);

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
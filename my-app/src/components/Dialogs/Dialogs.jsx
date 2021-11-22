import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Ivan'},
        { id: 2, name: 'Yaroslav'},
        { id: 3, name: 'Alexey'},
        { id: 4, name: 'Sergey'},
        { id: 5, name: 'Evgeniy'}
    ];

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'Hello my friend' },
        { id: 4, message: 'heeeey' },
        { id: 5, message: 'I learn React and JS' },
    ];

    return (
      <div className={style.dialogs}>
          <div className={style.dialogsItems}>
              <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
              <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
              <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
              <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
              <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
          </div>
          <div className={style.messages}>
              <Message message={messagesData[0].message} />
              <Message message={messagesData[1].message} />
              <Message message={messagesData[2].message} />
              <Message message={messagesData[3].message} />
              <Message message={messagesData[4].message} />
          </div>
      </div>
    );
}

export default Dialogs;
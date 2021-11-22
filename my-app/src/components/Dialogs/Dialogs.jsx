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
              <Message message='Hi' />
              <Message message='Yo' />
              <Message message='Itka itka' />
              <Message message='Hello my friend' />
              <Message message='heeeey' />
          </div>
      </div>
    );
}

export default Dialogs;
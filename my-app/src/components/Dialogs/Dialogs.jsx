import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    return (
      <div className={style.dialogs}>
          <div className={style.dialogsItems}>
              <DialogItem name='Ivan' id='1' />
              <DialogItem name='Yaroslav' id='2' />
              <DialogItem name='Alexey' id='3' />
              <DialogItem name='Sergey' id='4' />
              <DialogItem name='Ivan' id='5' />
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
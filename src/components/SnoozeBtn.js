import './AlarmPage.css'
import './AlarmPage'

const SnoozeBtn = (props) => {
    const setSnoozeBtn= props.setSnoozeBtn;
    const snoozebtn = props.snoozebtn;
    const offBtnStatus = props.offbtn;


  //VISAR ALERT NÄR MAN KLICKAR SNOOZE
  const snoozeAlert = () => {
    const alert = document.createElement('aside');
    alert.innerHTML = '<h3 class="snooze-alert">Snoozing 5 min!</h3>';
    document.querySelector('section').appendChild(alert);
  }

  //TAR BORT ALERT 
  const removeSnoozeAlert = () => {
    const alert = document.querySelector('aside');
    document.querySelector('section').removeChild(alert);
  }

    //TOGGLE OFF/ON-STATUS PÅ SNOOZEBTN OCH SNOOZE-ALERT VID KLICK
    const turnOff = () => {

      //OM LARMET INTE ÄR AVSTÄNGT:
      if (offBtnStatus===false){
        snoozeAlert();
        //TAR BORT SNOOZE-ALERT EFTER 3 SEKUNDER
        setTimeout(() => {
          removeSnoozeAlert()
        }, 3000);

        return snoozebtn ? setSnoozeBtn(false) : setSnoozeBtn(true);
      } 
    }
    if (!offBtnStatus){
      return ( 
          <button onClick={turnOff} className="snooze-btn">Snooze</button>
      );
    } else {
      return ( 
        <button className="snooze-btn-remove">Snooze</button>
    );
    }
}
 
export default SnoozeBtn;
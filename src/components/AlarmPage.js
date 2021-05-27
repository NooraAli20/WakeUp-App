
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import ReactHowler from 'react-howler'
import alarmimg from '../assets/svg/alarm-img.svg';
import logo from '../assets/svg/Logo.svg';
import OffBtn from "./OffBtn"
import SnoozeBtn from "./SnoozeBtn"
import './AlarmPage.css'


const AlarmPage = (props) => {

    const location = useLocation();
    const {alarmTime, alarmSound } = location.alarmProps;

    console.log(alarmSound);

    const [playAlarm, setPlayAlarm] = useState(true);

    let offBtnStatus = props.offbtn;
    let alarmtime = props.alarmtime;
    let snoozetime = props.snoozetime;

    const background = (e) => {
      e.target.parentElement.className='alarm-section-transition'
    } 

    const handleSetOffClock = () => {
      setPlayAlarm(false);
    }

    //NÄR OFFBTN INTE ÄR KLICKAD RENDERAS FÖLJANDE UT 
    if (!offBtnStatus) {
      return ( 
          <section className='alarm-section' onLoad={background}>
             <img className="logo" src={logo} alt="logotype" />
             <img className="alarm-img" src={alarmimg} alt="alarm clock"/>
             <OffBtn offbtn={props.offbtn} setOffBtn={props.setOffBtn}  onClick={handleSetOffClock} />
             <SnoozeBtn offbtn={props.offbtn} snoozebtn={props.snoozebtn} setSnoozeBtn={props.setSnoozeBtn} />
             <ReactHowler
                src={[alarmSound]}
                playing={playAlarm}
                loop={true}
              />
          </section>
       );
       //NÄR OFFBTN ÄR KLICKAD RENDERAS FÖLJANDE UT 
       } else {
          return ( 
              <section className='alarm-section'>
                  <img className="logo" src={logo} alt="logotype" />
                  <img className="alarm-img-off" src={alarmimg} alt="alarm clock"/>
                  <OffBtn offbtn={props.offbtn} setOffBtn={props.setOffBtn} />
                  <SnoozeBtn offbtn={props.offbtn} snoozebtn={props.snoozebtn} setSnoozeBtn={props.setSnoozeBtn} alarmtime={alarmtime} snoozetime={snoozetime} />
              </section>
           );
       }
}
 
export default AlarmPage;
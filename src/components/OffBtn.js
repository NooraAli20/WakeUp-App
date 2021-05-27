
import './AlarmPage.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Link } from 'react-router-dom';

import exit from '../assets/svg/CloseIcon.svg'

const OffBtn = (props) => {
    const setOffBtn= props.setOffBtn;
    const offBtnState = props.offbtn;
    const useStyles = makeStyles((theme) => ({
        root: {
          width: 300 + theme.spacing(3) * 2,
        },
      }));
 
      const AirbnbSlider = withStyles({
        root: {
            color: '#877689',
            width: 195,
            position: 'relative',
            paddingBottom: 95,
          },
          thumb: {
            color: '#000000',
            fontSize: 35,
            height: 90,
            width: 90,
            backgroundColor: '#F7D859',
            border: '2px solid #ffffff',
            marginTop: -5,
            marginLeft: -12,
            '&$active': {
                backgroundColor: '#FCB64E',
                color: '#ffffff',
              },
            '&:focus, &:hover': {
              boxShadow: 'inherit',
              transition: 'all .2s ease-in',
            },
          },
          active: {},
          track: {
            height: 70,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            paddingRight: 10,
            border: '5px solid #ffffff',
            transition: 'all .2s ease-in',
          },
          rail: {
            height: 70,
            borderRadius: 50,
            border: '5px solid #ffffff',
            transition: 'all .2s ease-in',
          },
      })(Slider);
   
      //NÄR OFFBTN-STATUSEN ÄR FALSE RENDERAS FÖLJANDE SLIDE-KNAPP UT
      function AirbnbThumbComponent(props) {
        if (!offBtnState){
            return (
            <span {...props}>
                Off
            </span>
            );
        } else {
            return ('');
        }
      }
      
      //NÄR SLIDEKNAPPEN ÄR DRAGEN HELA VÄGEN TILL HÖGER ÄNDRAS OFFBTN-STATUSEN TILL TRUE
      function slideEvent(e) {
          let newValue = e.target.parentElement.children[2].value;
          
        if (newValue >= 100) {
            setOffBtn(true)
            let sectionClass = e.currentTarget.children[0].children[1].children[1].children[0].children[0]
            sectionClass.className = 'alarm-section'
        } 
      }
        const classes = useStyles();
        //NÄR OFFBTN-STATUSEN ÄR FALSE, DVS INTE KLICKAD, RENDERAS FÖLJANDE UT
        if (!offBtnState){
            return (
                <div className={classes.root}>  
                  <AirbnbSlider
                      onChange={slideEvent}
                      ThumbComponent={AirbnbThumbComponent}
                  />
                </div>
              );
        } else {
        //NÄR OFFBTN-STATUSEN ÄR TRUE, DVS KLICKAD, RENDERAS FÖLJANDE UT
            return (
              <>
                <h1 className="alarm-off-h1">Alarm off</h1>
                <Link to='/SetAlarm' ><img className="exit" src={exit} alt="exit" /></Link>
              </>
                );
        }
}
 
export default OffBtn;
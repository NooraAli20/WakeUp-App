import React, { useState } from 'react'
import Nav from './Nav'
import {
  makeStyles, Typography, AppBar, Toolbar, IconButton, Container, TextField, 
  Select as MuiSelect, MenuItem, FormControlLabel, Checkbox
} from '@material-ui/core';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '../assets/svg/alarm-img.svg'

import ClassicAlarm from '../assets/sounds/ClassicAlarm.mp3'
import CuteAlarm from '../assets/sounds/CuteAlarm.mp3'
import ElevatedAlarm from '../assets/sounds/ElevatedAlarm.mp3'
import ExtremeAlarm from '../assets/sounds/ExtremeAlarm.mp3'
import NatureAlarm from '../assets/sounds/NatureAlarm.mp3'
import WakeUp from '../assets/sounds/WakeUp.mp3'


import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  rightToolbar:{
    marginLeft: "auto"
  },
  menuButton:{
    fontSize: 50,
  },
  svg_icons:{
    transform : 'scale(1.8)',
    color: 'white'
  },
  clock_svg: {
    transform : 'scale(2.0)',
    paddingTop: 60,
    paddingBottom:60
  },
  accordionRound : {
    marginBottom:10, 
    borderRadius:30
  },
  formControlLabels: {
    fontWeight:'bold'
  },
  root:{
    padding: theme.spacing(2),
    backgroundImage:"linear-gradient(to right, orange , white)",
    borderRadius: 50,
    display: 'flex',
    justifyContent:'space-between',
    alignContent:'flex-start',
    '& .labelPlacementStart' :{
      margin: theme.spacing(2),
    }
  },
  innerDivs : {
    padding : theme.spacing(1),
  },

}));

function AddAlarm({llAlarms, setAlarmAdder }) {

    let history = useHistory();

    const [time, setTime] = useState("00:00");
    const [name, setName] = useState("");
    const [sound, setSound] = useState("classicAlarmSound");
    const [repeat, setRepeat] = useState(true);
    const [snooze, setSnooze] = useState(true);

    const allAlarmSounds = [
      {"sound" : "Classic", "soundAudio" : ClassicAlarm},
      {"sound" : "Cute", "soundAudio" : CuteAlarm},
      {"sound" : "Elevated ", "soundAudio" : ElevatedAlarm},
      {"sound" : "Extreme", "soundAudio" : ExtremeAlarm},
      {"sound" : "Nature", "soundAudio" : NatureAlarm},
      {"sound" : "Wake-Up", "soundAudio" : WakeUp}
    ];

    const classes = useStyles();

    const submitHandle = (e) => {
      e.preventDefault();
      
      const newAlarm = { time, name, sound, repeat, snooze };

      setAlarmAdder(prevAlarms => [...prevAlarms, newAlarm]);
      history.push('/setalarm');
    }

  return (
    <div>
      <Container maxWidth="xs" style={{ backgroundColor: '#555AA3', height: '100' }}>
        <form onSubmit={submitHandle} noValidate autoComplete="off">
          <header style={{ paddingBottom:20}}>
            <AppBar position="static" color="transparent" elevation={0}>
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                < Nav/>
                </IconButton>
                <IconButton edge="start" className={classes.rightToolbar} color="inherit" aria-label="circle" type="submit">
                  <AddCircleIcon className={classes.svg_icons}/>
                </IconButton>
              </Toolbar>
            </AppBar>
          </header>

          <div>
            <img src={AddIcon} className={classes.clock_svg} alt="AddIcon"/>
          </div>

          <div style={{ paddingTop:80, paddingRight:20}}>

            <div className={classes.innerDivs}>
              <FormControlLabel className={classes.root}
                  label={<Typography className={classes.formControlLabels}>Time</Typography>}
                  control={<TextField value={time} onChange={(e) => setTime(e.target.value)} InputProps={{ disableUnderline: true }} />}
                  labelPlacement="start"
              />
            </div>
            <div className={classes.innerDivs}>
              <FormControlLabel className={classes.root}
                  label={<Typography className={classes.formControlLabels}>Name</Typography>}
                  control={<TextField value={name} onChange={(e) => setName(e.target.value)} InputProps={{ disableUnderline: true }} />}
                  labelPlacement="start"
              />
            </div>
            <div className={classes.innerDivs}>
              <FormControlLabel className={classes.root}
                  label={<Typography className={classes.formControlLabels}>Sound</Typography>}
                  control={
                    <MuiSelect
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={sound}
                        onChange={(e) => setSound(e.target.value)}
                        disableUnderline
                        fullWidth
                        style={{ border: 0}}
                      >
                        {
                          allAlarmSounds.map( item => 
                            <MenuItem key={item.soundAudio} value={item.soundAudio}>{item.sound}</MenuItem>
                          )
                        }
                    </MuiSelect>
                  }
                  labelPlacement="start"
              />
            </div>
            <div className={classes.innerDivs}>
              <FormControlLabel className={classes.root}
                  label={<Typography className={classes.formControlLabels}>Repeat</Typography>}
                  control={<Checkbox
                    checked={repeat}
                    onChange={(e) => setRepeat(e.target.checked)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />}
                  labelPlacement="start"
              />
            </div>
            <div className={classes.innerDivs}>
              <FormControlLabel className={classes.root}
                  label={<Typography className={classes.formControlLabels}>Snooze</Typography>}
                  control={<Checkbox
                    checked={snooze}
                    onChange={(e) => setSnooze(e.target.checked)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />}
                  labelPlacement="start"
              />
            </div>

          </div>
        </form>
      </Container>
    </div>
  )
}

export default AddAlarm

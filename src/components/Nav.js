import React from 'react';
import './Nav.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'
import {ReactComponent as CloseBtn} from '../assets/svg/CloseIcon.svg'
import {ReactComponent as OpenMenu} from '../assets/svg/menuIcon.svg'


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => { //hanterar öppning av menyn
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => { //hanterar stängning av menyn
    setAnchorEl(null);
  };

  return (
    <div id="menu">
      <OpenMenu aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        
      </OpenMenu>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
            style: { //styling av material ui via paperprops
              background: `linear-gradient(to bottom right, #FCB64E, white)`,
              minWidth: `100vw`,
              display: `flex`,
              minHeight: `100vh`,
              position: `initial`,
              top: 0,
              left: 0
            }
          }}
      >
          <section className="wrapper">
              <div className="closeBtn">
                  <CloseBtn onClick={handleClose} />
              </div>
            <section className="menuItems">
                <MenuItem onClick={handleClose}>
                    <Link 
                    to='/setalarm'
                    className="link"
                    >
                    Set alarm
                </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link 
                    to='/addalarm'
                    className="link"
                    >
                        Add alarm
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link 
                    to='/Alarms'
                    className="link"
                    >
                        Alarms
                    </Link>
                </MenuItem>
            </section>
          </section>
      </Menu>
    </div>
  );
}
import React from 'react';

import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ComputerIcon from '@material-ui/icons/Computer';
import HistoryIcon from '@material-ui/icons/History';

import './styles.scss';

function Footer() {
  return (
      <footer className="containerFooter">

        <div> 
          <span className="item" style={{color: "#FF8700"}}>
            <RadioButtonCheckedIcon />NO AR
          </span>
          <span className="item">
            <ComputerIcon style={{ color: '#666666' }}/> ENCONTRO - 10:00
          </span>
          <span className="item">
            <HistoryIcon style={{ color: '#666666' }}/>
            <i>ultima atualização em 10:28</i>
          </span>
        </div>
        <div>
          <span>
            <i>Quinta, <b>30</b> de <b>Maio</b> de <b>2019</b></i>
            {/* eslint-disable-next-line */}
            <span style={{color: "#FF8700", fontSize: "25px"}}> // 10:30:42</span>
          </span>
        </div>
      </footer>
  );
}

export default Footer;
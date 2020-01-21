import React, { useState } from "react";

import { Button, Input, makeStyles, Modal, Backdrop, Fade } from "@material-ui/core";

import GraphicEqRoundedIcon from "@material-ui/icons/GraphicEqRounded";
import SecurityIcon from "@material-ui/icons/Security";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import CloseIcon from '@material-ui/icons/Close';

import "./styles.scss";

function Header(props) {


  const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      justifyContent: "flex-end",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
      width: "25%",
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    props.changeFilter(e.target.value);
  };
  
  return (
      <header className="headerContainer">
        <section className="divLeft">
          <Button variant="contained" className="btnWaves" color="primary">
            <GraphicEqRoundedIcon />
          </Button>
          <span className="toSeparate"></span>
          <Button variant="contained" className="btnSecury" color="secondary">
            <SecurityIcon style={{ color: '#666666' }}/>
          </Button>
          <Button variant="contained" className="btnPerson" color="primary">
            <PersonIcon />
          </Button>
          <Input type="text" name="search" onChange={handleChange} className="search" placeholder="Pesquisar..."/>
          <Button className="btnSearch">
            <SearchIcon />
          </Button>
        </section>

        <section className="divRight">
          <Button variant="contained" onClick={handleOpen} className="btnTune" color="secondary">
            <TuneIcon style={{ color: '#666666' }}/>
          </Button>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <div className="headerMenuSide"> 
                  <h2 id="transition-modal-title"><TuneIcon className="icon"/> Filtros</h2>
                  <Button
                    onClick={handleClose}
                    variant="contained" 
                    color="secondary"
                  >
                    <CloseIcon className="icon"/>
                  </Button>
                </div>
                <div className="contentMenuSide">              
                <p id="transition-modal-description"> <i>Utilize os filtros abaixo para refinar os resultados da tabela,
                  clique no botão APLICAR para salvar as alterações.</i> </p>
                </div>
              </div>
            </Fade>
          </Modal>
      
          <Button variant="contained" className="btnInclude" startIcon={<PersonIcon />} color="primary">
            Incluir Usuário
          </Button>
          <span className="toSeparate"></span>
          <Button>
            <HomeIcon className="icon"/>
          </Button>
          <Button>
            <SettingsIcon className="icon"/>
          </Button>
          <Button>
            <PowerSettingsNewIcon className="icon"/>
          </Button>
        </section>
      </header>
  );
}

export default Header;
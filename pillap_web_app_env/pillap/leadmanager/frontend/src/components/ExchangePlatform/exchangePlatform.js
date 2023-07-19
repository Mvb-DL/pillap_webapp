import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class exchangePlatform extends Component {

  state = {
    filledForm: false,
    messages: [],
    value: '',
    name: '',
    room: 'Pillap',
  }

  client = new W3CWebSocket('ws://127.0.0.1:8000/ws/' + this.state.room + '/'); //gets room_name from the state and connects to the backend server
  
  onButtonClicked = (e) => {
    this.client.send(
      JSON.stringify({
        type: "message",
        text: this.state.value,
        sender: this.state.name,
      })
    );
    this.state.value = "";
    e.preventDefault();
  };

  componentDidMount() {

    this.client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    this.client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      if (dataFromServer) {
        this.setState((state) => ({
          messages: [
            ...state.messages,
            {
              msg: dataFromServer.text,
              name: dataFromServer.sender,
            },
          ],
        }));
      }
    };
  }
  
  render() {
    const { classes } = this.props;7

    const styles = {

      main_button : {
        backgroundcolor: "#ed6524"
      }
    }
    return (

        <div class="row" style={{paddingLeft: "15%", paddingRight: "15%", marginTop: "5%", marginBottom: "10%"}}>

          <div class="col" style={{marginRight: "20%", paddingTop: "2%"}}>
            <h2 style={{paddingBottom: "5%", fontWeight: "700"}}>Die Pillap Tauschbörse</h2>
            <p>Auf der Webseite soll es eine Tauschbörse geben, bei dem die Kunden die gebrauchten Taschen verkaufen oder Einzelteile der Tasche untereinander austauschen oder erneuern können. So befindet sich die Laptoptasche in einem ständigen erneuerbaren Recycling-Prozess und unterstützt so stark den Aspekt der Nachhaltigkeit.</p>
          </div>

          <div class="col">

          {this.state.filledForm ? (
            <div style={{ marginTop: 10, fontWeight: "700", fontSize: "2em" }}>
              Chatraum: {this.state.room}
              <Paper
                style={{height: 300, maxHeight: 500, overflow: "auto", boxShadow: "none", }}
              >
                {this.state.messages.map((message) => (
                  <>
                    <Card className={classes.root}>
                      <CardHeader title={message.name} subheader={message.msg} />
                    </Card>
                  </>
                ))}
              </Paper>
              <form
                className={classes.form}
                noValidate
                onSubmit={this.onButtonClicked}
              >
                <TextField id="outlined-helperText" label="schreiben.." defaultValue="Default Value"
                  variant="outlined"
                  value={this.state.value}
                  fullWidth
                  onChange={(e) => {
                    this.setState({ value: e.target.value });
                    this.value = this.state.value;
                  }}
                />
                <Button type="submit" fullWidth variant="contained" style={{backgroundColor: "#ed6524", color: "white", fontWeight: "700"}}
                  className={classes.submit}
                >
                  Narchicht senden
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <CssBaseline />
              <div className={classes.paper}>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={(value) => this.setState({ filledForm: true })}
                >
                  <TextField variant="outlined" margin="normal" required fullWidth label="Raumname"
                    name="Room name"
                    autoFocus
                    value={this.state.room}
                    onChange={(e) => {
                      this.setState({ room: e.target.value });
                      this.value = this.state.room;
                    }}
                  />
                  <TextField variant="outlined" margin="normal" required fullWidth name="sender" label="Nutzername"
                    type="sender"
                    id="sender"
                    value={this.state.name}
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                      this.value = this.state.name;
                    }}
                  />
                  <Button type="submit" fullWidth variant="contained"
                    className={classes.submit} style={{backgroundColor: "#ed6524", color: "white", fontWeight: "700"}}
                  >
                    Zur Börse
                  </Button>
                </form>
              </div>
            </div>
        )}
        </div>

      </div>
    );
  }

}

export default withStyles(useStyles)(exchangePlatform);
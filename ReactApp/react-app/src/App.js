import React, { Component } from "react";
import Rainy from "./images/1Rainy.jpg";
import Umbrella from "./images/1Umbrella.jpg";
import Rainy_1Umbrella from "./images/1Rainy_1Umbrella.jpg";
import Summer from "./images/2Summer.jpg";
import Beach from "./images/2Beach.jpg";
import Summer_2Beach from "./images/2Summer_2Beach.jpg";
import Winter from "./images/3Winter.jpg";
import Sweter from "./images/3Sweter.jpg";
import Winter_3Sweter from "./images/3Winter_3Sweter.jpg";
/*import Rainy_Umbrella_ChaiBhajji from "./images/Rainy_Umbrella_ChaiBhajji.jpg";
import Summer_Beach_ChilloutOnBeach from "./images/Summer_Beach_ChilloutOnBeach.jpg";
import Winter_Sweter_SnowFall from "./images/Winter_Sweter_SnowFall.jpg"; */
import "./App.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import {images} from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      finalImageName: "",
      season: "",
      prop: "",
      enjoymentType: ""
    };
  }

  selectedSeason = async season => {
    console.log("Selected Season is " + season);
    //alert("Selected Season is " + season);
    await this.setState({ season: season });
  };
  selectedProp = async prop => {
    console.log("Selected prop is " + prop);
    //alert("Selected prop is " + prop);
    await this.setState({ prop: prop });
  };
  selectedEnjoyment = async enjoymentType => {
    console.log("Selected enjoymentType is " + enjoymentType);
    //alert("Selected enjoymentType is " + enjoymentType);

    await this.setState({
      enjoymentType: enjoymentType,
      displayModal: true
    });
    /*await this.setState({
      displayModal: true,
      finalImageName:
        this.state.season +
        "_" +
        this.state.prop +
        "_" +
        this.state.enjoymentType
    }); */
  };
  toggleModal = () => {
    this.setState({ displayModal: !this.state.displayModal });
  };
  render() {
    const { displayModal, prop, enjoymentType, season } = this.state;
    let finalImageName = season+"_"+prop+"_"+enjoymentType;
    /*if (season === "Rainy") finalImageName = Rainy_Umbrella_ChaiBhajji;
    else if (season === "Winter") finalImageName = Winter_Sweter_SnowFall;
    else if (season === "Summer") finalImageName = Summer_Beach_ChilloutOnBeach;*/
    console.log("Final image name is " + finalImageName);
    //alert("Final image name is " + finalImageName);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm " style={{ border: "ridge" }}>
            <span>Season</span>
          </div>
          <div className="col-sm" style={{ border: "ridge" }}>
            <span>Prop</span>
          </div>
          <div className="col-sm" style={{ border: "ridge" }}>
            <span>Enjoyment</span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm " style={{ border: "ridge" }}>
            <img src={Rainy} onClick={season => this.selectedSeason("Rainy")} />
          </div>
          <div className="col-sm" style={{ border: "ridge" }}>
            <img
              src={Umbrella}
              onClick={prop => this.selectedProp("Umbrella")}
            />
          </div>
          <div className="col-sm" style={{ border: "ridge" }}>
            <img
              src={Rainy_1Umbrella}
              onClick={enjoymentType => this.selectedEnjoyment("ChaiBhajji")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm" style={{ border: "ridge" }}>
            <img
              src={Summer}
              onClick={season => this.selectedSeason("Summer")}
            />
          </div>
          <div className="col-sm" style={{ border: "ridge" }}>
            <img src={Beach} onClick={prop => this.selectedProp("Beach")} />
          </div>
          <div className="col-sm" style={{ border: "ridge" }}>
            <img
              src={Summer_2Beach}
              onClick={enjoymentType =>
                this.selectedEnjoyment("ChilloutOnBeach")
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm" style={{ border: "ridge" }}>
            <img
              src={Winter}
              onClick={season => this.selectedSeason("Winter")}
            />
          </div>
          <div className="col-sm" style={{ border: "ridge" }}>
            <img src={Sweter} onClick={prop => this.selectedProp("Sweter")} />
          </div>
          <div className="col-sm" style={{ border: "ridge" }}>
            <img
              src={Winter_3Sweter}
              onClick={enjoymentType => this.selectedEnjoyment("SnowFall")}
            />
          </div>
        </div>
        {displayModal ? (
          <Modal isOpen={displayModal} toggle={this.toggleModal} size="xl">
            <ModalHeader toggle={this.toggleModal}>You are enjoing</ModalHeader>
            <ModalBody>
              <div align="center">
                <img src={images[finalImageName]} />
              </div>
            </ModalBody>
            <ModalFooter>
              <button color="primary" onClick={this.toggleModal}>
                Ok
              </button>{" "}
              <button color="secondary" onClick={this.toggleModal}>
                Cancel
              </button>
            </ModalFooter>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;

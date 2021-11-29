import React, { Component } from "react";
import { CookiesInfo } from "../../Data";

const InfoContext = React.createContext();

class InfoProvider extends Component {
  state = {
    CookiesInfo: CookiesInfo,
  };

  render() {
    return (
      <InfoContext.Provider
        value={{
          CookiesInfo: this.state.CookiesInfo,
        }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext;

export { InfoProvider, InfoConsumer };

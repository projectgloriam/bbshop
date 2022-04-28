import React from "react"
import PropTypes from "prop-types"
import Header from "components/Header"
import Body from "components/Body"


class Main extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default Main

import React from "react";
import Header from "./Header";

type Props = {
  propName?: React.ReactNode;
};

class Detail extends React.PureComponent<Props> {
  render() {
    const {
      propName
    } = this.props;
    return (
      <>
        <Header backButton={propName} />
      </>
    );
  }
}

export default Detail;
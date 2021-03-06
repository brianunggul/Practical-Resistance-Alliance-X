import React, { Component } from "react";
import ToolkitCardView from "./ToolkitCardView";
import NewToolkitButton from "./NewToolkitButton";

export class ToolkitsListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dummyInfo: this.props.toolkits
    };
  }
  renderToolkitList() {
    return this.state.dummyInfo.map((info, index) => {
      return (
        <div className="col-md-4 pt-3" key={index}>
          <ToolkitCardView info={info} />
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="toolkits-list-header pt-5">
          <i className="fa fa-diamond" aria-hidden="true" />
          <h1>{this.props.kind}</h1>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-3">
              <NewToolkitButton />
            </div>
            {this.renderToolkitList()}
          </div>
        </div>
      </div>
    );
  }
}

export default ToolkitsListPage;

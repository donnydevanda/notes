import React from "react";
import Card from "./reusable/card";

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, this.state.limit),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addDatas(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <Card class="px-3 py-3">
        <h2 className="h5">Add Note</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <div className="row-12 mt-1">
            <label className="form-label">Title:</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
              className="form-control"
            />
          </div>
          <div className="row-12 mt-2">
            <label className="form-label">Body:</label>
            <textarea
              type="text"
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
              className="form-control"
              rows={3}
            />
          </div>
          <div className="row-6 mt-2">
            <button className="btn btn-success mt-2">Save Note</button>
          </div>
        </form>
      </Card>
    );
  }
}

export default AddNote;

import React from "react";
import AddNote from "./addNote";
import ListNote from "./listNote";
import SearchNote from "./searchNote";
import Title from "./reusable/title";
import Card from "./reusable/card";
import { initialData } from "../utils/data";

class MainNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: initialData(),
    };

    this.onAddDatasHandler = this.onAddDatasHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onAddDatasHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        datas: [
          ...prevState.datas,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const datas = this.state.datas.filter((data) => data.id !== id);
    this.setState({ datas });
  }

  render() {
    return (
      <>
        <Card class="mx-5 my-5">
          <Title>Notes App</Title>
          <AddNote addDatas={this.onAddDatasHandler} />
          <SearchNote />
          <ListNote data={this.state.datas} onDelete={this.onDeleteHandler} />
        </Card>
      </>
    );
  }
}

export default MainNote;

import React, { Component } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import countries, {all_voters, countryNameMap, edition_id, get_countries, magic_code} from "./constants";
import { getFlagForCountry } from "./images";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import queryString from "query-string";

function handleErrors(response) {
  if (!response.ok) {
    throw Error("Did you pick a name?");
  }
  return response;
}

export default class Vote extends Component {
  constructor(props) {
    super(props);
      let params = queryString.parse(location.search);
      let edition = ""
      if ("edition" in params && params["edition"].length > 0) {
          edition = params["edition"].toLowerCase();
      }
      let voter_list = all_voters;
      if ("voters" in params && params["voters"].length > 0) {
          const additional_voters = params["voters"].toLowerCase().split(",");
          voter_list = voter_list.concat(additional_voters)
      }

    this.state = {
      all_countries: get_countries(edition),
      unlocked: true,
      code: "",
      edition: edition,
        voter_list: voter_list
    };
  }

  onDragEnd = (result) => {
    if (!result.destination) return;
    const country_list = this.state["all_countries"];
    const items = Array.from(country_list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    console.log(items);
    this.setState({ all_countries: items });
  };

  votingButtonComponent(country) {
    return (
      <div className={"country country--small"}>
        <span className={"country__flag"}>
          <img src={getFlagForCountry(country)} />
        </span>
        <span className={"country__name"}>
          {countryNameMap[country.toLowerCase()]}
        </span>
      </div>
    );
  }

  sendVote() {
    const votes = this.state["all_countries"].map((value, index) => {
      return { rank: index + 1, code: value };
    });
    fetch("https://django-cloudrun-4fdxp3ewaq-ew.a.run.app/cast-vote", {
      method: "post",
      body: JSON.stringify({ name: this.state["currentVoter"], votes: votes , edition: edition_id(this.state["edition"])}),
    })
      .then(handleErrors)
      .then((response) => {
        alert(this.state["currentVoter"] + ", thank you for your vote.");
      })
      .catch((error) => {
        alert(error);
      });
  }

  _onSelect(event) {
    console.log(event);
    this.setState({ currentVoter: event.value });
  }

  check_code(){
    if(this.state["code"] === magic_code){
      this.setState({"unlocked": true})
    }
  }

  block_entry(){
    return (
        <div className="votingPassword">
          <input type={"text"} value={this.state["code"]} onChange={event =>
          {
            this.setState({"code": event.target.value})
          }}
                 onKeyUp={ event => {
                   if (event.keyCode === 13) {
                     this.check_code()
                   }
                 }}/>
          <button onClick={this.check_code.bind(this)}>Enter</button>
        </div>
    )
  }

  whatever(){
    const edition = this.state["edition"]
      const name=`votingPanel ${edition}`
      return (
        <div className={name}>
          <h2>Select your name</h2>
          <Dropdown
              options={this.state["voter_list"]}
              onChange={this._onSelect.bind(this)}
              value={"Choose Your Name!"}
              placeholder="Who are you??"
          />
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="votes">
              {(provided) => (
                  <div
                      className="votes"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                  >
                    {this.state["all_countries"].map((value, index) => {
                      return (
                          <Draggable key={value} draggableId={value} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="vote"
                                >
                                  {this.votingButtonComponent(value)}
                                </div>
                            )}
                          </Draggable>
                      );
                    })}

                    {provided.placeholder}
                  </div>
              )}
            </Droppable>
          </DragDropContext>
          <button onClick={this.sendVote.bind(this)}>Submit</button>
        </div>
        );
  }

  render() {
    console.log(this.state["unlocked"])
    const to_render = this.whatever()
    return (to_render);
  }
}

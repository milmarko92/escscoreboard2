import React, { Component } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import countries, {all_voters, countryNameMap, currentEdition, magic_code} from "./constants";
import { getFlagForCountry } from "./images";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function handleErrors(response) {
  if (!response.ok) {
    throw Error("Did you pick a name?");
  }
  return response;
}

export default class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_countries: countries,
      unlocked: false,
      code: "",
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
    fetch("https://django-cloudrun-ed7wjo25ka-ew.a.run.app/cast-vote", {
      method: "post",
      body: JSON.stringify({ name: this.state["currentVoter"], votes: votes , edition: currentEdition}),
    })
      .then(handleErrors)
      .then((response) => {
        alert(this.state["currentVoter"] + ", thank you for your vote.");
      })
      .catch((error) => {
        alert(error);
      });
    // console.log("cdfvgbh")
    // var xhr = new XMLHttpRequest()
    //
    // // get a callback when the server responds
    // xhr.addEventListener('load', () => {
    //     // update the state of the component with the result here
    //     console.log(xhr.responseText)
    // })
    // const votes = this.state["all_countries"].map(
    //     (value, index) => {
    //         return {rank: index+1, code: value}
    //     }
    // )
    // console.log(votes)
    // // open the request with the verb and the url
    // xhr.open('POST', 'https://django-cloudrun-ed7wjo25ka-ew.a.run.app/cast-vote')
    // xhr.send(JSON.stringify({ name: this.state["currentVoter"],  votes: votes}))
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
    return (
        <div className="votingPanel">
          <h2>Select your name</h2>
          <Dropdown
              options={all_voters}
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
    const to_render = this.state["unlocked"] ? this.whatever() : this.block_entry()
    return (to_render);
  }
}

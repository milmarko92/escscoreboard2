import React, {Component} from "react";
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import countries, {all_voters, countryNameMap} from "./constants";
import {getFlagForCountry} from "./images";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "all_countries": countries,
        }
    }

    onDragEnd = result => {
        if (!result.destination) return;
        const country_list = this.state["all_countries"]
        const items = Array.from(country_list);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        console.log(items)
        this.setState({"all_countries": items});
    }

    votingButtonComponent(country) {
        return (
            <div className={"country country--small"}>
                <span className={"country__flag"}>
                    <img src={getFlagForCountry(country)}/>
                </span>
                <span className={"country__name"}>
                    {countryNameMap[country.toLowerCase()]}
                </span>
            </div>
        )

    }

    sendVote(){
        console.log("cdfvgbh")
        var xhr = new XMLHttpRequest()

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
        })
        const votes = this.state["all_countries"].map(
            (value, index) => {
                return {rank: index+1, code: value}
            }
        )
        console.log(votes)
        // open the request with the verb and the url
        xhr.open('POST', 'https://django-cloudrun-ed7wjo25ka-ew.a.run.app/cast-vote')
        xhr.send(JSON.stringify({ name: this.state["currentVoter"],  votes: votes}))
        // send the request
        xhr.send()
    }

    _onSelect(event){
        console.log(event)
        this.setState({"currentVoter": event.value})
    }

    render() {
        return (
            <div>
            <Dropdown options={all_voters} onChange={this._onSelect.bind(this)} value={all_voters[0]} placeholder="Who are you??" />
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="votes">
                    {
                        (provided) =>(
                            <div className="votes" {...provided.droppableProps} ref={provided.innerRef}>
                                {this.state["all_countries"].map(
                                (value, index) => {
                                    return (
                                        <Draggable key={value} draggableId={value} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <span key={value}>{this.votingButtonComponent(value)}</span>
                                                </li>
                                            )}
                                        </Draggable>
                                    )
                                })
                                }

                                {provided.placeholder}
                            </div>
                        )
                    }
                </Droppable>
            </DragDropContext>
            <button onClick={this.sendVote.bind(this)}>Submit</button>
            </div>
        )
    }
}

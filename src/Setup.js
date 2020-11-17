import React, {Component} from "react";
import countries, {all_voters, countryNameMap} from "./constants";
import {getFlagForCountry} from "./images";
import { Redirect } from 'react-router-dom'

class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "selected_countries": [],
            "remaining_countries": countries,
            "selected_voters": [],
            "remaining_voters": all_voters,
            "done": false,
            "additional_voter": ""
        }
    }

    remove_from_list(list, element){
        let list_copy = []
        for (let i = 0; i < list.length; i++){
            if( list[i] !== element) {
                list_copy.push(list[i])
            }
        }
        return list_copy
    }

    countryElement(country) {
        return (
            <div className={"country country--small"} onClick={e => {
                let new_selected = this.state["selected_countries"]
                new_selected.push(country)
                let new_remaining = this.remove_from_list(this.state["remaining_countries"], country)
                this.setState({
                    "selected_countries" : new_selected,
                    "remaining_countries": new_remaining
                })
                console.log(this.state["selected_countries"])
            }}>
                <span className={"country__flag"}>
                    <img alt="" src={getFlagForCountry(country)}/>
                </span>
                <span className={"country__name"}>
                    {countryNameMap[country.toLowerCase()]}
                </span>
            </div>
        )

    }

    selectedCountryElement(country) {
        return (
            <div className={"country country--small"} onClick={e => {
                let new_remaining = this.state["remaining_countries"]
                new_remaining.push(country)
                let new_selected = this.remove_from_list(this.state["selected_countries"], country)
                this.setState({
                    "selected_countries" : new_selected,
                    "remaining_countries": new_remaining
                })
            }}>
                <span className={"country__flag"}>
                    <img alt="" src={getFlagForCountry(country)}/>
                </span>
                <span className={"country__name"}>
                    {countryNameMap[country.toLowerCase()]}
                </span>
            </div>
        )
    }
    voterElement(voter) {
        return (
            <div className={"country country--small"} onClick={e => {
                let new_selected = this.state["selected_voters"]
                new_selected.push(voter)
                let new_remaining = this.remove_from_list(this.state["remaining_voters"], voter)
                this.setState({
                    "selected_voters" : new_selected,
                    "remaining_voters": new_remaining
                })
                console.log(this.state["selected_voters"])
            }}>
                <span className={"country__name2"}>
                    {voter}
                </span>
            </div>
        )

    }

    selectedVoterElement(voter) {
        return (
            <div className={"country country--small"} onClick={e => {
                let new_remaining = this.state["remaining_voters"]
                new_remaining.push(voter)
                let new_selected = this.remove_from_list(this.state["selected_voters"], voter)
                this.setState({
                    "selected_voters" : new_selected,
                    "remaining_voter": new_remaining
                })
            }}>
                <span className={"country__name2"}>
                    {voter}
                </span>
            </div>
        )
    }

    add_voter(){
        let voters = this.state.remaining_voters
        voters.push(this.state.additional_voter)
        this.setState({"remaining_voters": voters, "additional_voter": ""})
    }

    render() {
        console.log(this.state["selected_countries"])
        console.log(this.state["remaining_countries"])
        if(this.state["done"] === true){
            const search = `?country_list=${this.state["selected_countries"].join(",")}&voters=${this.state["selected_voters"].join(",")}`
            return (<Redirect to={{
                    pathname:"/scoreboard",
                    search: search,
                    state: {}
                    }}/>
            )
        }

        return (
            <section id="picker">
                <div>
                    <h2>Selected Countries</h2>
                    {
                        this.state["selected_countries"].map((country, index) => this.selectedCountryElement(country))
                    }
                </div>
                <div>
                    <h2>List of Countries</h2>
                    {
                        this.state["remaining_countries"].map((country, index) => this.countryElement(country))
                    }
                </div>
                <div>
                    <h2>Selected Voters</h2>
                    {
                        this.state["selected_voters"].map((voter, index) => this.selectedVoterElement(voter))
                    }
                </div>
                <div>
                    <h2>List of Voters</h2>
                    {
                        this.state["remaining_voters"].map((voter, index) => this.voterElement(voter))
                    }
                </div>
                <div>
                    <input type={"text"} value={this.state.additional_voter} onChange={event =>
                    {
                        console.log(event.target.value)
                        this.setState({"additional_voter": event.target.value})
                    }}
                    onKeyUp={ event => {
                    if (event.keyCode === 13) {
                        this.add_voter()
                    }
                    }}/>
                    <button onClick={this.add_voter.bind(this)}>Add voter</button>
                </div>
                <button onClick={() => this.setState({"done": true})}>Save</button>
            </section>
                    // countries.forEach(country => this.votingButtonComponent(country))
        )
    }
}

export default Setup
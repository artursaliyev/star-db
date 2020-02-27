import React, { Component } from "react";

import "./person-details.css";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ErrorButton from "../error-button";
import api from "../../service";

export default class PersonDetails extends Component {
  state = {
    person: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
      console.log("componentDidUpdate");
      this.updatePerson();
    }
  }

  onError = e => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePerson = () => {
    const { personId } = this.props;

    if (!personId) {
      return;
    }
    this.setState({ loading: true, person: {} });
    api.persons
      .get(personId)
      .then(person => {
        this.setState({ person, loading: false });
      })
      .catch(this.onError);
  };

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }

    const { loading, error } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const hasData = !(error || loading);
    const content = hasData ? <Content data={this.state.person} /> : null;

    return (
      <div className="person-details card">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const Content = ({ data }) => {
  const { id, name, gender, birthYear, eyeColor } = data;
  return (
    <>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="person"
      />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </>
  );
};

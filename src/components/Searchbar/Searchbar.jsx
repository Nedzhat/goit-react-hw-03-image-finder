import { Component } from "react";
import PropTypes from 'prop-types';
import { Header, SearchForm, SearchFormButton, SearchFormInput } from "./Searchbar.styled";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
    state = {
        query: '',
    }

    handleChangeSearchQuery = event => {
        event.preventDefault();
        this.setState({
            query: event.currentTarget.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.query.trim() === '') {
        return toast.error("Необходимо заполнить поле поиска!");
        }
        this.props.onSubmit(this.state.query);
        this.setState({
            query: '',
        })
    }

    render() {
        return <Header>
            <SearchForm onSubmit={this.handleSubmit}>
                <SearchFormButton type="submit">
                    <span>Search</span>
                </SearchFormButton>

                <SearchFormInput
                    type="text"
                    autocomplete="off"
                    placeholder="Search images and photos"
                    value={this.state.query}
                    onChange={this.handleChangeSearchQuery}
                />
            </SearchForm>
        </Header >
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
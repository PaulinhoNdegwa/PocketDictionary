import React, { Component } from 'react';
import axios from 'axios';
import WordDetails from '../WordDetails';
import Search from '../Search';

import details from '../../assets/mock-data/data';
import Loader from '../Loader';

class Main extends Component {
    state = {
        loading: false,
        word: "hello",
        lang: "en_US",
        response: null,
        error: false,
        errorMessage: "Error accessing server. Try again later or contact the admin."
    }

    componentDidMount() {
        this.handleSubmit()
    }

    handleWordChange = e => this.setState({ word: e.target.value });
    handleLangChange = e => this.setState({ lang: e.target.value });

    handleSubmit = () => {
        const { word, lang } = this.state;
        this.setState({ loading: true, response: null });
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`)
            .then(response => {
                this.setState({
                    response: response.data[0]
                });
                this.setState({ loading: false });
            })
            .catch(error => {
                this.setState({ loading: false, error: true });
            });
    }

    render() {
        const { loading, response, lang, word, error, errorMessage } = this.state;
        return (
            <div className="flex-1 py-1 px-3 max-w-3xl w-full sm:mx-auto">
                <Search
                    handleWordChange={this.handleWordChange}
                    handleLangChange={this.handleLangChange}
                    handleSubmit={this.handleSubmit}
                    lang={lang}
                    word={word}
                />
                <hr />
                <div>
                    {loading ? (
                        <Loader />
                    ) : (
                        error ? (
                            <div className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded relative my-5" role="alert">
                                <strong className="font-bold">Alert! </strong>
                                <span className="block sm:inline">{errorMessage}</span>
                            </div>
                        ) : (
                            <WordDetails details={response ? response : details} lang={lang} word={word} />

                        )
                    )}
                </div>
            </div>
        );
    }
}

export default Main;

import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { handleWordChange, handleLangChange, handleSubmit, word, lang } = this.props;
        return (
            <form autoComplete="off" className="flex flex-col px-4 mb-2 sm:flex-row sm:flex-wrap sm:justify-evenly">
                <div className="flex-1 my-1 mx-1">
                    <label className="block text-sm text-md text-gray-500 py-1" htmlFor="word">Enter Word</label>
                    <input autoComplete="off" onChange={handleWordChange}  value={word} className="w-full h-9 py-1 border-b-1 border-gray-500 text-md rounded-lg focus:border-lg focus:border-indigo-500" type="text" name="word" id="word" placeholder="Enter search word" />
                </div>
                <div className="flex-1 my-1 mx-1">
                    <label className="block text-sm text-md text-gray-500 py-1" htmlFor="lang">Choose Language</label>
                    <select name="lang" id="lang" value={lang} onChange={handleLangChange} className="w-full h-9 py-1 border-gray-500 text-sm rounded-lg focus:border-lg focus:border-indigo-500">
                        <option value="en_US">English(US)</option>
                        <option value="en">English(UK)</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>
                <div className="flex-1 items-center mt-1 mx-1">
                    <button className="bg-indigo-500 py-1.5 w-full sm:h-9 sm:mt-7 sm:px-4 text-white font-semibold rounded-md hover:bg-indigo-700" onClick={handleSubmit} type="button">Search</button>
                </div>
            </form>
        );
    }
}

export default Search;

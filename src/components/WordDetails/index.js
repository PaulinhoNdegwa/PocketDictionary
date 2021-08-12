const WordDetails = props => {
    const { details } = props;
    const mapSynonyms = synonyms => {
        return synonyms.map((synonym, index) => {
            return <span className="font-normal text-gray-600 text-sm italic" key={index}>{synonym}, </span>
        })
    }

    const mapDefinitions = definitions => {
        return definitions.map((definition, index) => {
            return (
                <li key={index}>
                    <p className="font-base text-gray-900"> - {definition.definition}</p>
                    <p className="font-light pl-8">Eg. {definition.example}</p>
                    {definition.synonyms.length > 0 ? <p>Synonyms: {mapSynonyms(definition.synonyms)}</p> : null}
                    {definition.antonyms.length > 0 ? <p>Antonyms: {mapSynonyms(definition.antonyms)}</p> : null}
                </li>

            )
        })
    }

    const mapMeanings = (meanings) => {
        return meanings.map((meaning, index) => {
            return (
                <li className="mx-4" key={index}>
                    <p>{index + 1}. <span className="italic font-semibold">{meaning.partOfSpeech}</span></p>
                    <ul>{mapDefinitions(meaning.definitions)}</ul>
                    <hr className="my-2" />
                </li>
            )
        });
    }
    return (
        <div className="px-6 py-2">
            <p className="text-lg capitalize font-bold my-1">{details.word}</p>
            <p className="font-light text-base text-indigo-500 font-semibold font-sans my-1">{details.phonetic}</p>
            <p>Origin: <span className="italic text-base text-gray-600 my-1">{details.origin}</span></p>
            <div className="my-3">
                <ul>
                    {mapMeanings(details.meanings)}
                </ul>
            </div>
        </div>
    );
}

export default WordDetails;
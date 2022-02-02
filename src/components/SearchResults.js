import React, { useContext } from 'react';
import ResultCard from './ResultCard';
import { AppContext } from './SearchPage';

const SearchResults = () => {
	const context = useContext(AppContext);

	const createCards = () => {
		return context.results.length > 0 ? (
			context.results.map((result) => {
				const jobDescription = result.contents
					.substring(0, 100)
					.replace(/(<([^>]+)>)/gi, '');
				return (
					<ResultCard
						key={result.id}
						name={result.name}
						company={result.company}
						locations={result.locations}
						contents={jobDescription}
					/>
				);
			})
		) : (
			<p>No results found</p>
		);
	};
	return <div>{createCards()}</div>;
};

export default SearchResults;

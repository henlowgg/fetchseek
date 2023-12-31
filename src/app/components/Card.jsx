import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Dog } from "../utils/types";

const DogCard = ({ dog, selected, setSelectedDogs }) => {
	const handleSelect = (id) => {
		if (selected.includes(id)) {
			toast.dark("Removed from favorites :(");
			setSelectedDogs((prevSelectedDogs) =>
				prevSelectedDogs.filter((dogId) => dogId !== id)
			);
		} else {
			toast.dark("Added to Favorites!");
			setSelectedDogs((prevSelectedDogs) => [...prevSelectedDogs, id]);
		}
	};

	return (
		<div className="flex">
			<div className="max-w-[75rem] px-2 md:px-4 lg:px-6">
				<div className="posts mb-8 grid grid-cols-4 grid-rows-1 gap-6 sm:flex">
					{/* lol, recognize this? */}
					<a className="blog-card grow-1 post flex w-full flex-col rounded-2xl bg-white p-5 sm:rounded-xl">
						<img
							className="blog-section-blog-post-image mb-3 aspect-square max-h-[15rem] object-cover"
							loading="lazy"
							width="300"
							height="300"
							src={dog.img}
							alt="dog photo"
						/>

						<div className="flex h-full flex-col justify-between">
							<p className="mb-2 font-lexend text-base font-bold leading-6 text-fetch-dark-purple text-primary line-clamp-4 sm:mb-3 sm:text-xl">
								{dog.name}, {dog.age} <br></br> {dog.breed}, {dog.zip_code}
							</p>
						</div>

						<p
							className="btn btn__link mb-0 hidden text-lg sm:block"
							onClick={() => handleSelect(dog.id)}
						>
							Favorite
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default DogCard;

import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//add into an array -> concat
// delete from an array -> filter
// update in the middle of array -> map

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	
	return (
		<div className="container">
			<h1 className="text-center mt-5">My Todo's</h1>
			<ul>
				<li>
					<input 
						type="text"
						onChange={(e) => setInputValue(e.target.value)} 
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") { 
								setTodos(todos.concat(inputValue));
								setInputValue = "";
							}
						}}
							placeholder="what do you need to do?"/>
				</li>

				{todos.map((item, index) => (
					<li>
						{item}{""}<i class="fa-solid fa-xmark" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))}></i>
					</li>
				))}
			</ul>
			<div>{todos.length}Tasks</div>
		</div>
	);
};

export default Home;

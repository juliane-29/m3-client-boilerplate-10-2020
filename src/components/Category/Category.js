import React from "react";
import categories from "../jsonFiles/categories.json";
import "./Category.css";

function Category() {
	return (
		<div className="container">
			{categories.map((categoryObj, index) => {
				if (index <= 4)
				return (
					<div key={index} className="icon-box">
						<div
							style={{
								height: "60px",
								width: "60px",
								borderRadius: "70px",
								border: "1px solid #EBF0FF",
							}}
						>
							<div className="icon">
								<img alt="icon-category" id="icon" src={categoryObj.icon} />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Category;

import React, { ReactElement } from "react";

export interface MenuItemProps {
	item: React.ReactNode;
	isActive: boolean;
	onSelect: () => void;
}


const MenuItem = (props: MenuItemProps): ReactElement => (
	<li className="Category-list-item" onClick={() => props.onSelect()}>
		<a
			className={
				props.isActive
					? "Category-list-item-text-active"
					: "Category-list-item-text"
			}
		>
			{props.item}
		</a>
	</li>
);

export default React.memo(MenuItem);

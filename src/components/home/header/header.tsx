import { headerItem } from "../../../constant/header";

export default function Header() {
	return (
		<div className="flex bg-gray-200 w-full justify-around p-6">
			<div>LOGO</div>
			<div className="flex gap-2">
				{headerItem.map((item) => (
					<a href={item.rout} key={item.id}>
						{item.title}
					</a>
				))}
			</div>
		</div>
	);
}

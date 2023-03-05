import Image from "next/image";
import background from "../public/background.png";
const Screen = () => {
	return (
		<div className="w-[1280px] h-[720px]">
			<Image alt="background" src={background} />
		</div>
	);
};

export default Screen;

import MainCanvas from "@/components/MainCanvas";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Level Editor</title>
			</Head>
			<div className="bg-[#303030] h-full w-full flex items-center justify-center">
				<MainCanvas />
			</div>
		</>
	);
}

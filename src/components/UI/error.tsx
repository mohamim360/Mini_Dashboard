import { VscError } from "react-icons/vsc";

type ErrorProps = {
	error?: string;
};

function Error({ error }: ErrorProps) {
	return (
		<div className="flex flex-col items-center justify-center h-[70vh] w-full">
			<div className="flex items-center gap-2 px-6 py-4 rounded-xl bg-red-600/20 border border-red-500/40 shadow-md">

				<VscError className="text-red-500 text-2xl" />

				<p className="text-red-400 font-medium text-lg">{error || "Something went wrong"}
				</p>
				
			</div>
		</div>
	);
}

export default Error;

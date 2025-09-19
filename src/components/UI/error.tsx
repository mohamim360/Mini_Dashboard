import { VscError } from "react-icons/vsc";

type ErrorProps = {
  error?: string;
};

function Error({ error }: ErrorProps) {
	return (
		<>
		<p className="text-gray-800 font-semibold gap-1 text-lg flex items-center justify-center h-[70vh]"><VscError /> {error}</p>
		</>
	)
}
export default Error
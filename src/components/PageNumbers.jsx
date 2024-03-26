import ForwardArrow from "../assets/ForwardArrow";
import BackArrow from "../assets/BackArrow";
import Button from "./Button";

const PageNumbers = ({ totalPages, currentPage, setCurrentPage }) => {
	const handlePageBack = () => {
		if (currentPage - 1 < 1) {
			setCurrentPage(1);
		} else {
			setCurrentPage(currentPage - 1);
		}
	};
	const handlePageForward = () => {
		if (currentPage + 1 > totalPages) {
			setCurrentPage(totalPages);
		} else {
			setCurrentPage(currentPage + 1);
		}
	};
	return (
		<div className="page-numbers-parent">
			<Button onClick={handlePageBack} className="back-arrow">
				<BackArrow />
			</Button>
			<div>
				{currentPage} of {totalPages}
			</div>
			<Button onClick={handlePageForward} className="forward-arrow">
				<ForwardArrow />
			</Button>
		</div>
	);
};

export default PageNumbers;

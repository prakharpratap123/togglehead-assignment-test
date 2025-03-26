import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./style.scss";

const Card = ({ index }: { index: number }) => {
  return (
    <div id="card">
      <div className="title">Lorem Ipsum</div>
      <div className="desc">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
      </div>
      <button
        className="know-more"
        onClick={() => alert(`This is card no. ${index + 1}`)}
      >
        Know More
        <div className="icon">
          <KeyboardArrowRightIcon />
        </div>
      </button>
    </div>
  );
};

export default Card;

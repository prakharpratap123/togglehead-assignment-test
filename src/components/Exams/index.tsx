import Calendar from "../../assets/icons/Calendar";
import "./style.scss";

const exams = [
  {
    date: "02th October 2014",
    level: "Level 1 exam",
  },
  {
    date: "Nov-Dec 2016",
    level: "Level 2",
    description: ["Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    date: "Ongoing this year",
    level: "Level 3 (Grad)",
  },
];

const Exams = () => {
  return (
    <section className="upcoming-exams">
      <div className="exam-heading">
        <div className="heading">Upcoming Examinations</div>
        <div className="desc">
          Enquire about the examination & register for the exams
        </div>
      </div>

      <div className="vertical-border"></div>

      {exams.map((exam, index) => (
        <div key={index} className="exam-card">
          <Calendar />
          <div>
            <div className="exam-date">{exam.date}</div>
            <div className="exam-level">{exam.level}</div>
            {exam.description && (
              <div className="exam-description">
                {exam.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Exams;

import { useParams } from 'react-router-dom';
import '../styles/Syllabus.css';

const syllabusPDFs = {
  bca: "/syllabus/bca.pdf",
  mca: "/syllabus/mca.pdf",
  "b-sc-cs": "/syllabus/bsc_cs.pdf",
  "m-sc-cs": "/syllabus/msc_cs.pdf"
};

function Syllabus() {
  const { course } = useParams();
  const pdf = syllabusPDFs[course];

  return (
    <div className="syllabus">
      <h1>{course.toUpperCase()} Syllabus</h1>
      {pdf ? (
        <iframe
          src={pdf}
          title="Syllabus PDF"
          width="100%"
          height="600px"
        ></iframe>
      ) : (
        <p>No syllabus found for this course.</p>
      )}
    </div>
  );
}

export default Syllabus;

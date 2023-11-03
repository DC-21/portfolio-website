
interface ParagraphProps {
  content: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ content }) => {
  return <div className="text-gray-400 my-1">{content}</div>;
};

export default Paragraph;

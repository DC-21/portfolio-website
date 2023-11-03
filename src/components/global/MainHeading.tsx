
interface MainHeadingProps {
  content: string;
}

const MainHeading: React.FC<MainHeadingProps> = ({ content }) => {
  return (
    <div className="w-full text-[36px] my-1 md:text-[46px] lg:text-[55px] font-bold leading-none">
      {content}
    </div>
  );
};

export default MainHeading;

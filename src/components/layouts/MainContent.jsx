
import CardDark from "../template/TemplateDarkMode";

function MainContent(props) {
  const { children } = props;
  return (
    <>
      <CardDark>
        <section className="h-full  dark:bg-slate-700">{children}</section>
      </CardDark>
    </>
  );
}

export default MainContent;

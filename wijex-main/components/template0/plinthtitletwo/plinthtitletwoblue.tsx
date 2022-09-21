type PlinthTitleProps = {
  title: string;
};

const PlinthTitleTwoBlue = (props: PlinthTitleProps) => {
  return (
    <section id='contactprofile'>
      <div className="py-5 flex center items-center bg-gradient-to-r from-fourth to-primary">
        <h1 className="mx-auto text-l font-semibold leading-none tracking-tighter text-whitecolor lg:text-2xl title-font"> {props.title} </h1>
      </div>
    </section>
  );
}

export { PlinthTitleTwoBlue };
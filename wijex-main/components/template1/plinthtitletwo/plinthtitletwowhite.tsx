type PlinthTitleProps = {
  title: string;
};

const PlinthTitleTwoWhite = (props: PlinthTitleProps) => {
  return (
    <section id='contactprofile'>
      <div className="py-4 flex center items-center bg-fifth">
        <h1 className="mx-auto text-l font-semibold leading-none tracking-tighter text-whitecolor lg:text-xl title-font"> {props.title} </h1>
      </div>
    </section>
  );
}

export { PlinthTitleTwoWhite };
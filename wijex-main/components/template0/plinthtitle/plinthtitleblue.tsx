type PlinthTitleProps = {
  title: string;
};

const PlinthTitleBlue = (props: PlinthTitleProps) => {
  return (
    <section id='galleryprofile'>
      <div className="py-3 flex center items-center bg-gradient-to-r from-fourth to-primary">
        <h1 className="mx-auto text-l font-semibold leading-none tracking-tighter text-whitecolor lg:text-2xl title-font">
          {props.title}
        </h1>
      </div>
    </section>
  );
}

export { PlinthTitleBlue };
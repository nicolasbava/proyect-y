type PlinthTitleProps = {
  title: string;
};

const PlinthTitle = (props: PlinthTitleProps) => {
  return (
    <section id='galleryprofile'>
      <div className="py-4 flex center items-center bg-secondary">
        <h1 className="mx-auto text-lg font-semibold leading-none tracking-wide text-whitecolor lg:text-3xl title-font">
          {props.title}
        </h1>
      </div>
    </section>
  );
}

export { PlinthTitle };
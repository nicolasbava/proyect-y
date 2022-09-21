type PlinthTitleProps = {
  title: string;
};

const PlinthTitle = (props: PlinthTitleProps) => {
  return (
    <section id='galleryprofile'>
      <div className="py-4 flex center items-center bg-t5primary">
        <h1 className="mx-auto text-lg font-semibold leading-none tracking-wide text-t5secondary lg:text-lg title-font">
          {props.title}
        </h1>
      </div>
    </section>
  );
}

export { PlinthTitle };
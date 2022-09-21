type PlinthTitleProps = {
  title: string;
  color: string;
};

const PlinthColorTitle = (props: PlinthTitleProps) => {
  return (
    <section id='galleryprofile'>
      <div className="py-4 flex center items-center" style={{ backgroundColor: props.color}}>
        <h1 className="mx-auto text-lg font-semibold leading-none tracking-wide text-whitecolor lg:text-lg title-font">
          {props.title}
        </h1>
      </div>
    </section>
  );
}

export { PlinthColorTitle };
type PlinthTitleProps = {
  title: string;
};

const PlinthTitle = (props: PlinthTitleProps) => {
  return (
    <section id='galleryprofile' className='mt-5 lg:mt-10'>
      <div className="py-4 flex center items-center bg-t2secondary">
        <h1 className="mx-auto text-xl font-semibold leading-none tracking-wide text-t2whitecolor lg:text-2xl title-font">
          {props.title}
        </h1>
      </div>
    </section>
  );
}

export { PlinthTitle }
export default function Home() {
  return (
    <div className="flex flex-col h-full gap-8">
      <h1>Accessibility testing for developers</h1>
      <p>
        This website is for demonstrating accessibility testing basics. The
        content is aimed especially for developers, but everyone is welcome to
        explore here. Please find the different sections by navigating through
        the navigation bar.
      </p>
      <p className="mt-auto">
        <span aria-hidden="true" className="text-spruce-green">
          {"<3"}
        </span>
        <span className="sr-only">With love,</span> Futurice Accessibility Crew
      </p>
    </div>
  );
}

function PortfolioHeader() {
  return (
    <header className="App-header">
      <div class="relative bg-white backdrop-blur max-w-md mx-auto md:max-w-2xl pb-32 min-w-0 break-words w-full mb-16 shadow-lg rounded-xl mt-16 shadow-slate-900 hover:bg-white/60">
        <div class="px-6">
          <div class="flex flex-wrap justify-center ">

            <div class="w-full text-center mt-20">
              <div class="flex justify-center content-center lg:pt-4 pt-8 pb-0">
                <div class="p-3 text-center content-center text-black hover:text-red-700">
                <a href="http://github.com/Jophillips">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    class="max-h-8 svg-center hover:text-red-700"
                    fill="currentColor"
                    preserveAspectRatio="xMaxYMax meet"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span class="text-base font-bold block uppercase tracking-wide">
                    github
                  </span></a>
                </div>
                <div class="p-3 text-center">
                  <span class="text-base font-bold block uppercase tracking-wide text-black  hover:text-red-700">
                    {" "}
                    <a href="https://www.linkedin.com/in/joey-p-a619a6154/">

                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  class="max-h-8 svg-center hover:text-red-700"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>


                      
                      LinkedIn
                    </a>
                  </span>
                </div>

                <div class="p-3 text-center">
                  <span class="text-base font-bold block uppercase tracking-wide text-black hover:text-red-700">
                    {" "}
                    <a href="resume-joey_phillips.pdf">
                      <svg
                        aria-label="File"
                        aria-hidden="true"
                        height="32"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="32"
                        data-view-component="true"
                        fill="currentColor"
                        class="max-h-8 svg-center hover:text-red-700"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
                        ></path>
                      </svg>
                      Resume
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-2">
            <h3 class="text-7xl text-red-700 font-bold leading-normal mb-1">
            Joey Phillips
            </h3>
            <div class="text-base mt-0 mb-2  text-black font-bold uppercase">
            <div>
              Ottawa, ON | Web Developer
            </div>
            <div class="text-base mt-2 mb-2  text-black font-bold uppercase  hover:text-red-700">
              <a href="mailto:joey.l.phillips@gmail.com" >
                 joey.l.phillips@gmail.com
              </a>
            </div>
            <div class="text-3xl mt-16 mb-8  text-black font-bold uppercase hover:text-red-700">
              <a href="#example-projects">
                 Example Projects
              </a>
            </div>
            <div class="text-xs mt-8 text-black font-bold uppercase">
            ( <i>
                 Open to remote opportunities  
              </i> )
            </div>
            </div>
          </div>

        </div>
      </div>

      <div class="post visible animated bounceInLeft">
        <div class="parallax-text-secondary">
          {" "}
          <h2> </h2>{" "}
        </div>
      </div>
    </header>
  );
}

export default PortfolioHeader;

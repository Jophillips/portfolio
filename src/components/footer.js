export const Footer = () => {
  return (
    <footer>
      <div className="relative mt-32 bg-red-900 text-white">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-red-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="#7f1d1d"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col justify-between pt-5 pb-10 sm:flex-row">
            <p className="text-sm text-gray-100">
              <div className="mt-4 lg:max-w-sm">
                <span className="text-xl font-bold tracking-wide text-gray-100 uppercase">
                  Joey Phillips
                </span>
                <p className="text-sm">
                  {" "}
                  This is a portfolio of Joey Phillips' work.{" "}
                </p>
                <p className="mt-4 mb-8 text-sm">
                  Professional Web Developer with a versatile skill set with the
                  ability to adapt to any language or framework. Great team
                  spirit, quick learner, and detail-oriented.
                </p>
              </div>
            </p>
            <div className="flex items-center m-4 lg:mr-16">
              <div className="w-full">
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="mailto:joey.l.phillips@gmail.com"
                      className="transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="resume-joey_phillips.pdf"
                      className="transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t  sm:flex-row">
            <p className="text-sm text-gray-100">
              © Copyright 2022 Joey phillips. All rights reserved.
            </p>
            <div className="flex justify-center items-center mt-4 space-x-4">
              <a
                href="https://github.com/jophillips"
                className="transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  class="max-h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.drupal.org/u/joeyphillips"
                className="transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  class="max-h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.78 5.113C14.09 3.425 12.48 1.815 11.998 0c-.48 1.815-2.09 3.425-3.778 5.113-2.534 2.53-5.405 5.4-5.405 9.702a9.184 9.185 0 1018.368 0c0-4.303-2.871-7.171-5.405-9.702M6.72 16.954c-.563-.019-2.64-3.6 1.215-7.416l2.55 2.788a.218.218 0 01-.016.325c-.61.625-3.204 3.227-3.527 4.126-.066.186-.164.18-.222.177M12 21.677a3.158 3.158 0 01-3.158-3.159 3.291 3.291 0 01.787-2.087c.57-.696 2.37-2.655 2.37-2.655s1.774 1.988 2.367 2.649a3.09 3.09 0 01.792 2.093A3.158 3.158 0 0112 21.677m6.046-5.123c-.068.15-.223.398-.431.405-.371.014-.411-.177-.686-.583-.604-.892-5.864-6.39-6.848-7.455-.866-.935-.122-1.595.223-1.94C10.736 6.547 12 5.285 12 5.285s3.766 3.574 5.336 6.016c1.57 2.443 1.029 4.556.71 5.253" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/joey-p-a619a6154/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  class="max-h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a href="http://stackoverflow.com/users/3187849/Joeyphillips">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  class="max-h-8 svg-center"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

function ExampleProjects() {
  return (
    <div class="container my-16 mx-auto" id="example-projects">
      <h2 class="text-4xl">Web Projects</h2>

      <div class="flex flex-wrap justify-between">
        <div class="flex py-3 px-6">
          <a href="http://www.zobfi.com"> </a>
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://jophillips.github.io/img/ispone.png"
              alt="ISP ONE GAME"
            />

            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">ISP ONE</h5>
              <p class="text-gray-700 text-base mb-4">
                ISP ONE is an incremental game written in js. With the expection
                of numbro.js the entire application is written in vanilla js. I
                started working on this project to get a better understanding of
                the flexibity and limitations of javascript.
              </p>
              <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                <b>Environment: </b>Front-End, HTML, CSS, JavaScript
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center py-3 px-6">
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://jophillips.github.io/img/zobfi.png"
              alt=""
            />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Zobfi</h5>
              <p class="text-gray-700 text-base mb-4">
                Zobfi is a content aggregator site built with Php. Using
                asynchronous JavaScript I was able to allow posting and voting
                to be done without a page reload. Zobfi was also my first
                project to utilize a MVC architechure.
              </p>
              <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                <b>Environment: </b>Full Stack HTML CSS JavaScript Php MySQL
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center py-3 px-6">
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://jophillips.github.io/img/small_poly.png"
              alt=""
            />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Polybotes</h5>
              <p class="text-gray-700 text-base mb-4">
                Polybotes is a simple andrioid Quiz game I made a few years back
                as a quick weekend project. Before making this game I had zero
                android development experience and was surprized to see how well
                it turned out.{" "}
              </p>
              <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                <b>Environment: </b>Android App. Java XML
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center py-3 px-6">
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://jophillips.github.io/img/tales.png"
              alt=""
            />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Tales of Prophecy
              </h5>
              <p class="text-gray-700 text-base mb-4">
                Tales of Prophecy was the first major project I worked on with a
                couple of friends. The code is a bit outdated and occasionally
                things get deceracated but over the years I've attempted to
                maintain the codebase.{" "}
              </p>
              <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                <b>Environment: </b>Full Stack HTML CSS JavaScript Php MySQL
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center py-3 px-6">
          <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://jophillips.github.io/img/email.png"
              alt=""
            />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Email Design
              </h5>
              <p class="text-gray-700 text-base mb-4">
                I'm the kind of person who knows the difference between
                {"<td> and <th>"} Email uses many outdate methods of web design.
                Since I began web development has been a hobby many many years
                ago I am familiar with concepts that most developers are not.
              </p>
              <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                <b>Environment: </b>Email HTML Table Design In-line styling
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleProjects;

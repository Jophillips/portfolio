import ImageSetup from "../img/setup.jpg";

function SecondHeader() {
  return (
    <div class="container my-24 px-6 mx-auto">
      <section class="mb-32">
        <div class="flex flex-wrap">
          <div class="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
            <div class="flex lg:py-12">
              <img
                src={ImageSetup}
                class="w-full rounded-lg shadow-lg"
                id="cta-img-nml-50"
                alt="Setup"
              />
            </div>
          </div>

          <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
            <div class="bg-red-900 h-full rounded-lg p-6  text-white flex items-center text-center lg:text-left hover:bg-red-800">
              <div class="pr-12 pl-12">
                <h2 class="text-3xl font-bold mb-6">Who am I?</h2>
                <p class="mb-6 pb-2 lg:pb-0">
                  <div>
                    <div class="col s12 center bodyText">
                      <div class="project-container">
                        <p>
                          My name is Joey Phillips. <br />
                          <br />
                          I'm an Ottawa based professional web developer
                          currently seeking full-time employment. I have a
                          versatile skill set with the ability to adapt to any
                          language or framework. I have a great team spirit and
                          I am a quick learner with great attention to detail. I
                          work well either individually or as part of a team.
                          <br />
                          <br />I have worked with Drupal and Wordpress when it
                          comes to content management systems, but I also love
                          to work with web based applications. I do have a
                          GitHub which I occasionally push code to show what I'm
                          working on. However most of my current web work is for
                          others which cannot be shared.
                        </p>
                      </div>
                    </div>
                  </div>
                </p>
                <a
                  href="mailto:joey.l.phillips@gmail.com"
                  class="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Email me!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondHeader;

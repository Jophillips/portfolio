function SkillSet() {
  const Skillset = [
    "Audio",
    "Content Management Systems",
    "Analytics",
    "Backend Web Development",
    "Email Development",
    "Photo Editing",
    "Front End Web Development",
    "Testing",
    "Version Control",
    "Video",
    "Web Administration",
    "Other",
  ];
  const SkillApplication = [
    "Audacity",
    "Drupal, Wordpress",
    "Google Analytics",
    "MVC, MySQL, PHP",
    "Litmus, Mail Chimp",
    "Adobe Photoshop, Adobe Creative Suite, GIMP",
    "CSS, DOM, HTML5, JavaScript, jQuery, LESS, SaSS, AJAX, React",
    "Browser Stack, Jest",
    "Git",
    "Blender, Davinci Resolve",
    "Apache, DNS, Domain Registration, FTP, CloudFlare",
    "Java, Unreal Engine, Wireframing",
  ];
  const SkillData = [];

  SkillApplication.forEach((data, index) => {
    const SkillsetText = Skillset[index];

    SkillData.push(
      <tr class="border-b hover:bg-red-300">
        <td class="px-6 py-4 text-sm font-bold text-gray-900">
          {SkillsetText}
        </td>
        <td class="px-6 py-4 text-sm font-medium text-gray-900">{data}</td>
      </tr>
    );
  });

  return (
    <div class="flex justify-center overflow-x-auto">
      <table class="container my-16 mx-auto">
        <thead class="border-b bg-red-900">
          <tr>
            <th
              scope="col"
              class="px-6 py-4 text-sm font-medium text-white text-bold"
            >
              Skillset
            </th>
            <th scope="col" class="px-6 py-4 text-sm font-medium text-white">
              Skill
            </th>
          </tr>
        </thead>
        <tbody>{SkillData}</tbody>
      </table>
    </div>
  );
}

export default SkillSet;

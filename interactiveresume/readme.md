# Interactive Resume
The interactive resume is designed to provide your personal website with a easily viewed, responsive, and detailed resume.

Example: https://www.robertaparri.com

The <InteractiveResume /> component takes a single props detailing your work experience.
The props should have the following structure:

const workItems = [
    {
    image:,
    company:"",
    title: "",
    description:[
      "",
      ""
    ],
    subItems:[
      {
        borderColor:"",
        title:"",
        image:,
        description:[
          "",
          ""
        ]
      }],
    link:""
  }
]

# Usage

<InteractiveResume workItems = {workItems} />

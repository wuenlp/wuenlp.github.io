---
# All teaching in one file, grouped by semester.
#
# Each item under `semesters:` is one term:
#   name:    the semester label shown on the page, e.g. "Winter Semester 26/27".
#   order:   an explicit number controlling position. Higher numbers appear
#            first (newest at the top). Give each new semester a higher order
#            than the previous one.
#   courses: the courses in that semester. Each course's `type` selects its
#            section on the page:
#              regular   -> "Regular Courses"
#              seminar   -> "Seminars"
#              praktikum -> "Praktika"
#            Within a section, courses appear in the order listed here.
#            Each course's `level` shows a degree badge, one of:
#              bachelor            -> teal "Bachelor" badge
#              master              -> blue "Master" badge
#              [bachelor, master]  -> both badges (course open to both)
semesters:
  - name: "Winter Semester"
    order: 1
    courses:
      - title: "Algorithmen in KI und Data Science 1 (AKIDS1)"
        type: regular
        level: bachelor
        ects: 10
        language: "German & English"
        lecturers: "Prof. Dr. Goran Glavaš (Lectures), Lennart Keller (Exercises), Sukannya Purkayastha (Exercises)"
        url: "https://wuecampus.uni-wuerzburg.de/moodle/course/view.php?id=82349"
        description: "Introductory course to algorithms and data structures with a focus on AI problems and applications."

      - title: "Introduction to Natural Language Processing (Intro2NLP)"
        type: regular
        level: bachelor
        ects: 5
        language: "English"
        lecturers: "Prof. Dr. Goran Glavaš (Lectures), Saad Obaid Ul-Islam (Exercises)"
        url: "https://wuecampus.uni-wuerzburg.de/moodle/course/view.php?id=82346"
        description: "An introductory to natural language processing and computational linguistics."

      - title: "Seminar in Natural Language Processing"
        type: seminar
        level: [bachelor,master]
        ects: 5
        language: "English"
        lecturers: ""
        url: "https://wuecampus.uni-wuerzburg.de/moodle/course/view.php?id=82351"
        description: "A seminar on a contemporary topic in the field of natural language processing."

      - title: "Seminar in Vision and Language"
        type: seminar
        level: [bachelor,master]
        ects: 5
        language: "English"
        lecturers: ""
        url: "https://wuecampus.uni-wuerzburg.de/moodle/course/view.php?id=82352"
        description: "A seminar on a contemporary topic in the multimodal, vision and language, representation learning and models."

      - title: "KIDS Lab 1"
        type: praktikum
        level: bachelor
        ects: 10
        language: "English/German"
        lecturers: "Prof. Dr. Goran Glavaš, Prof. Dr. Ingo Scholtes, Benedikt Ebing, Chester Tan"
        url: "https://wuecampus.uni-wuerzburg.de/moodle/course/view.php?id=82350"
        description: "A series of smaller-scale practical projects, carried out individually, addressing fundamental AI and data science algorithms."  

      - title: "Praktikum in Natural Language Processing"
        type: praktikum
        level: [bachelor,master]
        ects: 10 (or 5)
        language: "English"
        lecturers: ""
        url: "https://wuecampus.uni-wuerzburg.de/moodle/course/view.php?id=82355"
        description: "Team project (3-5 students) on a relevant topic in modern natural language processing."
  
  - name: "Summer Semester"
    order: 1
    courses:
      - title: "Multilingual NLP (mNLP)"
        type: regular
        level: master
        ects: 5
        language: "English"
        lecturers: "Prof. Dr. Goran Glavaš (Lectures), Benedikt Ebing (Exercises)"
        url: "https://wuecampus.uni-wuerzburg.de/moodle/course/view.php?id=72664"
        description: "Modern Neural (Transformer-Based) Natural Language Processing with a special emphasis on multilinguality (models and resources)."

      - title: "Information Retrieval (IR)"
        type: regular
        level: master
        ects: 5
        language: "English"
        lecturers: "Prof. Dr. Goran Glavaš (Lectures), Saad Obaid Ul-Islam (Exercises)"
        url: "https://wuecampus.uni-wuerzburg.de/moodle/course/view.php?id=72663"
        description: "Thorough coverage of both traditional and modern information retrieval algorithms and models."

      - title: "Seminar in Natural Language Processing"
        type: seminar
        level: [bachelor,master]
        ects: 5
        language: "English"
        lecturers: ""
        url: "https://wuecampus.uni-wuerzburg.de/moodle/course/view.php?id=80728"
        description: "A seminar on a contemporary topic in the field of natural language processing."

      - title: "Seminar in Vision and Language"
        type: seminar
        level: [bachelor,master]
        ects: 5
        language: "English"
        lecturers: ""
        url: "https://wuecampus.uni-wuerzburg.de/moodle/course/view.php?id=80388"
        description: "A seminar on a contemporary topic in the multimodal, vision and language, representation learning and models."

      - title: "Praktikum in Natural Language Processing"
        type: praktikum
        level: [bachelor,master]
        ects: 10 (or 5)
        language: "English"
        lecturers: ""
        url: "https://wuecampus.uni-wuerzburg.de/moodle/course/view.php?id=80729"
        description: "Team project (3-5 students) on a relevant topic in modern natural language processing."
---

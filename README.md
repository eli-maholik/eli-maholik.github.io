# Eli Maholik

This ePortfolio showcases my work throughout the Computer Science capstone, including my code review, software enhancements, and reflections on the program outcomes I have achieved.

# Professional Self-Assessment
As I complete my bachelor’s degree in computer science, I recognize how significantly my coursework has shaped both my technical abilities and my professional identity. Throughout the program, I have developed a strong foundation in software engineering, algorithms, database design, and security, while also strengthening my ability to communicate technical concepts and collaborate effectively. The development of this ePortfolio has allowed me to not only showcase these skills, but also reflect on how they integrate to form a cohesive and practical skill set that prepares me for a career in the software development field. 

Over the course of this program, I have gained hands-on experience designing and building software solutions that address real world problems. My capstone project, an Android inventory management application, demonstrates my ability to design, develop, and enhance, a full-stack system. Through this project, I implemented improvements in user interface design, application structure, and functionality, reinforcing my understanding of software design principles and maintainable code practices. This experience directly reflects my ability to design and evaluate computing solutions using appropriate computer science practices while managing design trade-offs, as I made decisions balancing usability, performance, and scalability. 

In addition to software design, I strengthened my knowledge of algorithms and data structures by implementing features such as search, sorting, and filtering within my application. These enhancements required me to think critically about efficiency, user experience, and scalability as the dataset grows. Through this process, I demonstrated my ability to apply algorithmic principles to solve problems effectively and improve application performance, further supporting my competency in developing optimized and practical computing solutions. 

My work on database integration represent a significant step in expanding my technical capabilities beyond front-end and local storage solutions. By developing a back-end using Node.js, Express, and SQLite, I transformed my application into a more scalable and realistic system. I implemented RESTful API endpoints to handle data operations and integrated token-based authentication using JSON Web Tokens (JWT), along with secure password storage using bcrypt hashing. These enhancements demonstrate my ability to use modern tools, technologies, and techniques to build computing solutions that deliver real world value, as well as my ability to design systems that are both functional and secure. 

Security has become an increasingly important focus throughout my experience in this program, and this is reflected in my capstone project. By incorporating authentication, encryption, and secure data handling practices, I demonstrated a strong awareness of potential vulnerabilities and how to mitigate them. This directly aligns with my ability to develop a security mindset that anticipates threats and implements safeguards to protect data and system integrity. 

In addition to technical skills, I have developed the ability to communicate complex ideas clearly and effectively. Through written assignments, project documentation, and my code, review video, I have practices presenting technical information in a way that is accessible to both technical and non-technical audiences. This reflects my ability to develop and deliver professional quality oral, written, and visual communications that are appropriate for a variety of audiences and contexts. 

Collaboration has also been an important component of my growth throughout the program. Whether through peer discussions, feedback exchanges, or working with a real client on a freelance project. I have learned how to consider different perspectives, adapt to feedback, and contribute to shared goals. These experiences demonstrate my ability employ strategies for building collaborative environments that support effective decision making in computer science contexts. 

The artifacts included in this ePortfolio collectively represent my growth as a developer and my readiness to enter the professional field. Each enhancement builds upon the last, showcasing my ability to iteratively improve a system across multiple domains, including software engineering, algorithms, and databases. Together, they demonstrate not only my technical skills, but also my ability to think critically, solve problems, and continuously improve my work. 

As I transition into the professional world, I am particularly interested in opportunities that allow me to continue developing full-stack applications and building meaningful software solutions. I am confident that the skills I have developed throughout this program, combined with my hands on project experience, have prepared me to contribute effectively as a software developer and continue growing within the field. 


## Code Review
This code review examines my original Android inventory application, discusses its strengths and weaknesses, and outlines the enhancements I plan to make as part of my capstone project.

<div style="text-align:center;">
  <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/GEidXgK3Bcw?si=IRsUoAneBKaIUTtK" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

## Technical Enhancements
This section highlights the enhancements made to my Android inventory application as part of my capstone project. These improvements demonstrate my ability to refine software design, implement efficient algorithms, and develop scalable back-end systems. Together, these enhancements transformed the application from a locally stored system into a more robust, user-friendly, and production-ready solution.

[View Enhanced Code on GitHub](https://github.com/eli-maholik/inventory-application-system)

### Software Design & Engineering Enhancements
To improve the overall structure and usability of the application, I refactored key components of the codebase and enhanced the user interface. These changes focused on maintainability, readability, and user experience.

The original implementation contained large methods and repeated logic, particularly within activity classes. I addressed this by breaking down complex methods into smaller, reusable helper functions and consolidating duplicated dialog logic into a unified structure. This improved both code organization and scalability.

From a user interface perspective, I redesigned key elements of the application to create a more modern and intuitive experience. Enhancements included the use of Material Design components such as cards and floating action buttons, improved layout spacing, and clearer visual hierarchy. These changes made the application easier to navigate and more visually appealing.

The following screenshots illustrate the user interface before and after enhancements were implemented:

<p align="center">
  <img src="oldinventory.jpg" width="250"/>
  <img src="inventory.jpg" width="250"/>
</p>

### Algorithms & Data Structures Enhancements
To improve data handling and usability, I implemented several features that rely on core algorithmic concepts, including searching, sorting, and filtering.

A real-time search feature was added to allow users to quickly locate inventory items by name. This required efficient string matching and dynamic updates to the displayed dataset. Additionally, sorting functionality was implemented to organize items based on attributes such as name and quantity, while filtering capabilities allow users to isolate specific subsets of data, such as low inventory items.

These enhancements significantly improved the user experience by reducing the need for manual navigation through large datasets. From a technical standpoint, they reinforced my understanding of how data structures such as lists interact with algorithms to support efficient data manipulation and retrieval.

The following screenshots showscase the implemented search and sorting enhancements:

<p align="center">
  <img src="search.jpg" width="250"/>
  <img src="filter.jpg" width="250"/>
</p>

### Database & Back-End Enhancements
To expand the scalability and realism of the application, I transitioned from a purely local database to a client-server architecture. The original application used SQLite for local data storage, which was effective for basic functionality but limited in terms of scalability and real-world applicability.

To address this, I developed a back-end server using Node.js and Express, connected to a SQLite database. This allowed the application to handle data more dynamically and simulate a production-like environment. I implemented RESTful API endpoints to manage user authentication and inventory data operations, enabling communication between the mobile application and the server.

Security was a major focus of this enhancement. I implemented password hashing using bcrypt and secured user authentication with JSON Web Tokens (JWT). These measures ensure that sensitive user data is protected and that only authorized users can access application resources.

This transition demonstrated my ability to design and integrate full-stack systems, as well as my understanding of database management, API development, and secure application design.

### Impact of Enhancements
Collectively, these enhancements transformed the application into a more scalable and efficient system. The improvements in software design increased maintainability and code quality, the implementation of algorithms enhanced performance and usability, and the integration of a back-end system introduced a more realistic and secure architecture. This work reflects my ability to approach software development holistically, considering not only functionality but also performance, scalability, and security.

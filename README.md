# Eli Maholik

This ePortfolio showcases my work throughout the Computer Science capstone, including my code review, software enhancements, and reflections on the program outcomes I have achieved.

# Professional Self-Assessment
Throughout my time in the Computer Science program at Southern New Hampshire University, I have developed a strong foundation in software development, problem solving, and professional communication. Completing my coursework and building my ePortfolio has allowed me to not only demonstrate my technical abilities, but also reflect on how those skills translate into real-world applications. As I prepare to enter the professional field, I feel confident in my ability to design, build, and improve software solutions.

One of the most valuable aspects of this program has been learning how to work in collaborative environments and communicate with different stakeholders. While assignments were completed individually, courses such as my capstone and full stack development projects required me to think from the perspective of clients and end users. For example, while planning and developing my capstone inventory application, I approached the project as if I were working with a real client by considering usability, feature prioritization, and scalability. Additionally, my current freelance project has further strengthened my ability to communicate professionally, define project scope, and break down complex requirements into manageable development phases. These experiences have helped my understand that successful software development is not just about writing code, but about clearly communicating ideas and building solutions that meet user needs.

My coursework also strengthened my understanding of data structures and algorithms, which are essential for building efficient and scalable applications. In my capstone project, I implemented search, sorting, and filtering functionality to improve the usability of my inventory application. Implementing these features required thoughtful consideration of performance and user experience, especially as data sets grow. Beyond the capstone, I gained experience analyzing algorithm efficiency and selecting appropriate data structures in earlier coursework, which has helped me approach problems more strategically and write optimized code. 

In terms of software engineering and database development, I have gained hands on experience designing full-stack applications. My capstone project began as a locally stored Android application use SQLite, but I later enhanced it by developing a back-end server using Node.js and Express with a connected SQLite database. This transition allowed me to implement a more scalable architecture and better simulate real-world application development. I also applied similar concepts in my full stack development coursework, where I worked with the MEAN stack to build a web application with a RESTful API and a single page application (SPA) front end. These experiences have strengthened my understanding of application architecture, separation of concerns, and the importance of maintainable and organized code. 

Security has been another important area of focus throughout my program. In my capstone enhancements, I implemented password hashing using bcrypt and token-based authentication using JSON Web Tokens (JWT) to protect user data. This experience reinforced the importance of building security into applications from the ground up rather than treating it as an afterthought. Additionally, coursework is software reverse engineering exposed me to common vulnerabilities and helped me understand how attackers can analyze compiled programs. This perspective has strengthened my ability to anticipate potential risks and design systems more securely. 

The artifact included in this ePortfolio collectively demonstrates my growth as a software developer and my ability to apply a wide range of technical skills. The code review provides insight into my ability to apply a wide range of technical skills. The code review provides insight into my ability to critically evaluate software and identify areas for improvement. My software design and engineering enhancements highlight my ability to refactor and improve application structure and user experience. The algorithms and data structures enhancements demonstrate my ability to implement efficient functionality that improves performance and usability. Finally, my database and back end enhancements showcase my ability to design and integrate scalable systems with secure user authentication.

Together, these artifacts represent not only my technical abilities, but also my problem solving mindset, attention to detail, and commitment to continuous improvement. This ePortfolio serves as a comprehensive reflection of my skills and experiences, and it demonstrates my readiness to contribute as a software developer in a professional environment. 

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

## Software Design & Engineering Enhancements
This section highlights the enhancements I made to my Android inventory application to improve its structure, usability, and maintainability. These changes reflect my growth in software design principles and my ability to refactor existing code into a more scalable and user-friendly solution.

### Application Screenshots
Below are examples of the enhanced user interface and functionality of the application.

<p align="center">
  <img src="inventory.jpg" width="250"/>
  <img src="search.jpg" width="250"/>
  <img src="filter.jpg" width="250"/>
</p>

### Enhanced Application Code
[View Enhanced Code on GitHub](https://github.com/eli-maholik/inventory-application-system)

## Algorithms & Data Structures Enhancements
This section highlights how I enhanced my Android inventory applicaion by applying algorithms and data structures to improve data handling, efficiency, and overall user experience.

### Artifact Overview
This application allows users to create accounts, log in, and manage inventory items, with features such as adding, editing, deleting items, and receiving SMS notifications when inventory is low. It was built using Java in Android Studio with an SQLite database and a RecyclerView for displaying data.

### Enhancements Implemented
To improve the functionality and scalability of the application, I implemented the following features:
- **Search Functionality**: Added a real-time search feature that allows users to quickly locate items by name using string matching and dynamic filtering.
- **Sorting Algorithms**: Implemented sorting options that allow users to organize inventory items based on attributes such as name and quantity.
- **Filtering System**: Added filtering capabilities to display subsets of data, such as low inventory items, making it easier to identify important information.

### Impact of Enhancements
These improvements significantly enhanced the usability of the application. Previously, users had to manually scroll through potentially large datasets to find items. With search, sorting, and filtering, users can now interact with data more efficiently and intuitively.

From a technical perspective, these changes required careful consideration of how data is stored, accessed, and updated. Managing the interaction between multiple operations (search, sort, and filtering) reinforced my understanding of how data structures like lists support algorithmic processes.

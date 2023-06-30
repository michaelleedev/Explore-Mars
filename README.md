Website: https://main.dpurqbz8y8ytp.amplifyapp.com/

This project is what a potential website for tourism on Mars would look like in the future. 

# Goals Achieved
The goal of this project was for me to further familiarize myself with React and Bootstrap framework.  
This website acted as a static website with little functionality, thus didn't utilize much of the hooks function that React provides, however, I practiced separating many different parts of the website into components to make each page easy to navigate and debug and utilized props to render things conditionally.  
I gained experience in working with Bootstrap framework, and specifically, React Bootstrap. 
Used AWS Amplify service to host my website

# Problems and Solutions
Because Bootstrap had different package designed for React, I had trouble figuring out how the class modifiers worked with the React component styled Bootstrap Components. With documentation and google, I figured out some props parameters like 'variant' and 'theme' could be used to customize Bootstrap components. I also created separate classes that I changed the stylings in CSS.  
I had originally planned to host the website on Github Pages, but found out that single page applications like this project won't be able to work due to path names not being recognized. When redirecting in my React app, I rendered based on the path url, but Github Page doesn't recognize the entire url, but the directory path. This made my links and visiting my pages directly not work. I had found similar problems on the internet, but their solutions didn't work on this project. Thus I decided to host my page on AWS with their free Amplify service.

# Insight
I found that designing and visioning a website was pretty challengin, and even more so to correctly write HTML and CSS to look exactly how I visioned it.   
I realized how unpractical a tourism industry to Mars would be if it was designed for the masses.   
I had many technical challenges and bugs to fix, but the greatest challenge was coming up with fictional content that might applea to people visiting the website.  

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

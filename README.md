# jQuery Implementation Block

# Set up

 1. Change directory into your wyncode folder.
 2. Clone the jqueryImplementation repo from github using the following command
 **bash <(curl -sL http://bit.ly/2t7JoLa) jqueryImplementation https://github.com/wyncode/student-resources**
 3. In your command line run **npm install** or **yarn install**
 4. Start the **server.js** file by running **node server.js**

# Instructions

 1. Import jQuery into your app.
 2. Use jquery to select all buttons in your html page, and then add the **special-button** class to them.
 3. Add a **click** event listener to both theme **buttons** located on the top right corner of your html page.
 4. Pass a callback function to the event listeners you created in the previous step that changes the 
 **background-color** style property of the element with **id** of **content** to either red or blue.
 
 5. Add a **click** event listener to the **import people** button.
 6. Pass a callback function to the event listener you created in the previous step. This function should make a  **GET** request to the server you are running, and it should target the **/users** endpoint.
 7. Iterate over each element in the data array that you got from your request. 
 8. For each element create an **li** element that wraps around with the data of each element as its content, as well as a button.
 9. Give each **li** a **person-li** class.
 10. Append each one of these elements to the **ul**.

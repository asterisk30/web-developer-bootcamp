# Objectives

* Using template engines with Express
A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

Some popular template engines that work with Express are Pug, Mustache and EJS.

* What is ejs?
What is the "E" for? "Embedded?" Could be. How about "Effective," "Elegant," or just "Easy"? EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.

More details can be found here

https://www.npmjs.com/package/ejs

* Difference between <%= %> and <% %>
<%= %> -- will display
<% %>  -- will not display

* res.render(fileName, object)
fileName is the file you want to render
object allows you to pass through a local variable to template variable

* How to style ejs?

1. Add style tag just like in ejs
2. Add a link to css file in ejs template (href="/style.css") the slash infront of style.css is necessary because it tells the server to go back to root directory and search for the file from there

* How to make post request?

// Template Engines

// A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.

// Some Popular template engines

// 1.HBS
// 2. EJS
// 3. Mustache
// 4. Pug

// Installing hbs module in your app

//  npm i hbs --save

// Usage

// require hbs module
const hbs = require('hbs');

// set view engine and views(where you will store all hbs file / view part) directory

app.set('views', __dirname+'/views');
app.set('view engine', 'hbs')

// Working with hbs


// Handlebars HTML-escapes values returned by a {{expression}}. If you don't want Handlebars to escape a value, use the "triple-stash", {{{


{{ expression }}

{{{html}}}

// The if block helper

{{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
{{/if}}

// addng else

    /* <div class="entry">
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{else}}
    <h1>Unknown Author</h1>
  {{/if}}
</div> 

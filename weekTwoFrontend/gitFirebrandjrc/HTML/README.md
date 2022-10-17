# Lloyds-Bootcamp-01

## Content for the week

* HTML & CSS
    * What are they?
    * How do they work?
    * Why are they so irritating?
    * Why aren't they used as much anymore?

* JavaScript
    * Closeness to Python
    * The differences with Python and other languages
    * Object-oriented JavaScript

* Testing with Jest
    * Unit testing
    * TDD (Test Driven Development)
    * A whole lot of unit testing. Just repeating.


## Front-End Languages

* HTML
* CSS
* JavaScript
    * This includes all of the different flavours of JavaScripts
* C#
* Python
* Looooaaaads more!


## Back-End Languages

* JavaScript
* C#
* Python
* Java
* Aaaaaand many more!

## HTML

* Hypertext Markup Language
* HTML is not compiled or processed in the same way that other languages are
* Even with loads of errors, HTML won't notice them, it'll just put it all on the screen
* You can run HTML just by opening the file on / in the browser
* HTML is structured with tags - opening and closing tags
    * <html> </html>
    * <body> </body>
    * <head> </head>
    * <h1>My new header one</h1>
    * <img>

* Skeleton structure with HTML
    * <head> </head> is for the data / information you don't want the user to see / modify
    * <body> </body> is the sexy stuff. The information you want the user to see, interact with, and enjoy reading / viewing
    * <footer> </footer> we put the legal information, policies, trademarks / copyrights, a site map...

* Dynamic websites with Live Server 
[Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

**DO NOT OPEN HTML FILES IN FILE EXPLORER / FINDER. THEY WILL BE STATIC. USE LIVE SERVER**

## Browsers of choice

1. Google Chrome - V8 Engine driven browser
2. Mozilla Firefox - MDN (Mozilla Development Network)
3. Safari 
4. Opera 
5. Anything but Edge or Internet Explorer. Anything. A potato. A rock.

## CSS

* Cascading Style Sheets
* This is the style behind the content

* CSS works on a last read, first implemented process
* CSS works on a closest to the tag implementation

### Three types of CSS

1. Inline - devil. We try not to use inline CSS. It's horrible. Makes childer cry. Very bad.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lloyds Bootcamp</title>
</head>
<body>
    <h1 style="color: crimson; color: yellow; color: purple; text-decoration: underline; font-size: 200px; font-size: 50px; text-align: right;">Lloyds Bootcamp</h1>

    <h1 style="font-size: 50px;">Another header</h1>
    <p style="font-size: 30px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, porro suscipit. Esse cum quasi quis blanditiis dignissimos facilis perspiciatis minima!</p>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eum.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eum.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eum.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eum.</p>
    
    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png" alt="Image of Mini Sherlock Holmes">

    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Lloyds</li>
    </ul>

    <ol>
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Safari</li>
    </ol>
    
</body>
</html>
```

2. Internal - Less devil, more... it should be avoided, but there are cases when it could be used? Maybe? Possibly. 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lloyds Bootcamp</title>
    <!-- internal css -->
    <!-- all of the css for internal is kept inside the head tag and the style tag -->
    <style>
        h1 {
            color: blue;
            font-size: 25px;
        } 

        p {
            text-decoration: overline;
            color: crimson;
        }

        #smallParagraph {
            
        }
    </style>

</head>
<body>
    <h1 style="color: crimson; color: yellow; color: purple; text-decoration: underline; font-size: 200px; font-size: 50px; text-align: right;">Lloyds Bootcamp</h1>

    <h1 style="font-size: 50px;">Another header</h1> <!-- what size will this h1 be? 25px -->
    <p style="font-size: 30px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, porro suscipit. Esse cum quasi quis blanditiis dignissimos facilis perspiciatis minima!</p>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eum.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eum.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eum.</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, eum.</p>
    
    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png" alt="Image of Mini Sherlock Holmes">

    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Lloyds</li>
    </ul>

    <ol>
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Safari</li>
    </ol>
    
</body>
</html>
```

3. External - glorious. Should be used in every case, where possible.
    * External CSS uses external files to import styles for our elements on the page
    * This allows for a style to be used over many pages, without replicating / repeating code
    * External CSS is the most efficient style of CSS. Once you write it in one file, you can use it across 1000s

## HTML Code Day 01 - Morning

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Lloyds Bootcamp</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, porro suscipit. Esse cum quasi quis blanditiis dignissimos facilis perspiciatis minima!</p>
    
    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png" alt="Image of Mini Sherlock Holmes">

    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Lloyds</li>
    </ul>

    <ol>
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Safari</li>
    </ol>
    
</body>
</html>
```

### style.css

# Links

* Cheatsheet for VS-Code Windows
* Cheatsheet for VS-Code Mac

# Discover Transylvania

![Discover-Transylvania](https://raw.githubusercontent.com/iulianpro/discover-transylvania/master/wireframes/Multi-devices-DT.png)

The main purpose of this website/project in the real-world is to promote the Romanian Transylvania region, the place where everyone already knows, the legend of Count Dracula was born. Welcome to this page, feel free to read this documentation and browse the website and if you have any questions you can contact me through GitHub, I will answer with pleasure.

> ## Table of Contents
* [UX](https://github.com/iulianpro/discover-transylvania#ux)
    - [User stories](https://github.com/iulianpro/discover-transylvania#user-stories)
        - [Project goals](https://github.com/iulianpro/discover-transylvania#project-goals)
        - [Audience goals](https://github.com/iulianpro/discover-transylvania#audience-goals)
        - [Website owner goals](https://github.com/iulianpro/discover-transylvania#website-owner-goals)
    - [Strategy](https://github.com/iulianpro/discover-transylvania#strategy)
    - [Scope](https://github.com/iulianpro/discover-transylvania#scope)
    - [Structure](https://github.com/iulianpro/discover-transylvania#structure)
    - [Skeleton](https://github.com/iulianpro/discover-transylvania#skeleton)
    - [Surface](https://github.com/iulianpro/discover-transylvania#surface)
* [Features](https://github.com/iulianpro/discover-transylvania#features)
    - [Existing Features](https://github.com/iulianpro/discover-transylvania#existing-features)
    - [Left to Implement](https://github.com/iulianpro/discover-transylvania#left-to-implement)
* [Technologies Used](https://github.com/iulianpro/discover-transylvania#technologies-used)
* [Testing](https://github.com/iulianpro/discover-transylvania#testing)
* [Deployment](https://github.com/iulianpro/discover-transylvania#deployment)
* [Credits](https://github.com/iulianpro/discover-transylvania#credits)
    - [Content](https://github.com/iulianpro/discover-transylvania#content)
    - [Media](https://github.com/iulianpro/discover-transylvania#media)
    - [Acknowledgements](https://github.com/iulianpro/discover-transylvania#acknowledgements)

> ## UX

### User stories
#### Project goals

Probably the whole world knows the legend of Count Dracula, the famous vampire from a distant and uncertain world called Transylvania, a character created by the famous Bram Stoker in the eponymous novel, about which there have been countless films, serials, comics and many more. Equally likely is the fact that many people do not know this area, today's Transylvania, a region of Romania with a rich historical heritage, wonderful landscapes, with a flora and fauna that does not exist today in other parts of Europe, with craftsmanship ancestors, who also enchanted *His Royal Highness, Prince of Wales, Charles*. Through this project, the user will be awakened the interest to document and visit some other tourist attractions in Transylvania, besides the castle of Count Dracula, Bran.

#### Audience goals

* To read relevant information that can help in documenting a possible holidays;
* To see a landig page that will arouse their curiosity to navigate further;
* To they can easily access and navigate through the website;
* To they easy use a map to get an idea of where they can travel;
* To they can send a message if they want to find out more details about this destinations;

**Mark Q**: *"I like to spend my vacations in less crowded places, in rustic places, where I can meet ordinary people, observe their daily habits, know the history of the places, the crafts kept from generation to generation, which is why such website that can provide good clues about such travel destination is great."*

**Shellby S**: *"Nowadays, it is quite difficult to find a source of disinterested information and documentation, when the big trusts in this market promote their services through an aggressive marketing policy, selling more or less real promotions. That's why I appreciate such a website that can offer you good tips for your next vacation destination."*

#### Website owner goals

* Tourism promotion of the area where I was born, tourism means income, development and progress for community;
* Gather information on what types of holidays people are looking for;
* Receive contact details through use of contact form;

### Strategy

This project aims to be a website that offers to the end user, brief information about the destinations that deserve to be visited in the historical province of Transylvania, the place of legend of the most famous vampire, Dracula. The website responds to some specific needs that a potential traveler may have: I heard about Transylvania, what can I visit ?, where are these places to visit ?, how can I find additional information?

### Scope

How does this project answer the above questions? By implementing several functionalities that can help the user to outline a minimum overview, namely: presenting some well-known and highly appreciated locations, implementing an interactive map, through the possibility of accessing external documentation resources, through the possibility to request more information.

### Structure

The structure of this website includes several sections, functionalities with which the user can interact, links to the external documentation resource, relevant images with the locations to be visited, an interactive map, a form by which the user can request additional information and external links to social media pages.

**Landing page** includes the navbar that is positioned at the top of the page and is fixed so that the user has access to the menu at any time and in any section they would see at a moment's notice. For a more enjoyable browsing experience, I used html ``` {scroll-behavior: smooth;}``` so that navigating from one section to another would be smooth. Also, the left side of the navbar contains the website name and a logo created with Font Awesome. In small screens, the navbar will collapse into a "hamburger" icon. When the icon is clicked, the navbar will expand and show the whole menu. Main image is actually a slider and have been built with JavaScript from several images with an effect of fade in and fade out.

**Visit section** is made up of several "cards" containing images and information about the places that can be seen. With a feature created with JavaScript, the user can read more details, which are displayed above the cards when positioning the mouse hover or when finger-touching on the touch screens. In order to convey to the user the existence of these functionalities, I have chosen to position in the top-right corner of each card with ```.touch-icon {position: absolute;}``` an icon to suggest that he has this option to read further details. Also, since the overlay functionality has a transparent background, with same JavaScript, the background text and the touch screen icon are hidden when overlay is active so that the overlay text can be read it easily. The text of both the card and the overlay is adapted with Bootstrap so that certain paragraphs are hidden and displayed depending on the resolution of the user's screen. In medium screens (usually tablets) three of from five cards are displayed.

**Destinations section** has been built using JavaScript Maps API using custom markers. The main feature of the map is that the user can access every location on the map with a click that opens an infowindow. Infowindow contains images and text that the potential user can visualize thus finding additional information not only about the position on the map of the location, but also additional details related to its history. Also, each infowindow contains at the end, a redirect link to an external documentation resource, namely Wikipedia. Given the relatively small size of these windows and implicitly the images contained, I chose to increase them if the user is with the mouse over the image, by implementing an css transition effect with ```.imgbox img:hover {transform scale (1.8);}```. Each imagewindow has a custom background.

**Contact section** is a minimalist one that contains a custom Boostrap form with a few fields that the user can fill in if he decides to request additional information: first name, last name, email address, user message, and a submit button. The form has live functionality implemented with JavaScript and an external EmailJS resource through which the message can be submitted and sent to the website owner.

**Footer** is a very simple one through which the user has access at hand to the website menu and through which he can also access the social media pages of the Transylvania region of Romania.

### Skeleton

The website has been structured as a single page containing several sections, Home (landig page), Visit, Destinations, Contact and of course Footer. Wireframes for each screen type can be viewed here:
* [Mobile wireframes](https://github.com/iulianpro/discover-transylvania/blob/master/wireframes/Mobile%20-%20DT.png);
* [Tablet wireframes](https://github.com/iulianpro/discover-transylvania/blob/master/wireframes/Tablet%20-%20DT.png);
* [Desktop wireframes](https://github.com/iulianpro/discover-transylvania/blob/master/wireframes/Descktop%20-%20DT.png);
* [Multi-device screenshot](https://github.com/iulianpro/discover-transylvania/blob/master/wireframes/Multi-devices-DT.png);

### Surface

The color scheme chosen by me is also a minimalist one. The main color used is #2b4438 and the color palette was generated using Adobe Color tool. Color palette used is:

* ![#2b4438](https://placehold.it/75x20/2b4438/2b4438) - #2b4438
* ![#c9ffe5](https://placehold.it/75x20/c9ffe5/c9ffe5) - #c9ffe5
* ![#ffebe8](https://placehold.it/75x20/ffebe8/ffebe8) - #ffebe8
* ![#782b1e](https://placehold.it/75x20/782b1e/782b1e) - #782b1e

### [⬆](https://github.com/iulianpro/discover-transylvania#table-of-contents)

> ## Features

This v.01 version of the website has some brief features so that user can find general information about Transylvania and locations that be worth to visit. In the future, the website will offer more functionalities such as a section with a more detailed presentation of the places to visit but also others that I have detailed below.

### Existing Features

* **Visit** - In this section the user meets some of the most appreciated tourist locations in Transylvania, finding some brief information about them. Also, the user can discover more details (displayed overlay) if he covers the card with the mouse in the big screens or if he touches it in the touch screens. To notify the user of the existence of this feature, a suggestive icon is displayed in the top right corner of each card only on the xs, sm and md screens.
* **Destinations** - This section is built with JavaScript Maps API. The five locations presented in the previous section are located on the map so that the user can have an idea about their location. The main feature is the possibility to interact with this map. The user can click on the markers of the five locations, the result being the display of information windows. In these windows the user can read information about the respective locations but can also see an image of them.
* **Contact** - In this section the user has the possibility to send an email to request other information through a form created in Boostrsp. The effective message sending functionality is provided by an external EmailJS resource that works with JavaScript. Also, the JS code checks and validates if the user has filled all the fields of the form. Otherwise, through another external resource, custom Sweet Alert, the user is warned through a frendly formulation that they must fill the other fields as well. Once all fields are filled, the same Sweet Alert displays a successful send message on the screen.

### Left to Implement

As I said above, in the v.02 website version I will include more functionalities such as a section with a more detailed presentation of places to visit, presentation of locations in the surroundings of those already presented, ways to reach them, details about accommodation places, restaurants, caffees shops, different cultural events but also others.

### [⬆](https://github.com/iulianpro/discover-transylvania#table-of-contents)

> ## Technologies Used

To create this website, several technologies were used, as well as some frameworks, libraries and tools detailed below:

**Languages:**
* [HTML](https://www.w3schools.com/html/default.asp)
* [CSS](https://www.w3schools.com/css/default.asp)
* [JavaScript](https://www.w3schools.com/js/default.asp)

**Frameworks, Libraries & Tools:**
* [Bootstrap](https://getbootstrap.com/)
* [jQuery](https://jquery.com/)
* [Popper.js](https://popper.js.org/)
* [Google Maps](https://developers.google.com/maps/documentation/javascript/tutorial)
* [EmailJS](https://www.emailjs.com/)
* [Sweet Alert](https://sweetalert.js.org/guides/)
* [Flaticon](https://www.flaticon.com/)
* [Font Awesome](https://fontawesome.com)
* Compress images with [Tinyjpg](https://tinyjpg.com/)
* Crop and resize images with [Iloveimg](https://www.iloveimg.com/crop-image)
* Convert image to ICO file with [Hnet](https://hnet.com/png-to-ico/)
* Extract color palette from image with [Adobe Color](https://color.adobe.com/create)
* Pick colors with [Eye Dropper](http://eye-dropper.kepi.cz/) Chrome extension
* Import Fonts from [Google Fonts](https://fonts.google.com/)
* Simple wireframe maker with [Wireframe](https://wireframe.cc/)
* [HTML Validator](https://validator.w3.org/)
* [CSS Validator](https://jigsaw.w3.org/css-validator/)
* [JavaScript Validator](https://esprima.org/demo/validate.html)
* [CSS Autoprefixer](https://autoprefixer.github.io/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/) installed on local device
* [GitHub](https://github.com/) for host the deployed website and repository of all versions
* Testing with [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
* Testing with [Cross Browser Testing](https://app.crossbrowsertesting.com/test-center)
* Learned from [W3schools](https://www.w3schools.com/)

### [⬆](https://github.com/iulianpro/discover-transylvania#table-of-contents)

> ## Testing

The website was tested both after the development of each section separately but also after its completion. I tested all the functionality in the main browsers that run on several operating systems: Chrome, Firefox, Opera, Microsoft Edge and Safari, in Windows 10, Mac OSX 10.14, Android and iOS operating systems, both physically on different personal and friends devices, as well as the [Cross Browser Testing tool](https://app.crossbrowsertesting.com/test-center). For full responsiveness, for the whole site, I used Bootstrap.

Testing during section development was done primarily with Chrome DevTools, making sure each element works correctly and optimally, including responsiveness across devices. For navbar, I tested the functionality of all links, including the site brand. I also tested the color change of links at hover and toggle and collapse functioning in small devices. As for main image, considering it is a slider created in JavaScript, I checked and tested in Chrome DevTools whether the functionality is optimal, whether the JS console displays errors of the script or not. The result was positive, with no errors displayed. Also, I tested the behavior and functionality of the script across devices and browsers, I did not register errors or malfunctions.

**Visit Section** has been tested across devices and browsers, both physically and using an online tool, Cross Browser Testing tool. Due to the structure that I also have, respectively two columns, where the first contains two other Boostrap rows, this section raised some challenge in the sense of disproportional displaying in different screen sizes. To balance this, two of the four cards are not displayed in these screens.

I also checked and tested the optimal functioning of the overlay display when user hover with mouse or when touching the cards on the touch screens. The result was positive, the effect is functional across devices and browsers. After I decided to implement the icon that suggests to the user to touch the screen for the website to display the overlay text, I had to improve the JavaScript code so that displaying and/or hiding them would be functional only for touch screens and hidden in large screens, desktops and laptops, ```(min-width: 992px)```. To accomplish this, the respective JavaScript code segment was moved inside the function that checks the size of the user's screen, the result being the desired one.
```js
function hideTouchIcon(minWidth) {
    if (minWidth.matches) {
        $('.touch-icon').css({ 'display': 'none' });
    } else {
        $('.card-area').hover(function () {
            $(this).children('.touch-icon').css({ 'display': 'none' });
        }, function () {
            $('.touch-icon').css({ 'display': 'block' });
        });
    }
}
```

**Destinations Section** has been tested across devices and browsers, both physically and using the same online tool, Cross Browser Testing tool but also the smooth functioning of JavaScript Map API. The main challenge in testing this section was to display Window Information in different screen sizes, as they contain both text and images. To solve this problem I decided that in the small screens these windows contain only text, in the medium screens it will contain both text and images and in the big screens it will be displayed including the header with the name of the locations. The technical solution applied was css targeting of the related classes and juggling with the display property in @media query. I also verified and tested across devices and browsers both the functionality of links to external sources and the optimal functioning of zoom effect with the ```transform: scales (1.8);``` of the images in the window info, the result being a positive one.

**Contact Section** has also been tested both in terms of responsiveness and functionality of the JavaScript code. The form as structure was built in Bootstrap and the behavior across devices and browsers was tested. I found a less attractive aspect especially in medium screens, which is why I chose to implement responsive dimensions depending on the screen size so that the user can see a balanced content on the page ```<div class="col-md-8 col-lg-6 ">```.

From a functional point of view, I tested two aspects. First of all the JavaScript code of validation form, considering that all the fields are mandatory to fill. To accomplish this, within the function responsible for sending the message, I have introduced a segment of JS code that checks the value of the inputs and in case of null values, it displays customized alert messages. The code was tested with optimal results. Secondly, I tested the functionality of the sending function of the email using the external EmailJS resource. During these tests I sent it more than 50 messages, so the results was positive, as confirmed by the message displayed by the JS console: ```{status: 200, text: "OK"}```

**Footer** has been tested to verify responsiveness across devices and browsers, the optimal functioning of both internal and external links. External links is open in a new page so that the user does not leave the page on which they are located.

The website has been also tested for HTML, CSS and JavaScript syntax error checking and code validation with [HTML Validator](https://validator.w3.org/), [CSS Validator](https://jigsaw.w3.org/css-validator/) and [JavaScript Syntax Validator](https://esprima.org/demo/validate.html).

**Cross Browser Testing** results:
* [iPad Mini 5 / Chrome Mobile](https://app.crossbrowsertesting.com/public/ic5e1fd8f17a0a91/livetests/38100061/1f9d7dc7)
* [iPad Mini 5 / Safari Mobile](https://app.crossbrowsertesting.com/public/ic5e1fd8f17a0a91/livetests/38099869/1da87595)
* [Android / Edge Mobile](https://app.crossbrowsertesting.com/public/ic5e1fd8f17a0a91/livetests/38099683/1356d562)
* [Android / UC Browser](https://app.crossbrowsertesting.com/public/ic5e1fd8f17a0a91/livetests/38099557/d158d66b)
* [Android / Firefox Mobile](https://app.crossbrowsertesting.com/public/ic5e1fd8f17a0a91/livetests/38099397/74ab8e96)
* [Android / Chrome Mobile](https://app.crossbrowsertesting.com/public/ic5e1fd8f17a0a91/livetests/38099221/d6ee1f2d)
* [Mac OSX 10.14 / Safari](https://app.crossbrowsertesting.com/public/ic5e1fd8f17a0a91/livetests/38098923/a45d38ef)
* [Windows 10 / Chrome](https://app.crossbrowsertesting.com/public/ic5e1fd8f17a0a91/livetests/38098101/f9078f5e)
* [Windows 10 / Opera](https://app.crossbrowsertesting.com/public/ic5e1fd8f17a0a91/livetests/38098551/7ef25dd3)
* [Windows 10 / Edge](https://app.crossbrowsertesting.com/public/ic5e1fd8f17a0a91/livetests/38098387/14559a6b)
* [Windows 10 / Firefox](https://app.crossbrowsertesting.com/public/ic5e1fd8f17a0a91/livetests/38098167/de714e0f)

### [⬆](https://github.com/iulianpro/discover-transylvania#table-of-contents)

> ## Deployment
For developing this project, I used three resources, GitHub for host the deployed website and repository of all versions, Git that I installed locally and Visual Studio Code, my favorite IDE editor.

To deploying Discover Transylvania using GitHub Pages the following steps were made:

* Opened up GitHub in the browser.
* Signed in using username and password.
* In my account GitHub website, I selected Repositories
* I selected ```discover-transylvania``` from the GitHub Dashboard.
* I navigated to *Settings* and to the *GitHub Pages* section.
* From the *Source* subsection, I clicked on the drop-down menu and selected *Master Branch*.
* Once *Master Branch* is selected, the page has been automatically refreshed, with a detailed ribbon display *GitHub Source Saved Pages* indicating the successful implementation.
* The link to the website I found in the *GitHub Pages* section, with a ribbon notification that states: 
```
Your site is published at https://iulianpro.github.io/discover-transylvania/
```
To run locally, you can clone this repository from GitHub, using the green "Clone" button, copying link and  typing in your favorite IDE editor terminal with the following command:
```
git clone https://github.com/iulianpro/discover-transylvania.git
```
### [⬆](https://github.com/iulianpro/discover-transylvania#table-of-contents)

> ## Credits

### Content
The texts that were used in this project are in fully from Wikipedia. The website also contains redirect links to this external resource.

### Media

* Vector icons from [Flaticon](https://flaticon.com)
* Purchased images from [Adobe Stock Images](https://stock.adobe.com)
* Free images from [Unsplash](https://unsplash.com/)
* Free images from [Transylvania Facebook Groups](https://www.facebook.com/TransilvaniaMea)

### Acknowledgements
To create this website, an inspiration but at the same time a source from which I learned many technical elements, was [W3schools](https://www.w3schools.com/). I would also like to thank Twitter for creating Bootstrap which is a magic framework. I would also like to thank the Code Institute instructors who are doing a great job and from where I learned a lot in just a few months. I would also like to thank the colleagues with whom I had discussions on the Slack channels, from where I also had to learn. And last but not least, I thank my mentor [Simen Daehlin](https://github.com/Eventyret).

*This website was created for educational purposes, February 2020.*

### ![#2b4438](https://placehold.it/700x20/ffffff/ffffff) [⬆](https://github.com/iulianpro/discover-transylvania#table-of-contents)
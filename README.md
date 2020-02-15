# Discover Transylvania

![Discover-Transylvania](https://raw.githubusercontent.com/iulianpro/discover-transylvania/master/wireframes/Multi-devices-DT.png)

The main purpose of this website/project in the real world is to promote the Transylvania region, the place where everyone already knows, the legend of Count Dracula was born. Welcome to this page, feel free to read this documentation and browse the website and if you have any questions you can contact me through GitHub, I will answer with pleasure.

> ## Table of Contents
* [UX](https://github.com/iulianpro/discover-transylvania#ux)
    - [User stories](https://github.com/iulianpro/discover-transylvania#user-stories)
        - [Project goals](https://github.com/iulianpro/discover-transylvania#project-goals)
        - [Audience goals](https://github.com/iulianpro/discover-transylvania#audience-goals)
        - [Website owner goals](https://github.com/iulianpro/discover-transylvania#website-owner-goals)
    - [Strategy](#)
    - [Scope](#)
    - [Structure](#)
    - [Skeleton](#)
    - [Surface](#)
* [Features](#)
    - [Existing Features](#)
    - [Features Left to Implement](#)
* [Technologies Used](#)
* [Testing](#)
* [Deployment](#)
* [Credits](#)
    - [Content](#)
    - [Media](#)
    - [Acknowledgements](#)

> ## UX

### User stories
#### Project goals

Probably the whole world knows the legend of Count Dracula, the famous vampire from a distant and uncertain world called Transylvania, a character created by the famous Bram Stoker in the eponymous novel, about which there have been countless films, serials, comics and many more. Equally likely is the fact that many people do not know this area, today's Transylvania, a region of Romania with a rich historical heritage, wonderful landscapes, with a flora and fauna that does not exist today in other parts of Europe, with craftsmanship ancestors, who also enchanted *His Royal Highness, Prince of Wales, Charles*. Through this project, the user will be awakened the interest to document and visit some other tourist attractions in Transylvania, besides the castle of Count Dracula, Bran.

#### Audience goals

* Read relevant information that can help in documenting a possible holidays;
* To see a landig page that will arouse my curiosity to navigate further;
* To can easily access and navigate through the website;
* To easy use a map to get an idea of where I can travel;
* To can send a message if I want to find out more details about this destination;

**Mark Q**: *"I like to spend my vacations in less crowded places, in rustic places, where I can meet ordinary people, observe their daily habits, know the history of the places, the crafts kept from generation to generation, which is why such website that can provide good clues about such travel destination is great."*

**Shellby S**: *"Nowadays, it is quite difficult to find a source of disinterested information and documentation, when the big trusts in this market promote their services through an aggressive marketing policy, selling more or less real promotions. . That's why I appreciate such a website that can offer you good tips for your next vacation destination."*

#### Website owner goals

* Tourism promotion of the area where I was born, tourism means income for the community;
* Gather information on what types of holidays people are looking for;
* Receive contact details through use of contact form;

### Strategy

This project aims to be a website that offers to the end user, brief information about the destinations that deserve to be visited in the historical province of Transylvania, the place of legend of the most famous vampire, Dracula. The website responds to some specific needs that a potential traveler may have: I heard about Transylvania, what can I visit ?, where are these places to visit ?, how can I find additional information?

### Scope

How does this project answer the above questions? By implementing several functionalities that can help the user to outline a minimum overview, namely: presenting some well-known and highly appreciated locations, implementing an interactive map, through the possibility of accessing external documentation resources, through the possibility to request more information.

### Structure

The structure of this website includes several sections, functionalities with which the user can interact, links to the external documentation resource, relevant images with the locations to be visited, an interactive map, a form by which the user can request additional information and external links to social pages. mediate.

**Landing page** includes the navbar that is positioned at the top of the page and is fixed so that the user has access to the menu at any time and in any section they would see at a moment's notice. For a more enjoyable browsing experience, I used html {scroll-behavior: smooth;} so that navigating from one section to another would be smooth. Also, the left side of the navbar contains the website name and a logo created with Font Awesome. In small screens, the navbar will collapse into a "hamburger" icon. When the icon is clicked, the navbar will expand and show the whole menu. Main image is built with javascript as a slider consisting of several images, with an effect of fade in and fade out.

**Visit section** is made up of several "cards" containing images and information about the places that can be seen. With a feature created with javascript, the user can read more details, which are displayed above the cards when positioning the mouse hover or when finger-touching on the touch screens. In order to convey to the user the existence of these functionalities, I have chosen to position in the top-right corner of each card with ```.touch-icon {position: absolute;}``` an icon to suggest that he has this option to read further details. Also, since the overlay functionality has a transparent background, with javascript, the background text and the touch screen icon, they are hidden so that the overlay text can be read easily. The text of both the card and the overlay is adapted with the help of bootstrap so that certain paragraphs are hidden and displayed depending on the resolution of the user's screen. In medium screens (usually tablets) three of the five cards are displayed.

**Destinations section** is built using javascript maps API using custom markers. The main feature of the map is that the user can access every location on the map with a click that opens an infowindow. Infowindow contains images and text that the potential user can visualize thus finding additional information not only about the position on the map of the location, but also additional details related to its history. Also, each infowindow contains at the end a redirect link to an external documentation resource, namely Wikipedia. Given the relatively small size of these windows and implicitly the images contained, I chose to increase them if the user was with the mouse over the image, by implementing an effect ```.imgbox img:hover {transform scale (1.8);}```. Each imagewindow has a custom background.

**Contact section** is a minimalist one that contains a custom boostrap form with a few fields that the user can fill in if he decides to request additional information: first name, last name, email address, user message, and a submit button. The form has live functionality implemented with avascript and an external JS Email resource through which the message can be submitted and sent to the website owner.

**Footer** is a very simple one through which the user has access at hand to the website menu and through which he can also access the social media pages of the Transylvania region of Romania.

###### [(back to table of contents)](https://github.com/iulianpro/discover-transylvania#table-of-contents)
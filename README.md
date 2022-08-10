# **Space Match - A Memory Game**
## **Description**
This is a small web-based application

The live page can be found here: [Arán Bakehouse](https://tomh-22.github.io/Milestone-Project-1/)

<br>

![Am I Responsive?](assets/readme/amiresponsive.png)

<br>

# **Development**
The project was developed using HTML and CCS as the primary languages and an emphasis was placed on good UX design and best practice.

## **Users and Target Audience**

### **Target Audience**
The target audience is made up of both locals and visitors to the area who would like to find out if there was a place to pick up some bread, a pastry or a nice coffee. The area is quite 'touristy', with people coming to Doolin as part of a trip to the Aran Islands or a visit to the Cliffs of Moher. As the bakery is small and located off the main road, it may be easily missed, so a good online presence is essential.

### **User Stories**
- A **New User** wants to be able to find the website on Google in the first place, so good SEO and valid code are important. Such as user wants to see easy-to-find information on offerings, location, opening hours and contact information. In the case of a person with certain disabilities, this person still wants to be able to use the site - perhaps with the help of assistive technologies - so this has to be considered.

- An **Existing User** wants to be able to return to the website and quickly be able to see if any information has changed, or quickly navigate to a section they have been to before but have forgotten the information within, e.g. opening hours, telephone number. Additionally, a previous user may wish to use the contact form to contact the business. 

## **Design & Structure**

### **Color Scheme**
The colour scheme was kept very simple and clean, with a lot of white `(#FFFFFF)`, a shade of orange `(#FCD386)` as well as a light grey `(#F5F5F5)`. Additionally, for e.g. hover effects, the `opacity` attribute was used to style elements. The main text is rendered as black on white. Overall, the site provides good contrast and viewing experience.
<br><br>
![Colour Palette](assets/readme/colours.png)

### **Layout**
The layout was kept clean and free of clutter, using a one-page design: main sections are seperated by a header bar and sub-sections are kept visually seperated using a grid-based card design.
### **Fonts**
The main fonts used were provided by Google Fonts, and are named `Doppio One` and `Spectral`. The former was used in the main logo and for the headers while the `Spectral` font was used for the text content. I felt these complemented each other very well and made it easy to distinguish heading- and body text. Back-up fonts of `sans-serif` and `serif` were used respectively, in line with the type of preferred font. 
<br><br>
![Doppio One Font](assets/readme/doppioone.png) ![Spectral Font](assets/readme/spectral.png)

### **Images**
Images used were procured from `Pexels.com` and were resized according to requirements. They were also converted to `.webp` format in an effort to ensure quality, size and loading performance. Colour tone was adjusted to preference using a mixture of `opacity` attributes and gradient overlays. Images were rounded using the `border-radius` attribute, which worked very well. Lastly, a favicon was added to the page: this was constructed from part of the logo design elements and re-sized accordingly.
### **Logo**
I designed the main logo specifically for the page using Procreate. I isolated the main drawing from a licence-free artwork and added text to it before converting it to an appropriately-size `.webp` file.

## **Features**

### **Logo**
The main logo is positioned at the top of the page and illustrates the branding of the business. Its design was discussed above. 

![Logo](assets/readme/logo.png)

### **Navigation Bar**
The navigation bar is static, and while I would have preferred it to be 'sticky', this did not fit within the scope of the project and was not really required given the amount of content within the site. It is laid out in such a way as to direct the user to the most important sections right away, as per user experience design requirements. 

![Navigation Bar](assets/readme/navbar.png)

### **Splash Image with Promo Text**
The splash image provides visual appeal to the user and provides a way to showcase aspects of the business. It contains a promotional message overlay that can be amended to suit, as well as a button style link that can perform a suitable action. In this case it brings the user to the 'contact' section.

![Splash Image](assets/readme/splashimage.png)

### **Product Highlights Section**
This consists of three 'cards', highlighting some of the business' key products. The layout can be changed in that columns could easily be added or removed depending on requirements. All sections are based on a `display: grid;` layout.

![Products](assets/readme/products.png)

### **Google Map**
The Google map was added to illustrate the business' location and provide interesting content. It was sized and styled in accordance with the site's overall design. I experimented with various map styles and settled on a monotone style which I implemented using a `greyscale` style attribute. 

### **Table with Opening Hours**
I utilised a table element to display the bakery's opening hours. This makes the formating consistent and the content easy to amend. I achieved seperation of the table header containing the days of the week from the table data containing the hours by adding an empty `td` element with a `width: 50px` attribute. 

![Map and Opening Hours](assets/readme/mapandhours.png)

### **Contact Form**
The contact form is similar to the one that we used during the 'Love Running' code along and captures simple data: name, email address and a message. I applied custom styling, in line with rest of th page, and made sure that a requirement to complete all fields was added. I omitted any newsletter sign-up options as I felt it was not required here. I used the Code Institute's default form post method, and submitting the form results in a new tab being opened which displays a success message. Ideally, I would have liked to add additional functionality to the form but I felt this would require Javascript.

### **Social Media Links**
I added social media links to the 'contact' section of the page: I made use of Fontawesome icons which I styled with a `:hover` attribute. All external links open in a new tab which is also stated in the `aria-label`. 

![Get in Touch Section](assets/readme/getintouch.png)

### **Footer**
The footer contains some copyright info and a short funny message. It is styled similarly to the section headers but a seperate class to style the text content.

### **Arrow Icon**
Every section header, as well as the footer, incorporates a small arrow icon which, when clicked, will bring the user back to the top of the page. On hover, a 'Back to Top!' message is displayed.

![Footer](assets/readme/footer.png)

## **Testing, Validation and Compatibility**

### **HTML Validation**
The HTML code was assessed using the W3C Mark-Up Validator Tool. While I did encounter some syntax errors, all were fixed prior to deployment. 

![HTML Validation](assets/readme/html.png)

### **CSS Validation**
The HTML code was assessed using the W3C CSS Validator Tool. Again, while I did encounter some syntax errors, all were fixed prior to deployment. 

![CSS Validation](assets/readme/css.png)

### **Lighthouse Testing**
Assessing the site based on performance, accessibility, best practices and SEO using Chrome Developer Tools' Lighthouse test highlighted a number of issues which prompted me to make a number of changes prior to deployment:
- I addressed accessibility issues by adding relevant attributes to some elements, i.e. `aria-label`, `title`, `alt` text and such. 
- I addressed performance issues by reducing image file sizes and re-uploading them in a `.webp` format. Additionally, I added fall-back fonts and added additional code to improve initial page load speed. 
- I addressed a few other minor issues as recommended by the report to bring the overall score up into the green area. 
A number of issues highlighted were as a result of third-party code which did not affect functionality, such as the Google Maps API, Google Fonts and the Fontawesome script but I did not address these.  

![Lighthouse Test](assets/readme/lighthouse.png)

### **Cross-browser Checks and Device Testing**
I tested the site on a variety of browsers: Edge, Opera, Safari, Firefox and Chrome. All rendered the site as expected. I also tested the site on Chrome and Safari within iOS - this presented no problems. 

I added a media query feature which alters the layout of the page once the `vw` becomes less than `800px` to a format more suitable for mobile devices and smaller screens. These design changes work well up to a `vw` of `315px` at which point the layout becomes constrained. I could have added more styles as part of a further media query but decided against it as even a small mobile device offers a screen width of at least 320px nowadays. 

### **Links**

All links were checked and worked as expected. All external links opened in a new tab. 

### **Contact Form**

The contact form was checked and worked as expected. The field validation worked also.

## **Technologies and Resources Used**

- **Fontawesome** I used this to display icons on the site.

- **Google Fonts** I used Google Fonts to source and load the fonts used within the page. 

- **Am I Responsive** I used this site to test how the page would render on devices with different screen sizes. I also used it to generate a nice image for the Read Me file.

- **W3C Validation Tools** I used the Mark Up- and CSS Validation tools to test the site's code prior to deployment. 

- **W3 Schools** This website was very useful to me in terms of explaining HTML and CSS related concepts and best practice implementation. 

- **Stack Overflow** This provided a great resource in terms of troubleshooting code and learning to code more effectively.

- **Chrome Developer Tools** This was an invaluable tool during the development process in many ways, from 'Inspecting' elements and associated attributes to pre-deployment testing using the Lighthouse feature. 

- **Procreate** An iPad app I used to create the site's logo.

- **Pexels** A site providing free stock images, which I used within my page.

- **Google Maps API** I used this to diplay a location map on the site. 

- **Convertio** I used this to convert images to a suitable format, `.webp` in this case. 

- **Befunky** I used this site to edit images on the fly: resizing, cropping and colour profile edits.

- **Freepik** I obtained the illustration that makes up part of the main logo from this site. 

## **Known Bugs and Issues**

- **Arrow Icon Link** The arrow icon link which, when clicked, brings the user back to the top of the page is currently aligned or styled in such a manner that it off-sets the text content of the section header a number of pixels to the left, causing it to be centrally aligned no longer. It does not impair functionality and would probably go unnoticed by most, but I would like to see it fixed. 

- **Layout Features with `<br>` Element** I have used a very small number of these elements to adjust spacing within the page which is not a valid use for this element. A fix would involve using either `padding` or `margin` attributes to achieve the desired spacing. 

- **Media Query & Layout Issues** As briefly mentioned above, when using a small screen with a `vw` of less than `315px` the layout becomes problematic. While this is unlikely to occur frequently, I could have added another media query feature to adjust the styling further, based on screen with such a small width.

And lastly, 

- **Page Performance and Images** While I already optimised all of the images in terms of size and file type, I note that the images, while being sized down appropriately as part of the media query feature on smaller screens, are still of a large intrinsic dimension and file size to make them render well on large screens. I could have uploaded images of reduced dimensions and file size to render as part of the media query and thus improved loading times and general performance on smaller screen devices.

## **Attributions**
- `bakery.webp`: original image by Daria Shevsova on [Pexels](https://www.pexels.com/photo/two-black-bicycles-beside-gray-frame-glass-window-880467/)

- `bread.webp`: original image by Kira Schwarz on [Pexels](https://www.pexels.com/photo/close-up-shot-of-sourdough-bread-in-a-tray-10200851/)

- `coffee.webp`: original image by Anna Tarazevich on [Pexels](https://www.pexels.com/photo/a-person-holding-stainless-mug-while-steaming-milk-4927154/)

- `pastries.webp`: original image by Shameel Mukkath on [Pexels](https://www.pexels.com/photo/breads-on-wooden-tray-5112517/)

- `logo.webp` and `favicon.webp`: original image by 'pikisuperstar' on [Freepik](https://www.freepik.com/free-vector/homemade-bakery-background_4335366.htm)

## **Thank You**
- First and foremost, thank you very much to my better half Danielle for all the support and encouragement!
- Thank you to my fellow students for keeping the Slack Channel going and providing solutions to problems before I even encounter them. 
- Thank you to my mentor, Daisy McGirr, whom I regrettably underutilised during this project: look forward to picking your brain on the upcoming ones. 🖖🏼 


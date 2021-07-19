# On the road to the perfect set

In one week our team developed a web app designed for mobile to assist musicians on the road, plan their shows and accommodations, and allow their fans to follow their tour.

# Table of Content

# Introduction

In one week our team developed a web app designed for mobile to assist musicians on the road, plan their shows and accommodations, and allow their fans to follow their tour.
This project was a one week sprint where team Jee Java completed a mobile-accessible application for use by music artists and fans.
Artists can use this application to keep track of their bookings - music venues, restaurants, hotels, etc.
Fans can use this application to follow their favorite artists.
From the splash page, users can either register, login, or change the visual theme. Two themes are offered: rock and EDM.

###### Uses:

- This app allows for Artists to login as admin or Fan to login as viewers
- Artists are able to track their next event, book accommodations, and start GPS navigation
- Fans are able to view their favorite artists next event and search for more artist events

# What does this application do?

###### Splash Page

The splash page is what the user sees when they open the app. They can navigate either to the login page or registration page. At the bottom of the page is a slider to switch between display themes.

###### Register Page

The register page allows the user to register either as an artist or a fan. The user submits information for their google account, password, bio and portrait image. When the user clicks the “Create Account” button, they are either taken to the fan or artist home page.

###### Login Page

The login page allows existing users to login with their google account. After they click the “Login” button they are taken to the artist home page if they registered as an artist and to the fan home page if they registered as a fan.

###### Fan Home

The fan home is the landing page when a fan user logs into the app. There are navigation options to access the Artist Search and Favorite Artists pages.

###### Favorite Artists

The favorite artists page allowed the user to view information about their favorite artists including their bio, website, and upcoming tour dates. It gives the user easy access to check out what show they want to attend next. The view is accordion style and the data is pulled from our database. There is also a back button that navigates back to the Fan Home and a settings button with a log out option.

Future implementations: Delete functionality

###### Artist Search

This page allows the user to search for artists and view their live shows and upcoming events. You can also click on their website directly to be redirected for more information.

Future implementation: add searched artist to favorite list.

###### Artist Home

The Artist home shows a brief cap of the Artist’s booked travels and the directions in between on the embedded Google map. In addition, there are navigation options to access the Artist Bookings and Artist Recommendations page.

###### Artist Bookings

The Artist bookings shows all booking that Artist has booked, and sorts it by time and date from the most recent to the latest. When too many bookings are made, the artist can use the calendar to select the dates to show the trips for a specific date. Upon clicking the individual booking, a dropdown card displays all the information about that booking and has a link to the yelp page for the venue/hotel. The back arrow on the top of the page takes the user back to the previous page.

###### Artist Recommendations

This page enables the Artist user to search for venues, hotels, and restaurants to potentially book. The search uses the Yelp API with city and booking category parameters. The results of the search are displayed in an accordion, which can be toggled to view details. When the user selects the “Add to Bookings” button, a date picker modal appears which allows the user to save the booking for a designated date. Once a date is selected, the new booking will appear on the Artist Bookings page.

###### Settings Modal

The settings modal, which appears as a music mixer icon in the upper-right hand corner, can be accessed from any page. It displays the username, bio, and website of the user. From the settings page, the user can log out and return to the login screen.

# Application API

[Documentation](https://github.com/TeamJeeJava/ThePerfectSet/blob/master/PerfectSetAPI.md)

# Try it out

[Getting Started](https://github.com/TeamJeeJava/ThePerfectSet/blob/master/GettingStarted.md)

# Contributors

[Elizabeth Mendenhall - Co-Project Owner](https://github.com/ZoyaStudio)
[Anan Wolf - Co-Project Owner](https://github.com/ananwolf)
[Vy Tran - Architect](https://github.com/vtran1022)
[Joseph Rivera - UI Designer](https://github.com/JoeyRivera01)
[Ethan Barker](https://github.com/ebbarker)
[Alexander Causey](https://github.com/alexandercausey)
[Jack Zongchen Yang](https://github.com/back22back)

# Tech stack

- React.js
- React-Bootstrap
- Express
- Node.js
- PostgreSQL
- React-Google-Maps
- Google-Directions API
- Yelp API

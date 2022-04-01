<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  
  <img src="assets/Play Store Banner.png" alt="Logo" width="100%">

  <a href="https://github.com/luca-martinelli-09/pizza-for-reddit"><h3 align="center">Pizza for Reddit</h3></a>
  <p align="center">
    Pizza for Reddit is another alternative client for Reddit.
    <br />
    <a href="https://play.google.com/store/apps/details?id=com.lucamartinelli.pizza">View on Play Store</a>
    ·
    <a href="https://github.com/luca-martinelli-09/pizza-for-reddit/issues">Report Bug</a>
    ·
    <a href="https://github.com/luca-martinelli-09/pizza-for-reddit/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React Native](https://reactnative.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Creare an "**installed app**" at [https://www.reddit.com/prefs/apps](https://www.reddit.com/prefs/apps) and obtain the **Client ID**.
1. Clone the repo
   ```sh
   git clone https://github.com/luca-martinelli-09/pizza-for-reddit.git
   cd Pizza
   ```
1. Move the file `gradle.properties` into `android` folder and follow the [following instructions](https://reactnative.dev/docs/signed-apk-android) to get ready for publishing in the Google Play Store. 
1. Install NPM packages
   ```sh
   npm install
   ```
1. Enter the Client ID in the `Config.js`
   ```js
   const CLIENT_ID = "ENTER YOUR CLIENT ID";
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Luca Martinelli - [@LucaMartinelli0](https://twitter.com/LucaMartinelli0) - martinelliluca98@gmail.com

Project Link: [https://github.com/luca-martinelli-09/pizza-for-reddit](https://github.com/luca-martinelli-09/pizza-for-reddit)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/luca-martinelli-09/pizza-for-reddit.svg?style=for-the-badge
[contributors-url]: https://github.com/luca-martinelli-09/pizza-for-reddit/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/luca-martinelli-09/pizza-for-reddit.svg?style=for-the-badge
[forks-url]: https://github.com/luca-martinelli-09/pizza-for-reddit/network/members
[stars-shield]: https://img.shields.io/github/stars/luca-martinelli-09/pizza-for-reddit.svg?style=for-the-badge
[stars-url]: https://github.com/luca-martinelli-09/pizza-for-reddit/stargazers
[issues-shield]: https://img.shields.io/github/issues/luca-martinelli-09/pizza-for-reddit.svg?style=for-the-badge
[issues-url]: https://github.com/luca-martinelli-09/pizza-for-reddit/issues
[license-shield]: https://img.shields.io/github/license/luca-martinelli-09/pizza-for-reddit.svg?style=for-the-badge
[license-url]: https://github.com/luca-martinelli-09/pizza-for-reddit/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/luca-martinelli
[product-screenshot]: images/screenshot.png

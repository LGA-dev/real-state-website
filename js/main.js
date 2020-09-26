let p = document.getElementById("hamburger-menu"); // Store the hamburger menu element id on p
p.onclick = showMenu; // Onclick, execute showMenu

function showMenu() {
  //Display the navigation menu for mobile display
  document.getElementById("navigation").classList.add("display-hamburger-menu");

  //Remove the hamburger menu icon from navigation menu
  document.getElementById("hamburger-menu").classList.remove("hamburger-menu"); 
  document.getElementById("hamburger-menu").classList.add("remove-element");

  //Remove the logo from the navigation menu
  document.getElementById("logo").classList.remove("logo");
  document.getElementById("logo").classList.add("remove-element");

  //Remove the  navigation links from the navigation menu
  document.getElementById("navigation-links").classList.remove("navigation-links");
  document.getElementById("navigation-links").classList.add("display-mobile-menu"); 
}

// 4 Months later update
// I don't know what I was thinking when I did this weird hamburger menu
// It first removes the logo, the hamburger icon and the navigation links
// Then it displays the navigation links again in a flex container
// I'll leave it as is it because it's an old project and it's fun to see this kind of stuff months later
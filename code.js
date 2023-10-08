hideElement("waypoint1_text");
hideElement("waypoint2_text");
hideElement("waypoint3_text");
hideElement("waypoint4_text");
hideElement("ADC");
onEvent("button", "click", function() {
  playSound("assets/category_tap/level_select_1.mp3", false);
  hideElement("button");
});
onEvent("orion", "click", function() {
  playSound("assets/category_whoosh/animation_whoosh13.mp3", false);
  setProperty("orion", "x", getProperty("waypoint1", "x"));
  setProperty("orion", "y", getProperty("waypoint1", "y"));
  setProperty("waypoint1","icon-color","green");
  showElement("waypoint1_text");
  onEvent("orion", "click", function() {
    setProperty("orion", "x", getProperty("waypoint2", "x"));
    setProperty("orion", "y", getProperty("waypoint2", "y"));
    setProperty("waypoint2","icon-color","green");
    showElement("waypoint2_text");
    onEvent("orion","click",function() {
      setProperty("orion", "x", getProperty("waypoint3", "x"));
      setProperty("orion", "y", getProperty("waypoint3", "y"));
      setProperty("waypoint3","icon-color","green");
      showElement("waypoint3_text");
      onEvent("orion","click",function() {
        setProperty("orion", "x", getProperty("waypoint4", "x"));
        setProperty("orion", "y", getProperty("waypoint4", "y"));
        setProperty("waypoint4","icon-color","green");
        showElement("waypoint4_text");
        hideElement("waypoint1_text");
        hideElement("waypoint2_text");
        hideElement("waypoint3_text");
        showElement("ADC");
        open("https://www.nasa.gov/stem/nextgenstem/moon/app_challenge.html");
    });
    });
  });
});

class Form 
{
  constructor() 
  {
    this.titleImg = createImg("./assets/title.png", "game title");
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.greeting = createElement("h2");
  }

  hideForm() 
  {
    this.input.hide(); //hide() removes(hide) the html element from the canvas
    this.greeting.hide();
    this.playButton.hide();
  }

  setElementsPosition()
  {
    this.titleImg.position(120, 160);
    this.input.position(width/2 - 100, height/2 - 80);
    this.playButton.position(width/2 - 80, height/2 - 20);
    this.greeting.position(width/2 - 300, height/2 - 100);
  }

  setElementsStyle()
  {
    this.titleImg.class("gameTitle");
    this.input.class("customImput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  display()
  {
    this.setElementsPosition();
    this.setElementsStyle();
  }
}

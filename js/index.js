welcomeText =
  "Hi!\r\n\r\n" +
  "This is Can Yucel...\r\n\r\n" +
  "As a Software Engineer, I am mostly working on architecting microservices, and running things in containers at LaunchPad Central in San Francisco.\r\n\r\n" +
  "Beside that playing guitar and singing (and also struggling with the flute in these days). You can even see me gigging around in San Francisco with my band: Mechanical Turk.\r\n\r\n" +
  "I will add more information here in a while, but until then you can reach me from:\r\n\r\n" +
  "Twitter: @canthefason\r\n" +
  "GitHub: /canthefason\r\n" +
  "Facebook: /mechanicalturkband"

$( document ).ready( function() {
  options = {
    WIDTH: '100%',
    HEIGHT: '100%',
    PS1: 'canthefason$',
    WELCOME_MESSAGE: '',
    PROMPT_CLASS: "wterm_prompt hidden"
  }

  $('#wterm').wterm(options);
  $('#welcome').typeTo(welcomeText);
  typeSpeed = 15;
  $.typer.options.typeSpeed = typeSpeed;
});

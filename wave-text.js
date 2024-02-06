$(window).on('load', function() {
	let delay = 200;

	let element = $("#wave-text");
	let text = element.text();
	element.html(text
	  .split("")
	  .map(letter => {
		  return `<span>` + letter + `</span>`;
	  })
	  .join(""));
	
      Array.from(element.children()).forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("wavy");
        }, index * 60 + delay);
      });
})
const sections = $("section");
const display = $(".maincontent");

sections.first().addClass("active");

const performTransition = sectionEq => {
  const position = sectionEq * -100;

  display.css({
    transform: `translateY(${position}%)`
  });

  sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
};

const scrollViewport = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction == "next") {
    performTransition(nextSection.index())
  }

  if (direction == "prev") {
    performTransition(prevSection.index())
  }
}

$(window).on("wheel", e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scrollViewport("next");
  }

  if (deltaY < 0) {
    scrollViewport("prev");
  }

});
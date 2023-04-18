window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var documentHeight = document.body.offsetHeight;
    var windowHeight = window.innerHeight;
    var percentageScrolled = (scrollPosition / (documentHeight - windowHeight)) * 100;
    document.documentElement.style.setProperty('--scroll-percentage', percentageScrolled + '%');
  });
window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollUpLink").style.display = "block";
        } else {
            document.getElementById("scrollUpLink").style.display = "none";
        }
    }

    // Smooth scroll to top when anchor link is clicked
    document.getElementById('scrollUpLink').addEventListener('click', function(e) {
        e.preventDefault();
        const scrollToTop = () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, c - c / 8);
            }
        };
        scrollToTop();
    });
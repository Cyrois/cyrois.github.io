$(document).ready(function(){
    $('.carousel').carousel();
    initWorkCarousel();

    initContactForm();
    
    $('.parallax').parallax();

    initFrontEndSkillChart();
    initBackEndSkillChart();
    initOtherSkillChart();

    initNavBar();
});

function initWorkCarousel() {
    $('#workCarousel').carousel({
        fullWidth: true,
        indicators: true
    });

    // move next carousel
    $('.moveNextCarousel').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#workCarousel').carousel('next');
    });

    // move prev carousel
    $('.movePrevCarousel').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#workCarousel').carousel('prev');
    });
}

function initContactForm() {
    $("#submit_form").on("click", function (e) {
        if($("#email_form .invalid").length === 0) {
            $("#email_form").submit();
        }
    });
}

const defaultChartOptions = {
    scale: {
        display: true,
        ticks: {
            beginAtZero: true,
            max: 10,
            fontSize: 20,
            fontColor: 'white',
            showLabelBackdrop: false,
            display: false //hides the ticks
        },
        pointLabels: {
            fontSize: screen.width < 768 ? 32 : 20,
            fontColor: 'white',
        }
    },
    legend: {
        display: false
    },
};

function initFrontEndSkillChart() {
    const data = {
        labels: ['Grails', 'JQuery', 'Javascript', 'React/Angular', 'CSS', 'HTML'],
        datasets: [{
            backgroundColor: 'rgba(242, 38, 19, 0.2)',
            borderColor: 'rgba(214, 69, 65, 1)',
            pointBackgroundColor: 'rgba(214, 69, 65, 1)',
            data: [8, 8, 6, 3, 8, 9]
        }]
    }

    new Chart(document.getElementById('frontEndChart'), {
        type: 'radar',
        data: data,
        options: defaultChartOptions
    });
}

function initBackEndSkillChart() {
    const data = {
        labels: ['Java', 'Spring Boot', 'SQL'],
        datasets: [{
            backgroundColor: 'rgba(37, 116, 169, 0.2)',
            borderColor: 'rgba(75, 119, 190, 1)',
            pointBackgroundColor: 'rgba(75, 119, 190, 1)',
            data: [7, 4, 2]
        }]
    }

    new Chart(document.getElementById('backEndChart'), {
        type: 'radar',
        data: data,
        options: defaultChartOptions
    });
}

function initOtherSkillChart() {
    const data = {
        labels: ['Atlassian', 'Version Control', 'Build Tools', 'Jenkins', 'AWS', 'Web Servers', 'Testing'],
        datasets: [{
            backgroundColor: 'rgba(165, 55, 253, 0.2)',
            borderColor: 'rgba(102, 51, 153, 1)',
            pointBackgroundColor: 'rgba(102, 51, 153, 1)',
            pointHitRadius: 200,
            data: [6, 8, 3, 6, 3, 4, 10]
        }]
    }

    new Chart(document.getElementById('otherChart'), {
        type: 'radar',
        data: data,
        options: defaultChartOptions
    });
}

function scrollToSection(e, $container) {
    e.preventDefault();
    e.stopPropagation();
    $('html,body').animate({
    scrollTop: $container.offset().top - 50},
    'slow');
}

function initNavBar() {
    $("#aboutMeBtn").click(function(e){
        scrollToSection(e, $("#aboutMe"));
    });
    
    $("#skillsBtn").on("click", function(e){
        scrollToSection(e, $("#skills"));
    });

    $("#expBtn").click(function(e){
        scrollToSection(e, $("#exp"));
    });

    $("#projectsBtn").click(function(e){
        scrollToSection(e, $("#projects"));
    });

    $("#booksBtn").click(function(e){
        scrollToSection(e, $("#books"));
    });

    $("#contactBtn").click(function(e){
        scrollToSection(e, $("#contactMe"));
    });
    
}
document.addEventListener("DOMContentLoaded", () => {
  // ==========================================scroll magic ========================================================
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: ".portfolioDiv",
    triggerHook: 0.8,
    reverse: false
  })
    .on("start", function() {
      var ctx1 = document.getElementById("wrapper-flight").getContext("2d");
      var Chart_Flight = new Chart(ctx1, {
        type: "horizontalBar",
        data: {
          labels: [
            "JS",
            "CSS/Html",
            "AxiosJS",
            "Bootstrap",
            "Jquery",
            "API calls",
            "Git"
          ],
          datasets: [
            {
              data: [9, 9, 7, 6, 5, 8, 9],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(75, 192, 192)",
                "rgb(255, 206, 86)",
                "rgb(153, 102, 255)",
                "rgb(90, 20, 42)",
                "rgb(255, 159, 64)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontFamily: `"Roboto Mono", monospace`,
                  fontSize: 18,
                  fontColor: "#101c28"
                }
              }
            ],
            xAxes: [
              {
                display: false,
                ticks: {
                  max: 10,
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
      var ctx2 = document.getElementById("wrapper-news").getContext("2d");
      var Chart_News = new Chart(ctx2, {
        type: "horizontalBar",
        data: {
          labels: [
            "JS",
            "CSS/Html",
            "Ajax",
            "MongoDB",
            "Mongoose",
            "Bootstrap",
            "Express"
          ],
          datasets: [
            {
              data: [9, 6, 6, 8, 7, 6, 7],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(75, 192, 192)",
                "rgb(255, 206, 86)",
                "rgb(153, 102, 255)",
                "rgb(90, 20, 42)",
                "rgb(255, 159, 64)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontFamily: `"Roboto Mono", monospace`,
                  fontSize: 18,
                  fontColor: "#101c28"
                }
              }
            ],
            xAxes: [
              {
                display: false,
                ticks: {
                  max: 10,
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
      var ctx3 = document.getElementById("wrapper-friend").getContext("2d");
      var Chart_Friend = new Chart(ctx3, {
        type: "horizontalBar",
        data: {
          labels: [
            "Express",
            "Sequelize",
            "MySQL",
            "JS",
            "Handlerbars",
            "CSS/Html",
            "Bootstrap",
            "AxiosJS"
          ],
          datasets: [
            {
              data: [9, 8, 8, 9, 6, 3, 4, 7],
              backgroundColor: [
                "rgb(90, 20, 42)",
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(75, 192, 192)",
                "rgb(255, 206, 86)",
                "rgb(1, 19, 19)",
                "rgb(90, 20, 42)",
                "rgb(255, 159, 64)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontFamily: `"Roboto Mono", monospace`,
                  fontSize: 18,
                  fontColor: "#101c28"
                }
              }
            ],
            xAxes: [
              {
                display: false,
                ticks: {
                  max: 10,
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
      var ctx4 = document.getElementById("wrapper-gif").getContext("2d");
      var Chart_Gif = new Chart(ctx4, {
        type: "horizontalBar",
        data: {
          labels: ["Jquery", "Git", "CSS/Html", "Bootstrap", "Giphy's API"],
          datasets: [
            {
              data: [7, 4, 6, 3, 8],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(1, 19, 19)",
                "rgb(90, 20, 42)",
                "rgb(255, 159, 64)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontFamily: `"Roboto Mono", monospace`,
                  fontSize: 18,
                  fontColor: "#101c28"
                }
              }
            ],
            xAxes: [
              {
                display: false,
                ticks: {
                  max: 10,
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
      var ctx5 = document.getElementById("wrapper-burger").getContext("2d");
      var Chart_Burger = new Chart(ctx5, {
        type: "horizontalBar",
        data: {
          labels: ["JS", "MySQL", "Sequelize", "Handlerbars", "Express"],
          datasets: [
            {
              data: [9, 7, 8, 6, 9],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 215)",
                "rgb(255, 206, 86)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontFamily: `"Roboto Mono", monospace`,
                  fontSize: 18,
                  fontColor: "#101c28"
                }
              }
            ],
            xAxes: [
              {
                display: false,
                ticks: {
                  max: 10,
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
      var ctx6 = document.getElementById("wrapper-pokemon").getContext("2d");
      var Chart_Pokemon = new Chart(ctx6, {
        type: "horizontalBar",
        data: {
          labels: ["JS", "CSS/Html", "Jquery", "Git"],
          datasets: [
            {
              data: [9, 7, 8, 6],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(75, 192, 192)",
                "rgb(255, 206, 86)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontFamily: `"Roboto Mono", monospace`,
                  fontSize: 18,
                  fontColor: "#101c28"
                }
              }
            ],
            xAxes: [
              {
                display: false,
                ticks: {
                  max: 10,
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });

      //console.log("done");
    })
    .setClassToggle(".portfolioDiv", "fade-in")
    //.addIndicators()
    .addTo(controller);

  // ================================================================ Burger Menu ========================================================================
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  //==================================================================== Type js script ====================================================================
  var typed_logo = new Typed("#logo", {
    strings: [
      `<i class="em em-rocket"></i> Welcome <i class="em em-rocket"></i>`,
      "Hi, There !!!",
      `Chris <i class="em em-i_love_you_hand_sign"></i>`
    ],
    typeSpeed: 100,
    cursorChar: "_",
    loop: false
  });
  var typed_terminal = new Typed("#para", {
    strings: [
      `Christopher Fajardo<br/>{Full-Stack} Developer<br/><br/><br/><p id="scroll-down" class="hero-foot">[Scroll down]<i class="em em-point_down"></i><p/>`
    ],
    cursorChar: "",
    typeSpeed: 40
  });

  $("#show-cv").on("click", function() {
    if ($("#cv").hasClass("is-hidden")) {
      $("#cv").removeClass("is-hidden");
      $("#show-cv")
        .empty()
        .html(`Hide CV &nbsp;&nbsp;<i class="em em-face_with_monocle"> </i>`);
    } else {
      $("#show-cv")
        .empty()
        .html(`Show CV &nbsp;&nbsp;<i class="em em-face_with_monocle"> </i>`);
      $("#cv").addClass("is-hidden");
    }
  });

  $("#send-email").on("click", function(e) {
    e.preventDefault();
    //get the name field value
    var name = $("#name-email").val();
    //get the name field value
    var email = $("#email-email").val();
    //get the comments
    var subject = $("#subject-email").val();
    //get the subject
    var comments = $("#txt-email").val();
    //pretend no one will hack this --- will put this on a local env def
    $("body").html(
      `<form class="is-hidden" method="POST" action="https://formspree.io/christopher.fajardo73@gmail.com"><input id="name-email"  class="input"  name="name"  type="text" value="${name}"/> <input  id="subject-email"  value="${subject}"  name="_subject"  class="input"  placeholder="Subject"/><input type="email" name=email value="${email}" placeholder="Your email"><textarea name=message placeholder="Test Message">${comments}</textarea><button id="v-button" type="submit">Send Test</button></form>`
    );
    $("#v-button").trigger("click");
  });
});

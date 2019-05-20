document.addEventListener("DOMContentLoaded", () => {
  // var trigger = document.querySelector(".card-content").offsetTop;
  // var ele = document.querySelector("#intro");
  // window.onscroll = function() {
  //   if (window.pageYOffset > 0) {
  //     var opac = window.pageYOffset / trigger;
  //     ele.style.background =
  //       "linear-gradient(rgba(25, 169, 143," +
  //       opac +
  //       "), rgba(25, 169, 143," +
  //       opac +
  //       ")), url(./assets/images/blu.jpg) no-repeat center";
  //   }
  // };
  // ==========================================scroll magic ========================================================
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: ".portfolioDiv",
    triggerHook: 0.8,
    reverse: false
  })
    .on("start", function() {
      var ctx = document.getElementById("wrapper1").getContext("2d");
      var myChart = new Chart(ctx, {
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
      var ctx2 = document.getElementById("wrapper2").getContext("2d");
      var myChart2 = new Chart(ctx2, {
        type: "horizontalBar",
        data: {
          labels: [
            "JS",
            "CSS/Html",
            "Jquery",
            "Api level",
            "AxiosJS",
            "Bootstrap",

            "Git"
          ],
          datasets: [
            {
              data: [9, 6, 6, 4, 5, 7, 6],
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
      var ctx3 = document.getElementById("wrapper3").getContext("2d");
      var myChart2 = new Chart(ctx3, {
        type: "horizontalBar",
        data: {
          labels: [
            "ExpressJS",
            "CherioJS",
            "MongoDB",
            "Mongoose",
            "CSS/Html",
            "Bootstrap",
            "Git"
          ],
          datasets: [
            {
              data: [9, 7, 7, 6, 3, 6, 8],
              backgroundColor: [
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
      var ctx4 = document.getElementById("wrapper4").getContext("2d");
      var myChart2 = new Chart(ctx4, {
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
// // ==========================================other "send email options"========================================================
// $.ajax({
//   type: "POST",
//   url: "https://mandrillapp.com/api/1.0/messages/send.json",
//   data: {
//     key: "49Y0QJpcFF2okz9zAj9-Lg",
//     message: {
//       from_email: "cffr90@gmail.com",
//       to: [
//         {
//           email: "christopher.fajardo73@gmail.com",
//           name: "chris",
//           type: "to"
//         }
//       ],
//       autotext: "true",
//       subject: "test123",
//       html: "hello"
//     }
//   }
// }).done(function(response) {
//   console.log(response); // if you're into that sorta thing
// });
// sgMail.setApiKey(
//   "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"
// );
// const msg = {
//   to: "christopher.fajardo73@gmail.com",
//   from: "test@example.com",
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>"
// };
// sgMail.send(msg);
// var apiKey =
//   "Bearer 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";

// var data = JSON.stringify({
//   personalizations: [
//     {
//       to: [
//         {
//           email: "christopher.fajardo73@gmail.com",
//           name: "John Doe"
//         }
//       ],
//       dynamic_template_data: {
//         verb: "",
//         adjective: "",
//         noun: "",
//         currentDayofWeek: ""
//       },
//       subject: "chris is here",
//       content: [
//         {
//           type: "text/plain",
//           value: "and easy to do anywhere, even with cURL"
//         }
//       ]
//     }
//   ],
//   from: {
//     email: "noreply@chris.com",
//     name: "John Doe"
//   },
//   reply_to: {
//     email: "christopher.fajardo73@gmail.com",
//     name: "Chris Doe"
//   },
//   template_id: "d-8096b5dacb254c8b882816f22d1d11fe"
// });

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = false;

// xhr.addEventListener("readystatechange", function() {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("POST", "https://api.sendgrid.com/v3/mail/send");
// xhr.setRequestHeader("authorization", apiKey);
// xhr.setRequestHeader("content-type", "application/json");

// xhr.send(data);
// ==========================================scroll magic ex.========================================================
// var pinIntroScene = new ScrollMagic.Scene({
//   triggerElement: "#intro",
//   triggerHook: 0,
//   duration: "20%"
// })
//   .setPin("#intro", { pushFollowers: false })
//   .addIndicators()
//   .addTo(controller);

// var pinIntroScene2 = new ScrollMagic.Scene({
//   triggerElement: "#main-container",
//   triggerHook: 0.4
// })
//   .setPin("#intro", { pushFollowers: false })
//   .addTo(controller);

// var scene = new ScrollMagic.Scene({
//   triggerElement: "#slide01",
//   triggerHook: 0.9,
//   reverse: false
// })
//   .setClassToggle("#slide01", "fade-in")
//   .addIndicators()
//   .addTo(controller);

// var scene01 = new ScrollMagic.Scene({
//   triggerElement: "#slide01",
//   triggerHook: 0.6,
//   duration: "10%",
//   reverse: true
// })
//   .setClassToggle("html", "fade")
//   .addIndicators()
//   .addTo(controller)

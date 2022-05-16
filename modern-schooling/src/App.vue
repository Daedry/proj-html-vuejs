<template>
  <div id="app">
    <header>
      <div class="container-md m-auto">
        <div class="nav d-flex j-space-b al-center">
          <div class="nav-left">
            <div class="logo">
              <img height="25" src="@/assets/img/dark-logo.png" alt="" />
            </div>
          </div>

          <div class="nav-right">
            <div class="nav-list d-flex">
              <ul class="d-flex">
                <li>
                  Home <font-awesome-icon icon="fa-solid fa-angle-down" />
                </li>
                <li>
                  Pages <font-awesome-icon icon="fa-solid fa-angle-down" />
                </li>
                <li>
                  Courses <font-awesome-icon icon="fa-solid fa-angle-down" />
                </li>
                <li>
                  Feature <font-awesome-icon icon="fa-solid fa-angle-down" />
                </li>
                <li>
                  Blog <font-awesome-icon icon="fa-solid fa-angle-down" />
                </li>
                <li class="p-relative">
                  <span
                    >Shop <font-awesome-icon icon="fa-solid fa-angle-down"
                  /></span>
                  <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                  <div class="counter-expense p-absolute">
                    <div class="counter">0</div>
                  </div>
                </li>
              </ul>
              <font-awesome-icon icon="fa-solid fa-circle-user" />
            </div>
          </div>

          <div class="search d-flex">
            <input type="search" placeholder="Search..." />
            <div class="icon-search">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="main-head p-relative">
        <div class="container-md m-auto d-flex">
          <div class="head-left col-50">
            <div class="side-text col-80">
              <h2>Colmplete Your Dreams in JavaS Programming</h2>
              <p>
                Learn any coding programing in distance and for a reasonable
                fee. You don't have to struggle alone, you've got our assistance
                and help.
              </p>
            </div>
            <button class="btn">
              <font-awesome-icon icon="fa-solid fa-download" /> Download free
              E-books
            </button>
          </div>
          <!-- /.head-left -->

          <div class="head-right col-50">
            <div class="side-img">
              <img height="570" src="@/assets/img/hero-image.png" alt="" />
            </div>
          </div>
          <!-- /.head-right -->

          <div class="side-table p-absolute d-flex flex-column j-space-a">
            <div class="triangle">
              <img
                height="19"
                src="@/assets/img/triangular-ruler-for-school.png"
                alt=""
              />
            </div>
            <font-awesome-icon icon="fa-solid fa-life-ring icon" />
            <font-awesome-icon icon="fa-solid fa-book icon" />
            <font-awesome-icon icon="fa-solid fa-cart-shopping icon" />
          </div>

          <div class="jumbo-overlay p-absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="rgba(222, 219, 217, 0.564)"
              version="1.1"
              preserveAspectRatio="none"
              width="105%"
              height="2000px"
            >
              <path
                class="elementor-shape-fill"
                d="M100,6.21724894e-15 L100,79.7754703 C99.7919362,79.7904198 99.6381974,79.8027262 99.5387835,79.8123897 C99.4256772,79.823384 99.3041657,79.8260447 99.1946857,79.8368479 C98.0926947,79.9455898 96.8446759,80.1450278 96.0566669,80.3249475 C95.1164427,80.5396213 93.6651585,81.0424133 91.7028144,81.8333235 C91.1881986,82.0648898 90.6629331,82.3321219 90.1270181,82.6350198 C89.591103,82.9379178 88.7808989,83.4254899 87.6964058,84.0977361 L84.5866785,86.505496 C83.9146556,87.0756533 83.3999022,87.5308769 83.0424183,87.8711667 C82.6706034,88.2250983 82.3219339,88.542792 81.9256169,88.9363773 C81.5083908,89.3507275 81.0415644,89.840935 80.5708891,90.2075771 C80.5694243,90.2087181 79.879045,90.9348069 79.6966916,91.0931301 C79.6786428,91.1088004 79.619181,91.1783162 79.6134287,91.1806951 C79.5856944,91.1921647 79.4872823,91.3143998 79.2325655,91.5654126 C78.9778486,91.8164253 78.4398261,92.3343122 78.4004716,92.3632772 C78.3852088,92.3745107 78.392749,92.3842318 78.3758447,92.404756 C78.3491619,92.4371525 78.297362,92.4837356 78.2713401,92.5087419 C78.1637093,92.6121724 78.057958,92.7052899 77.9412752,92.8201952 C77.9165042,92.8445888 77.8915476,92.8692319 77.8664085,92.8941052 C77.5163916,93.2404218 77.1310001,93.6313644 76.71875,94.0148783 C75.2657705,95.366577 73.5033569,96.917444 71.8705734,97.9003807 C70.9731573,98.4406259 70.1135532,98.9247458 69.344824,99.2158182 C67.7865314,99.8058517 66.6383515,99.8725302 66.5625,99.8951541 C65.9370497,100.081705 65.026153,100.01931 63.8298099,99.7079704 C64.7659815,99.9771782 64.7185432,99.9771782 63.6874951,99.7079704 C62.9475222,99.3188802 62.4074807,99.0301938 62.0673707,98.8419114 C61.8786639,98.7374448 61.673915,98.5226524 61.4899272,98.3670131 C61.1903999,98.1136365 60.6170457,97.6081983 60.0811799,96.985446 C59.3300042,96.1124731 58.6118857,95.0936327 58.4683822,94.958848 C56.7254333,92.8360206 54.6654939,87.8275853 54.21875,87.4847052 C54.1053147,87.3976425 52.2376405,83.2507606 50,77.6976587 C47.9421254,72.5906776 45.5976116,66.2821297 43.4375,61.1176887 C41.1008376,55.5311461 39.2000795,51.649717 38.6979167,50.8121989 C38.4600638,50.4155028 37.3864888,48.4156228 36.1120817,46.6631568 C35.2477791,45.4746348 34.1630442,44.3456814 33.4375,43.6987268 C32.7119558,43.0517722 31.709781,42.2398109 30.6626803,42.1439083 C30.2356184,42.1047942 29.5251709,42.1444477 29.1201362,42.1439083 C29.0325991,42.1437917 28.1329894,42.1824102 27.1396439,41.8896899 C25.9452799,41.5377333 24.5848063,40.8076085 23.9308866,40.295173 C22.8856727,39.476105 21.6969743,38.3949718 20.9413937,37.4307381 C20.5662547,36.9520047 19.4846561,35.6658156 18.5123771,34.1142672 C18.0017289,33.2993821 16.652903,31.0615524 15.5607311,29.0022448 C14.5429598,27.0832206 13.7630462,25.3063307 13.6950881,25.3220678 C13.5647384,25.3522529 12.1582089,21.8557564 9.63623595,17.1783979 C9.10017282,16.1841924 8.49929577,14.9056754 7.41107192,13.1440893 C7.07564424,12.6011084 6.59991624,11.9188319 6.14393284,11.2720612 C5.88126255,10.8994874 3.6065072,5.72114201 3.39886357,5.35133855 C2.3562704,3.49452944 1.22331587,-0.39125009 -7.81597009e-14,-6.30600005 L100,6.21724894e-15 Z"
                id="path-1"
              ></path>
            </svg>
          </div>
        </div>
        <!-- /.container-md -->
      </div>
      <!-- /.main-head -->

      <section class="main-build-section">
        <div class="container-md m-auto">
          <div class="title">
            <h4>Start learning coding languages</h4>
            <h2>Build your dream <span>Today</span></h2>
          </div>
          <div class="boxs d-flex">
            <div class="box col-25">
              <div class="box-img">
                <img src="@/assets/img/home-5-image-box-01.png" alt="" />
              </div>
              <div class="box-text">
                <h4>Idea Discussion</h4>
                <p>
                  Get teamed up with the specialists who work and teach coding
                  for years at famous universities.
                </p>
              </div>
              <button>
                Start now
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
              </button>
            </div>

            <div class="box col-25">
              <div class="box-img">
                <img src="@/assets/img/home-5-image-box-02.png" alt="" />
              </div>
              <div class="box-text">
                <h4>Web Developement</h4>
                <p>
                  Learn to start building a webpage from scratch. You decide
                  your own pace, couse and speed.
                </p>
              </div>
              <button>
                Start now
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
              </button>
            </div>

            <div class="box col-25">
              <div class="box-img">
                <img src="@/assets/img/home-5-image-box-03.png" alt="" />
              </div>
              <div class="box-text">
                <h4>System administration</h4>
                <p>
                  Learners are encouraged to study the mechanism and structure
                  of system administration
                </p>
              </div>
              <button>
                Start now
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
              </button>
            </div>

            <div class="box col-25">
              <div class="box-img">
                <img src="@/assets/img/home-5-image-box-04.png" alt="" />
              </div>
              <div class="box-text">
                <h4>Graphic Design</h4>
                <p>
                  Have a passion for graphics and arts? Show your talentnts with
                  confidence and self-assertiveness.
                </p>
              </div>
              <button>
                Start now
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
              </button>
            </div>
          </div>
          <!-- /.boxs -->
        </div>
        <!-- /.containe-md -->
      </section>
      <!-- /.main-build-section -->

      <section class="main-career-perspective">
        <div class="container-md m-auto p-relative">
          <div class="boxs">
            <div class="box d-flex">
              <div class="box-img col-50">
                <img
                  height="480"
                  src="@/assets/img/about-us-03-image-01.png"
                  alt=""
                />
                <div class="underlay-shape-lilla p-absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="345px"
                    height="347px"
                    fill="#b6b7d2"
                    viewBox="0 0 200 202"
                  >
                    <path
                      class="elementor-shape-fill"
                      d="M139.374493,198.087515 C155.702187,206.99353 190.724846,197.001323 197.677982,159.049528 C204.827153,120.027728 184.496324,118.997566 188.045232,104.801934 C202.287755,83.6528313 204.827153,56.662651 190.073179,40.4146034 C153.570125,2.39058926 144.444362,48.0194062 114.025151,20.1351292 C101.727304,7.83728238 83.0989526,-6.73517414 56.2286492,3.40456297 C18.2385839,17.7404371 27.3303985,47.659333 27.3303985,69.3128542 C27.3303985,76.9370868 3.11408002,91.2696589 0.460095291,110.885776 C-2.88628833,135.619549 12.6277797,168.175291 27.3303985,179.329002 C50.6517938,205.692318 86.6478605,199.608476 102.87144,190.482713 C116.802125,182.646702 128.220783,192.003673 139.374493,198.087515 Z"
                    ></path>
                  </svg>
                </div>
                <!-- /.underlay-shape-lilla -->
              </div>
              <!-- /.box-img -->

              <div class="box-text col-50 p-relative">
                <div class="title">
                  <h5>dream with <span>maxcoach</span></h5>
                  <h2>Consctruct a <span>Stunnig</span> Career Perspective</h2>
                </div>

                <div class="cards">
                  <div class="card">
                    <div class="wrap d-flex j-space-b">
                      <h4>
                        Multiple Platforms Supported for Teaching & Studying
                      </h4>
                      <font-awesome-icon icon="fa-solid fa-circle-minus" />
                    </div>

                    <div class="text">
                      <p>
                        MaxCoach supports the act of teaching and learning on
                        multiple platforms like online of offline via material
                        download. We know things aren't supposed to be devoured
                        in a short time, you can always access our knowledge
                        from any device.
                      </p>
                    </div>
                  </div>
                  <!-- /.card -->

                  <div class="card">
                    <div class="wrap wrap-plus d-flex j-space-b">
                      <h4>Multiple Course Participation at the Same Time</h4>
                      <font-awesome-icon icon="fa-solid fa-circle-plus" />
                    </div>
                  </div>
                  <!-- /.card -->

                  <div class="card">
                    <div class="wrap wrap-plus d-flex j-space-b">
                      <h4>Track Study Progress & Deliver Prompt Feedback</h4>
                      <font-awesome-icon icon="fa-solid fa-circle-plus" />
                    </div>
                  </div>
                  <!-- /.card -->
                </div>
                <!-- /.box-text -->
              </div>
            </div>
            <!-- /.box -->
          </div>
          <!-- /.boxs -->
        </div>
        <!-- /.container-md -->
      </section>
      <!-- /.main-career-perspective -->

      <sction class="main-info-counter">
        <div class="container-lg">
          <div class="container-md m-auto d-flex j-space-a">
            <div class="finished-session info">
              <div>1.926</div>
              <h4>finished sessions</h4>
            </div>
            <!-- /.finished-session -->

            <div class="enrolled-learners info">
              <div>3.092+</div>
              <h4>Enrolled learners</h4>
            </div>
            <!-- /.enrolled-learners -->

            <div class="online-instructors info">
              <div>200</div>
              <h4>Online Instructors</h4>
            </div>
            <!-- /.online-instructors -->

            <div class="satisfaction-rate info">
              <div>100%</div>
              <h4>satisfaction rate</h4>
            </div>
            <!-- /.satisfaction-rate -->
          </div>
          <!-- /.container-md -->
        </div>
        <!-- /container-lg -->
      </sction>
      <!-- /.info-counter -->

      <section class="main-featured-courses">
        <div class="container-md m-auto">
          <div class="title">
            <h5>choose where you'd like to begin</h5>
            <h2>Latest featured <span>Courses</span></h2>
          </div>
          <!-- /.title -->

          <div class="cards d-flex wrap j-space-b">
            <div class="card col-30">
              <div class="card-img p-relative">
                <img src="@/assets/img/course-02-480x298.jpg" alt="" />
                <div class="price p-absolute">
                  <div>$40<span>.00</span></div>
                </div>
              </div>
              <!-- /.card-img -->

              <div class="card-text">
                <div class="user d-flex">
                  <div class="user-img">
                    <img
                      src="@/assets/img/73ee246daf47502812ccefc84bf02898.jpeg"
                      alt=""
                    />
                  </div>
                  <h5>Blache Fields</h5>
                </div>

                <div class="sub-title">
                  <h3>Learning to Write as a Professional Author</h3>
                </div>

                <div class="info d-flex">
                  <div class="lessons">
                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                    20 lessons
                  </div>
                  <div class="students">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    50 Students
                  </div>
                </div>
                <!-- /.info -->
              </div>
              <!-- /.card-text -->
            </div>
            <!-- /.card -->

            <div class="card col-30">
              <div class="card-img p-relative">
                <img src="@/assets/img/stock-full-hd-03-480x298.jpg" alt="" />
                <div class="price p-absolute">
                  <div>Free</div>
                </div>
              </div>
              <!-- /.card-img -->

              <div class="card-text">
                <div class="user d-flex">
                  <div class="user-img">
                    <img
                      src="@/assets/img/d0d504142acfde820eef2f11feea6253.jpeg"
                      alt=""
                    />
                  </div>
                  <h5>Maggie Strickland</h5>
                </div>

                <div class="sub-title">
                  <h3>Custom-centric Info-Tech Strategies</h3>
                </div>

                <div class="info d-flex">
                  <div class="lessons">
                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                    24 lessons
                  </div>
                  <div class="students">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    769 Students
                  </div>
                </div>
                <!-- /.info -->
              </div>
              <!-- /.card-text -->
            </div>
            <!-- /.card -->

            <div class="card col-30">
              <div class="card-img p-relative">
                <img src="@/assets/img/stock-full-hd-04-480x298.jpg" alt="" />
                <div class="price p-absolute">
                  <div>$19<span>.00</span></div>
                </div>
              </div>
              <!-- /.card-img -->

              <div class="card-text">
                <div class="user d-flex">
                  <div class="user-img">
                    <img
                      src="@/assets/img/d0d504142acfde820eef2f11feea6253.jpeg"
                      alt=""
                    />
                  </div>
                  <h5>Maggie Stickland</h5>
                </div>

                <div class="sub-title">
                  <h3>Open programming Courses for Everyone: Python</h3>
                </div>

                <div class="info d-flex">
                  <div class="lessons">
                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                    17 lessons
                  </div>
                  <div class="students">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    62 Students
                  </div>
                </div>
                <!-- /.info -->
              </div>
              <!-- /.card-text -->
            </div>
            <!-- /.card -->

            <div class="card col-30">
              <div class="card-img p-relative">
                <img src="@/assets/img/stock-full-hd-06-480x298.jpg" alt="" />
                <div class="price p-absolute">
                  <div>$26<span>.00</span></div>
                </div>
              </div>
              <!-- /.card-img -->

              <div class="card-text">
                <div class="user d-flex">
                  <div class="user-img">
                    <img
                      src="@/assets/img/73ee246daf47502812ccefc84bf02898.jpeg"
                      alt=""
                    />
                  </div>
                  <h5>Blache Fields</h5>
                </div>

                <div class="sub-title">
                  <h3>Academic Listening and Note-taking</h3>
                </div>

                <div class="info d-flex">
                  <div class="lessons">
                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                    14 lessons
                  </div>
                  <div class="students">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    67 Students
                  </div>
                </div>
                <!-- /.info -->
              </div>
              <!-- /.card-text -->
            </div>
            <!-- /.card -->

            <div class="card col-30">
              <div class="card-img p-relative">
                <img
                  src="@/assets/img/course-featured-image-01-480x298.jpg"
                  alt=""
                />
                <div class="price p-absolute">
                  <div>$39<span>.00</span></div>
                </div>
              </div>
              <!-- /.card-img -->

              <div class="card-text">
                <div class="user d-flex">
                  <div class="user-img">
                    <img
                      src="@/assets/img/73ee246daf47502812ccefc84bf02898.jpeg"
                      alt=""
                    />
                  </div>
                  <h5>Blache Fields</h5>
                </div>

                <div class="sub-title">
                  <h3>Master jQuery in a Short Period of Time</h3>
                </div>

                <div class="info d-flex">
                  <div class="lessons">
                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                    6 lessons
                  </div>
                  <div class="students">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    51 Students
                  </div>
                </div>
                <!-- /.info -->
              </div>
              <!-- /.card-text -->
            </div>
            <!-- /.card -->

            <div class="card col-30">
              <div class="card-img p-relative">
                <img src="@/assets/img/stock-full-hd-05-480x298.jpg" alt="" />
                <div class="price p-absolute">
                  <div>$59<span>.00</span></div>
                </div>
              </div>
              <!-- /.card-img -->

              <div class="card-text">
                <div class="user d-flex">
                  <div class="user-img">
                    <img
                      src="@/assets/img/73ee246daf47502812ccefc84bf02898.jpeg"
                      alt=""
                    />
                  </div>
                  <h5>Blache Fields</h5>
                </div>

                <div class="sub-title">
                  <h3>Introduction to Javascript for Beginners</h3>
                </div>

                <div class="info d-flex">
                  <div class="lessons">
                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                    14 lessons
                  </div>
                  <div class="students">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    76 Students
                  </div>
                </div>
                <!-- /.info -->
              </div>
              <!-- /.card-text -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.cards -->

          <div class="all-courses d-flex j-content-center">
            <button class="btn">
              View all courses
              <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </button>
          </div>
          <!-- /.all-courses -->

          <div class="rounded-bottom p-relative">
            <img src="@/assets/img/wave.png" alt="" />
          </div>
        </div>
        <!-- /.container-md -->
      </section>
      <!-- /.main-featured-courses -->

      <section class="pace-section">
        <div class="container-md m-auto">
          <div class="boxs d-flex">
            <div class="box-left col-50">
              <div class="title">
                <h4>why hesitate to register?</h4>
                <h2>Learn at your own <span>pace</span></h2>
              </div>
              <!-- /.title -->
              <div class="info-list">
                <ul>
                  <li>
                    <font-awesome-icon icon="fa-solid fa-check" />
                    Select & customize courses to your preferences
                  </li>
                  <li>
                    <font-awesome-icon icon="fa-solid fa-check" />
                    Change the tuttor and make arrangements
                  </li>
                  <li>
                    <font-awesome-icon icon="fa-solid fa-check" />
                    Partecipate in events to join others
                  </li>
                  <li>
                    <font-awesome-icon icon="fa-solid fa-check" />
                    Get the desired ceertificate delivered at house
                  </li>
                </ul>
              </div>
              <!-- /.info-list -->
              <div class="start">
                <button class="btn">Get started for free</button>
              </div>
            </div>
            <!-- /.box-left -->

            <div class="box-right col-50 p-relative">
              <div class="box-img">
                <img src="@/assets/img/home-5-image-01.png" alt="" />
              </div>
              <div class="underlay-shape-grey p-absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="470px"
                  height="464px"
                  fill="#ece8e4"
                  viewBox="0 0 200 202"
                >
                  <path
                    class="elementor-shape-fill"
                    d="M139.374493,198.087515 C155.702187,206.99353 190.724846,197.001323 197.677982,159.049528 C204.827153,120.027728 184.496324,118.997566 188.045232,104.801934 C202.287755,83.6528313 204.827153,56.662651 190.073179,40.4146034 C153.570125,2.39058926 144.444362,48.0194062 114.025151,20.1351292 C101.727304,7.83728238 83.0989526,-6.73517414 56.2286492,3.40456297 C18.2385839,17.7404371 27.3303985,47.659333 27.3303985,69.3128542 C27.3303985,76.9370868 3.11408002,91.2696589 0.460095291,110.885776 C-2.88628833,135.619549 12.6277797,168.175291 27.3303985,179.329002 C50.6517938,205.692318 86.6478605,199.608476 102.87144,190.482713 C116.802125,182.646702 128.220783,192.003673 139.374493,198.087515 Z"
                  ></path>
                </svg>
              </div>
              <!-- /.underlay-shape-grey -->
              <div class="point-img-shape p-absolute">
                <img src="@/assets/img/maxcoach-shape-05.png" alt="" />
              </div>
              <!-- /.point-image-shape -->
            </div>
            <!-- /.box-rigth -->
          </div>
          <!-- /.boxs -->
        </div>
        <!-- /.container-md -->
      </section>
      <!-- /.pace-section -->

      <section class="mobile-section">
        <div class="container-md m-auto">
          <div class="boxs d-flex">
            <div class="box-left p-relative col-50">
              <div class="box-img">
                <img src="@/assets/img/home-5-image-02.png" alt="" />
              </div>
              <div class="underlay-shape-grey p-absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="450px"
                  height="454px"
                  fill="#ece8e4"
                  viewBox="0 0 200 202"
                >
                  <path
                    class="elementor-shape-fill"
                    d="M139.374493,198.087515 C155.702187,206.99353 190.724846,197.001323 197.677982,159.049528 C204.827153,120.027728 184.496324,118.997566 188.045232,104.801934 C202.287755,83.6528313 204.827153,56.662651 190.073179,40.4146034 C153.570125,2.39058926 144.444362,48.0194062 114.025151,20.1351292 C101.727304,7.83728238 83.0989526,-6.73517414 56.2286492,3.40456297 C18.2385839,17.7404371 27.3303985,47.659333 27.3303985,69.3128542 C27.3303985,76.9370868 3.11408002,91.2696589 0.460095291,110.885776 C-2.88628833,135.619549 12.6277797,168.175291 27.3303985,179.329002 C50.6517938,205.692318 86.6478605,199.608476 102.87144,190.482713 C116.802125,182.646702 128.220783,192.003673 139.374493,198.087515 Z"
                  ></path>
                </svg>
              </div>
              <!-- /.underlay-shape-grey -->
              <div class="square-img-shape p-absolute">
                <img src="@/assets/img/maxcoach-shape-07.png" alt="" />
              </div>
              <!-- /.point-image-shape -->

              <div class="line-shape-img p-absolute">
                <img src="@/assets/img/maxcoach-shape-01.png" alt="" />
              </div>
              <!-- /.line-shape-img -->

              <div class="circle-shape p-absolute">
                <div></div>
              </div>
              <!-- /.circle-shape -->
            </div>
            <!-- /.box-left -->

            <div class="box-right col-40">
              <div class="title">
                <h4>what are you looking for?</h4>
                <h2>Learn on your <span>mobile</span> anytime!</h2>
              </div>
              <!-- /.title -->
              <div class="text">
                <p>
                  Save lessons for later and revise or write notes at any time
                  and on multiple devices on your way- Never interference with
                  activities of anjoyment or other precious moments.
                </p>
              </div>
              <!-- /.info-list -->
              <div class="start">
                <button class="btn">Download our app</button>
              </div>
            </div>
            <!-- /.box-right -->
          </div>
          <!-- /.boxs -->
        </div>
        <!-- /.container-md -->
      </section>
      <!-- /.mobile-section -->

      <section class="events-section">
        <div class="container-md m-auto">
          <div class="title">
            <h4>Get in contact now</h4>
            <h2>Upcoming <span>Events</span></h2>
          </div>
          <div class="events d-flex j-space-a wrap">
            <div class="event d-flex j-space-b col-47">
              <div class="text">
                <h5>
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  Texas, US
                </h5>
                <h3>Storytellyng Workshop</h3>
              </div>
              <!-- /.text -->
              <div class="info">
                <div class="date">
                  <div>22</div>
                  <h5>nov</h5>
                </div>
                <div class="ticket">
                  <button class="btn">Get ticket</button>
                </div>
              </div>
              <!-- /.info -->
            </div>
            <!-- /.event -->

            <div class="event d-flex j-space-b col-47">
              <div class="text">
                <h5>
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  New York, US
                </h5>
                <h3>Painting Art Contest 2020</h3>
              </div>
              <!-- /.text -->
              <div class="info">
                <div class="date">
                  <div>10</div>
                  <h5>oct</h5>
                </div>
                <div class="ticket">
                  <button class="btn">Get ticket</button>
                </div>
              </div>
              <!-- /.info -->
            </div>
            <!-- /.event -->

            <div class="event d-flex j-space-b col-47">
              <div class="text">
                <h5>
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  Hamburg, Germany
                </h5>
                <h3>International Art Fair 2020</h3>
              </div>
              <!-- /.text -->
              <div class="info">
                <div class="date">
                  <div>23</div>
                  <h5>nov</h5>
                </div>
                <div class="ticket">
                  <button class="btn">Get ticket</button>
                </div>
              </div>
              <!-- /.info -->
            </div>
            <!-- /.event -->

            <div class="event d-flex j-space-b col-47">
              <div class="text">
                <h5>
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  Illinois, US
                </h5>
                <h3>Street Performance: Call for Artist</h3>
              </div>
              <!-- /.text -->
              <div class="info">
                <div class="date">
                  <div>15</div>
                  <h5>dec</h5>
                </div>
                <div class="ticket">
                  <button class="btn">Get ticket</button>
                </div>
              </div>
              <!-- /.info -->
            </div>
            <!-- /.event -->

            <div class="event d-flex j-space-b col-47">
              <div class="text">
                <h5>
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  Illinois, US
                </h5>
                <h3>Consumer Food Safety Education Conference</h3>
              </div>
              <!-- /.text -->
              <div class="info">
                <div class="date">
                  <div>22</div>
                  <h5>nov</h5>
                </div>
                <div class="ticket">
                  <button class="btn">Get ticket</button>
                </div>
              </div>
              <!-- /.info -->
            </div>
            <!-- /.event -->

            <div class="event d-flex j-space-b col-47">
              <div class="text">
                <h5>
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  Dubai
                </h5>
                <h3>How meditation improve your mental healt?</h3>
              </div>
              <!-- /.text -->
              <div class="info">
                <div class="date">
                  <div>22</div>
                  <h5>nov</h5>
                </div>
                <div class="ticket">
                  <button class="btn">Get ticket</button>
                </div>
              </div>
              <!-- /.info -->
            </div>
            <!-- /.event -->
          </div>
          <!-- /.events -->

          <div class="foot">
            <h5>
              Exited about our event?
              <span>
                View all events
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
              </span>
            </h5>
          </div>
        </div>
        <!-- /.container-md -->
      </section>
      <!-- /.events-section -->
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

header {
  background-color: $bg-main-head;

  .nav {
    width: 100%;
    height: 70px;

    .logo {
      margin-top: 0.5rem;
    }

    .nav-list {
      ul {
        margin-left: 15rem;
        flex-flow: row wrap;
        font-weight: 500;
        li {
          padding: 0 1rem;
          margin-top: 0.5rem;
          cursor: pointer;
          font-size: 14px;
          .fa-angle-down {
            font-size: 9px;
            vertical-align: middle;
          }
          .fa-cart-shopping {
            font-size: 18px;
            margin: 0 1rem;
          }
          .counter-expense {
            bottom: 1rem;
            right: 1.5rem;
            background-color: $btn;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            .counter {
              text-align: center;
              line-height: 17px;
              font-weight: 550;
              font-size: 11px;
              color: $white;
            }
          }
        }
      }
      .fa-circle-user {
        font-size: 18px;
        margin-top: 0.5rem;
        cursor: pointer;
      }
    }
    .search {
      input {
        width: 150px;
        height: 2.5rem;
        border: none;
        border-top-left-radius: 0.4rem;
        border-bottom-left-radius: 0.4rem;
        outline: none;
        text-indent: 1rem;
      }
      .icon-search {
        width: 40px;
        height: 40px;
        background-color: white;
        border-top-right-radius: 0.4rem;
        border-bottom-right-radius: 0.4rem;
        .fa-magnifying-glass {
          padding: 0.75rem;
          color: $btn;
        }
      }
    }
  }
}

main {
  height: 5000px;
  .main-head {
    background-color: $bg-main-head;
    overflow-x: hidden;
    padding: 2.75rem 0 2.5rem;
    .head-left {
      .side-text {
        margin-top: 3.75rem;
        h2 {
          font-size: 42px;
          font-weight: 550;
          line-height: 3.15rem;
        }
        p {
          margin: 1.5rem 0;
          font-size: 17px;
          font-weight: 420;
          color: $text-light;
        }
      }
      button {
        .fa-download {
          padding-right: 0.25rem;
        }
      }
    }

    .head-right {
      .side-img {
        position: relative;
        margin-left: 4.3rem;
        z-index: 1;
      }
    }
    .jumbo-overlay {
      bottom: -49.5rem;
      left: 0rem;
      transform: rotatex(102deg);
    }
    .side-table {
      width: 2.5rem;
      height: 9rem;
      background-color: $white;
      border-radius: 0.4rem;
      right: 0;
      top: 6.4rem;
      .triangle {
        padding: 0.25rem 0.75rem 0;
      }
      .fa-cart-shopping {
        padding-bottom: 0.25rem;
      }
    }
  }

  .main-build-section {
    margin-top: 4rem;
    .title {
      text-align: center;
      h4 {
        text-transform: uppercase;
        padding: 0 0 0.5rem;
        font-size: 13px;
        font-weight: 400;
        color: #757081;
      }
      h2 {
        text-transform: capitalize;
        font-weight: 600;
        font-size: 34px;
        span {
          text-transform: uppercase;
          font-weight: 400;
          color: $btn;
          font-size: 36px;
        }
      }
    }

    .boxs {
      margin: 4rem 0;
      .box {
        text-align: center;
        // .box-img {
        // }
        .box-text {
          h4 {
            color: #333;
            padding-top: 0.5rem;
            font-weight: 590;
          }
          p {
            color: #7e7e7e;
            margin: 0.85rem;
            font-size: 13px;
          }
        }
        button {
          border: none;
          color: #8e8ca4;
          background-color: $white;
        }
      }
    }
  }

  .main-career-perspective {
    .container-md {
      margin-top: 8rem;
      .boxs {
        .box {
          .box-img {
            img {
              margin-left: 3.75rem;
            }

            .underlay-shape-lilla {
              top: 5.4rem;
              left: -4.15rem;
              z-index: -1;
            }
          }
          .box-text {
            left: 1.2rem;
            .title {
              h5 {
                text-transform: uppercase;
                font-weight: 500;
                color: #6e6b69;

                span {
                  font-weight: 600;
                }
              }
              h2 {
                font-size: 44px;
                font-weight: 600;
                line-height: 3.25rem;
                text-transform: capitalize;
                padding: 0.75rem 0 2.25rem;
                span {
                  font-weight: 400;
                  color: $btn;
                }
              }
            }

            .cards {
              .card {
                width: 95%;
                margin-bottom: 2rem;
                box-shadow: 8px 8px 40px 4px #dfdddd;
                .wrap {
                  background-color: #62c5b5;
                  border-radius: 0.3rem;
                  h4 {
                    padding: 0.75rem 1rem;
                    color: white;
                    font-weight: 510;
                  }
                  .fa-circle-plus,
                  .fa-circle-minus {
                    padding: 1rem;
                  }
                  .fa-circle-plus {
                    color: #8c89a2;
                  }
                  .fa-circle-minus {
                    color: $white;
                  }
                }

                .wrap-plus {
                  background-color: $white;
                  h4 {
                    color: #6e6b69;
                  }
                }

                .text {
                  background-color: rgb(255, 255, 255);
                  p {
                    padding: 1.45rem 1.75rem;
                    color: #6e6b69;
                    font-weight: 400;
                    font-size: 14px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .main-info-counter {
    .container-lg {
      background-color: #faf8f6;
      .container-md {
        margin-top: 3rem;
        text-align: center;
        .info {
          padding: 2.5rem 0;
          div {
            font-size: 38px;
            font-weight: 600;
            color: $btn;
          }
          h4 {
            color: #4e547e;
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
          }
        }
      }
    }
  }

  .main-featured-courses {
    width: 100%;
    background-image: linear-gradient($white 65%, #f5f5f5);
    background-color: #f5f5f5;

    .container-md {
      padding-top: 3.75rem;
      .title {
        text-align: center;
        h5 {
          text-transform: uppercase;
          font-weight: 500;
          color: #6e6b69;
        }
        h2 {
          font-size: 38px;
          font-weight: 600;
          line-height: 3.25rem;
          text-transform: capitalize;
          padding: 0.75rem 0 2.25rem;
          span {
            font-weight: 400;
            color: $btn;
          }
        }
      }

      .cards {
        .card {
          margin-bottom: 3rem;
          .card-img {
            img {
              border-top-left-radius: 0.33rem;
              border-top-right-radius: 0.33rem;
              width: 100%;
            }
            .price {
              border-bottom-left-radius: 0.33rem;
              border-top-right-radius: 0.33rem;
              top: 0;
              right: 0;
              background-color: $btn;
              color: $white;
              div {
                padding: 0.35rem 0.75rem;
                font-size: 13.5px;
                font-weight: 600;
                span {
                  font-size: 10.5px;
                }
              }
            }
          }
          .card-text {
            .user {
              padding: 0.75rem 1.5rem;
              .user-img {
                width: 30px;
                height: 30px;
                img {
                  border-radius: 50%;
                  width: 100%;
                }
              }
              h5 {
                padding: 0.25rem 0.75rem;
                font-weight: 500;
                color: #7e7b79;
              }
            }
            .sub-title {
              h3 {
                padding: 0 1.5rem 1.3rem;
                font-weight: 600;
                font-size: 18px;
              }
            }
            .info {
              color: #74716f;
              font-size: 12px;
              .lessons {
                margin: 0 2rem 0 1.5rem;
              }
            }
          }
        }
      }

      .all-courses {
        margin-top: 2rem;
        button {
          padding: 0.85rem 3.5rem;
        }
      }

      .rounded-bottom {
        height: 0;
        bottom: 3rem;
        left: -25rem;
        z-index: -1;
        img {
          width: 162.8%;
        }
      }
    }
  }

  .pace-section {
    .container-md {
      padding-top: 11rem;
      .boxs {
        .box-left {
          .title {
            width: 50%;
            h4 {
              text-transform: uppercase;
              font-weight: 500;
              color: #6e6b69;
              font-size: 13px;
            }
            h2 {
              font-size: 42px;
              font-weight: 600;
              line-height: 3rem;
              text-transform: capitalize;
              padding: 0.75rem 0 1.5rem;
              span {
                font-weight: 400;
                color: $btn;
              }
            }
          }
          .info-list {
            ul {
              li {
                padding: 0.5rem 0;
                .fa-check {
                  padding: 0 0.5rem 0 0;
                  color: $btn;
                  font-weight: 900;
                  font-size: 14px;
                }
              }
            }
          }

          .start {
            margin: 1.75rem 0;
          }
        }
        .box-right {
          .box-img {
            margin-left: -1.5rem;
          }
          .underlay-shape-grey {
            top: 8rem;
            left: -8.25rem;
            z-index: -1;
          }

          .point-img-shape {
            bottom: 2.75rem;
            right: 4.55rem;
          }
        }
      }
    }
  }

  .mobile-section {
    .container-md {
      padding-top: 9rem;
      .boxs {
        .box-left {
          .box-img {
            margin-left: 7.5rem;
          }
          .underlay-shape-grey {
            top: 6rem;
            left: -1.1rem;
            z-index: -1;
          }

          .square-img-shape {
            bottom: 3.3rem;
            right: -0.35rem;
            z-index: -1;
          }

          .line-shape-img {
            top: 15rem;
            left: -6.2rem;
          }

          .circle-shape {
            top: 3.33rem;
            right: 0.25rem;
            div {
              width: 60px;
              height: 60px;
              border: 8px solid #ecc5ab;
              border-radius: 50%;
            }
          }
        }
        .box-right {
          margin-left: 10%;
          padding-top: 5.85rem;
          .title {
            h4 {
              text-transform: uppercase;
              font-weight: 500;
              color: #6e6b69;
              font-size: 13px;
            }
            h2 {
              font-size: 42px;
              font-weight: 600;
              line-height: 3rem;
              padding: 1rem 0 1.85rem;
              span {
                font-weight: 400;
                color: $btn;
              }
            }
          }
          .text {
            p {
              font-size: 14px;
              font-weight: 500;
            }
          }

          .start {
            margin: 3rem 0;
            button {
              text-transform: capitalize;
            }
          }
        }
      }
    }
  }

  .events-section {
    .container-md {
      margin-top: 8.5rem;
      .title {
        text-align: center;
        h4 {
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          color: #6e6b69;
        }
        h2 {
          font-size: 42px;
          padding: 0.5rem 0;
          font-weight: 600;
          span {
            font-weight: 500;
            color: $btn;
          }
        }
      }

      .events {
        margin: 2.55rem 0 1.5rem;
        .event {
          margin-bottom: 1.75rem;
          background-color: #f8f8f8;
          border-radius: 0.35rem;
          transition: 0.45s;
          &:hover {
            transform: scale(1/1.2);
            box-shadow: 2px 2px 10px 2px #dbd9d9d3;
            cursor: pointer;
          }
          .text {
            width: 70%;
            padding: 2rem;
            h5 {
              // padding-top: 1.35rem;
              font-weight: 500;
              color: #969391;
            }
            h3 {
              padding: 0.65rem 0;
              font-weight: 600;
              font-size: 17px;
            }
          }
          .info {
            padding: 1rem 1.5rem 1rem 0rem;
            .date {
              text-align: center;
              div {
                font-size: 44px;
                color: $btn;
              }
              h5 {
                text-transform: uppercase;
                color: #333;
              }
            }
            .ticket {
              padding-bottom: 0.75rem;
              button {
                padding: 0.4rem 1.75rem;
              }
            }
          }
        }
      }

      .foot{
        text-align: center;
        h5{
          font-size: 15px;
          font-weight: 600;
          color: #74716f;
          span{
            font-weight: 700;
            color: $btn;
          }
        }
      }
    }
  }
}
</style>

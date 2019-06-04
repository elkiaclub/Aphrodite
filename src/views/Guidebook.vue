<template lang='pug'>
        .container
            //.p-con
                BaseSection.ui-s-guidebook
                    h1
                        | Discover the Guidebook
            .yt-trailer-container
                iframe(src='https://www.youtube-nocookie.com/embed/fr4zDBxKstQ?controls=0', frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen='').yt-trailer


            <section class="guides">
                <div class="Pinned-Guides">
                    <div>
                      <div>
                        <figure class="pinned-post-image"></figure>
                        <section class="pinned-post-section-1">
                            <figure class="pinned-post-title"><h1>Awesome Title that is really long</h1></figure>
                            <figure class="pinned-post-description"><h2>Description</h2></figure>
                        </section>
                        <section class="pinned-post-section-2">
                            <figure class="guide-button-figure">
                            <button class="guide-button button"><h2>open guide</h2>
                            </button>
                            </figure>
                        </section>
                        <figure class="pinned-post-banner"><h2>Pinned</h2></figure>
                        <figure class="pinned-post-overlay">
                        </figure>
                    </div>
                    </div>

                    <div>
                      <div>
                        <figure class="pinned-post-image"></figure>
                        <figure class="pinned-post-banner"><h2>Pinned</h2></figure>
                        <section class="pinned-post-section-1">
                            <figure class="pinned-post-title"><h1>Awesome Title</h1></figure>
                            <figure class="pinned-post-description"><h2>Description</h2></figure>
                        </section>
                        <section class="pinned-post-section-2">
                            <figure class="guide-button-figure">
                            <button class="guide-button button"><h2>open guide</h2>
                            </button>
                            </figure>
                        </section>
                        <figure class="pinned-post-overlay">
                        </figure>
                    </div>
                    </div>
                    <div>
                      <div>
                        <figure class="pinned-post-image"></figure>
                        <figure class="pinned-post-banner"><h2>Pinned</h2></figure>
                        <section class="pinned-post-section-1">
                            <figure class="pinned-post-title"><h1>Awesome Title</h1></figure>
                            <figure class="pinned-post-description"><h2>Description</h2></figure>
                        </section>
                        <section class="pinned-post-section-2">
                            <figure class="guide-button-figure">
                            <button class="guide-button button"><h2>open guide</h2>
                            </button>
                            </figure>
                        </section>
                        <figure class="pinned-post-overlay">
                        </figure>
                    </div>
                    </div>
                </div>
                <div class="Guide-Sort">
                    <div class="Recent-top-div">
                        <h2>Sort Guides ></h2>
                        <button class="Recent-button" id="recent-button"><h1>Recent</h1></button><h1 class="guide-slash">/</h1>
                        <button class="Top-button" id="top-button"><h1>Top</h1></button>
                    </div>
                    <div id="By-Category-div" class="By-Category-div">
                        <ul id="dropdown-menu" class="dropdown-menu">
                            <li><a aria-haspopup="true">Categories</a>
                            <ul id="dropdown" class="dropdown" aria-label="submenu">
                            <li><a href="#"><h3>Category-1</h3></a></li>
                            <li><a href="#"><h3>Category-</h3></a></li>
                            <li><a href="#"><h3>Category-3</h3></a></li>
                            </ul>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="Guide-Posts">
                    <div id="post-#1">
                    <div>
                        <figure class="post-image"></figure>
                        <section class="post-section-1">
                            <figure class="post-title"><h1>Awesome Title</h1></figure>
                            <figure class="post-description"><h2>Description</h2></figure>
                        </section>
                        <section class="post-section-2">
                                <figure class="post-profile-image"></figure>
                                <figure class="Posted-by"><h2>Posted by</h2></figure>
                                <figure>
                                <h2></h2>
                                </figure><br>
                                <figure class="post-date"><h3>3 weeks ago</h3></figure>
                        </section>
                        <figure class="post-overlay">
                        </figure>
                    </div>
                    </div>

                    <div id="post-#2">
                    <div>
                      <figure class="post-image"></figure>
                        <section class="post-section-1">
                            <figure class="post-title"><h1>Awesome Title</h1></figure>
                            <figure class="post-description"><h2>Description</h2></figure>
                        </section>
                        <section class="post-section-2">                    
                             <figure class="post-profile-image"></figure>
                                <figure class="Posted-by"><h2>Posted by</h2></figure>
                                <figure>
                                <h2></h2>
                                </figure><br>
                                <figure class="post-date"><h3>3 weeks ago</h3></figure>
                        </section>
                        <figure class="post-overlay">
                        </figure>
                    </div>
                    </div>
                    <div id="post-#3">
                    <div>
                      <figure class="post-image"></figure>
                        <section class="post-section-1">
                            <figure class="post-title"><h1>Awesome Title</h1></figure>
                            <figure class="post-description"><h2>Description</h2></figure>
                        </section>
                        <section class="post-section-2">
                             <figure class="post-profile-image"></figure>
                                <figure class="Posted-by"><h2>Posted by</h2></figure>
                                <figure>
                                <h2></h2>
                                </figure><br>
                                <figure class="post-date"><h3>3 weeks ago</h3></figure>
                        </section>
                        <figure class="post-overlay">
                        </figure>
                    </div>
                    </div>
                    <div id="post-#4">
                    <div>
                      <figure class="post-image"></figure>
                        <section class="post-section-1">
                            <figure class="post-title"><h1>Awesome Title</h1></figure>
                            <figure class="post-description"><h2>Description</h2></figure>
                        </section>
                        <section class="post-section-2">
                             <figure class="post-profile-image"></figure>
                                <figure class="Posted-by"><h2>Posted by</h2></figure>
                                <figure>
                                <h2></h2>
                                </figure><br>
                                <figure class="post-date"><h3>3 weeks ago</h3></figure>
                        </section>
                        <figure class="post-overlay">
                        </figure>
                    </div>
                    </div>
                    <div id="post-#5">
                    <div>
                      <figure class="post-image"></figure>
                        <section class="post-section-1">
                            <figure class="post-title"><h1>Awesome Title</h1></figure>
                            <figure class="post-description"><h2>Description</h2></figure>
                        </section>
                        <section class="post-section-2">
                             <figure class="post-profile-image"></figure>
                                <figure class="Posted-by"><h2>Posted by</h2></figure>
                                <figure>
                                <h2></h2>
                                </figure><br>
                                <figure class="post-date"><h3>3 weeks ago</h3></figure>
                        </section>
                        <figure class="post-overlay">
                        </figure>
                    </div>
                    </div>
                    <div id="post-#6">
                    <div>
                      <figure class="post-image"></figure>
                        <section class="post-section-1">
                            <figure class="post-title"><h1>Awesome Title</h1></figure>
                            <figure class="post-description">
                            <h2>Description 
                            </h2>
                            </figure>
                        </section>
                        <section class="post-section-2">
                             <figure class="post-profile-image"></figure>
                                <figure class="Posted-by"><h2>Posted by </h2></figure>
                                <figure>
                                <h2></h2>
                                </figure><br>
                                <figure class="post-date"><h3>3 weeks ago</h3></figure>
                        </section>
                        <figure class="post-overlay">
                        </figure>
                    </div>
                    </div>
                     <div id="post-#6">
                    <div>
                      <figure class="post-image"></figure>
                        <section class="post-section-1">
                            <figure class="post-title"><h1>Awesome Title</h1></figure>
                            <figure class="post-description"><h2>Description</h2></figure>
                        </section>
                        <section class="post-section-2">
                             <figure class="post-profile-image"></figure>
                                <figure class="Posted-by"><h2>Posted by</h2></figure>
                                <figure>
                                <h2></h2>
                                </figure><br>
                                <figure class="post-date"><h3>3 weeks ago</h3></figure>
                        </section>
                        <figure class="post-overlay">
                        </figure>
                    </div>
                    </div>
                </div>
            </section>

       

</template>

<script>
    import CompassIcon from 'icons/md-compass'
    import StatusBox from '../components/StatusBox.vue'
    import Quote from '../components/base/BaseQuote.vue'
    import BaseLayout from '../components/base/BaseLayout'
    export default {
        name: 'Overview',
        components: {
            BaseLayout,
            StatusBox,
            Quote,
            CompassIcon
        },
        created () {
            this.$tilt.init(document.querySelector('p-con'))
        }
    }

    

</script>

<style lang='stylus' scoped>
    .container
        width 100%
    /*.ui-s-guidebook
        background url('../assets/unknown.png')
        background-size cover
        background-position center center
        box-shadow 2px 2px 7px 1px rgba(0,0,0,0.5)
        h1
            text-align center
            drop-shadow 2px 2px 7px 1px rgba(0,0,0,0.5)
            */
    .yt-trailer
        position:absolute
        top:0
        left:0
        width:100%
        height:100%

    .yt-trailer-container
        position:relative
        padding-top:56.25%





  
    
    body {
        margin: 0;
    }


    html {
      height: 100%;
      overflow-x: hidden;
    }
    body {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      width: 100%; 
      overflow-x: hidden;
    }


    .guides {
        height: 100%;
        width: 98%
        padding: 1%;
        top: 0;
        margin-top: 5%;
        background-color: transparent;
        }

    .guides h1, h2, h3, p, {
        font-size: 2vw;
    }

    .guides h3 {
        font-size: 1.5vw;
    }


      .button {
        color: rgb(253, 253, 253);
        background: rgb(55, 66, 88);
        transition: 0.2s;
        height: 2vw;
        width: 2vw;
        padding: 2vw;
        cursor: pointer;
        outline: white;
    }

    .button:hover {
        background-color: rgb(109, 153, 242);
    }




/***************************PINNED-POSTS**********************/

    .Pinned-Guides {
        position: relative;
        background-color: transparent;
        padding: 1%;
        height: 20%;
        width: 98%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 2%;
    }


    .Pinned-Guides div {
        box-sizing: border-box;
        position: relative;
        background-color: black;
        cursor: pointer;
        flex: 30%;
        margin-right: 1.3%;
        margin-left: 1.3%;
        margin-bottom: 0.3%;
        margin-top: 0.7%;
        border-radius: 10% 0% 10% 10%;
        overflow: hidden;
        z-index: 1;
    }

    .Pinned-Guides div h3 {
    color: white;
    }


     .pinned-post-section-1 {
        z-index: 1;
     }



    .pinned-post-image {
         background-size: cover;
    background-size: 100% 100%;
    background-image: url('https://i.ibb.co/cxSQngT/jack-young-143113-unsplash.jpg');
    z-index: 32322;
      border-radius: 10% 0% 10% 10%;
      transition: transform 0.1s;
      height: 110%;
      width: 110%;
      position: absolute;
      z-index: -1;
      transform: scale(1);
      margin: -5%;
      opacity: 0.6;
    }




    .Guide-Posts div div {
        background-color: transparent;
    }



    .pinned-post-section-1 {
        position: relative;
        left: 5%;
        margin-top: 5%;
        margin-bottom: 5%;
    }


    .pinned-post-section-2 {
        position: relative;
        left: 10%;
        padding: 20%;
        padding-top: 10%;

    }


    

    .guide-button-figure{

    }

    .pinned-post-banner {
        display: block;
        position: absolute;
        right: 0%;
        background: red;
        padding: 5%;
        padding-right: 20%;
        top: 0%;
        z-index: 238973278237873282372378327333333333338;
        text-align: center;
    }

     .pinned-post-banner h2 {
        position: absolute;
        padding: 0%;
        top: 18%;
         z-index: 23897327823787328237237835527333333333338;
     }



    .guide-button-figure {
        margin-bottom: -14%;
        margin-top: 0%;
        position: relative;
        top: 5%;
    }


    .guide-button {
        position: relative;
        width: 70%;
        height: 70%;
        color: black;
        margin-top: 10%;
        margin-left: 2%;
        padding-right: 0%;
        padding-left: 0%;
        padding: 2.5%;
        margin-bottom: 0;
        top: 5%;
        right: 5.8%;
        white-space:nowrap;
        border-radius: 20% 20% 20% 20%;
        border: 2px white solid;
    }



    .Pinned-Guides div:hover .pinned-post-image {
    transform: scale(1.2);
    transition: transform 6s;
    opacity: 0.2;
    }




    .pinned-post-section-1 {
        padding-bottom: 30%;
        padding-top: 10%;
        overflow-wrap: break-word;
    }

    .pinned-post-title {
        position: absolute
        top: 6%;
         overflow-wrap: break-word;
        width: 100%;
        padding-bottom: 5%;
        z-index: -1;
    }

    .pinned-post-description {
        position: absolute;
        top: 78%;
        overflow-wrap: break-word;
        width: 90%;
    }

     .pinned-post-description h2 {
        position: absolute;
        overflow-wrap: break-word;
        width: 100%;
    }


    .pinned-post-section-1 h2, figure, h3, button{
        position: absolute;
    }

    .pinned-post-section-2 {

    }



/************************************************************/

/************************GUIDE-POSTS*************************/
    .Guide-Posts {
        position: relative;
        background-color: transparent;
        padding: 1%;
        height: 30%;
        width: 98%;
        display: flex;
        left: 0;
        flex-wrap: wrap;
    }

    .Guide-Posts div {
        box-sizing: border-box;
        position: relative;
        background-color: black;
        cursor: pointer;
        flex: 46%;
        margin-right: 0.6%;
        margin-left: 0.6%;
        margin-bottom: 0.6%;
        margin-top: 0.6%;
        border-radius: 10% 10% 10% 10%;
        overflow: hidden;
    }

    .Guide-Posts div div {
        background-color: transparent;
    }


    .post-image {
    background-size: cover;
    background-size: 100% 100%;
    background-image: url('https://i.ibb.co/cxSQngT/jack-young-143113-unsplash.jpg');
    z-index: 32322;
      border-radius: 10% 0% 10% 10%;
      transition: transform 6s;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 0;
      opacity: 0.6;
       transition: transform 0.1s;
       transform: scale(1);
    }

    .post-section-1 {
    position: relative;
    left: 0%;
    padding-top: 10%;
    }

     .post-section-1 figure {
    position: absolute;
    left: 0%;
    width: 100%;
    }



    .post-section-2 {
        position: relative;
        margin-top: 28%;
        bottom: 36%;
        left: 0%;
        padding-bottom: 13%;
        overflow-wrap: break-word;
    }

    .post-section-2 figure {
        display: inline-block;
        margin-left: 12%;
        white-space:nowrap;
        position: absolute;
        overflow-wrap: break-word;

    }

    .post-section-2 h3 {
        color:white
        margin-left: 12%;
        position: absolute;
        left: 11%;
        margin-top: 5%;
    }

    .post-section-2 h2 {
        color:white
        margin-left: 12%;
        position: absolute;
        left: 12%;
        overflow-wrap: break-word;
    }

    .post-profile-image  {
        border-radius: 50%;
        padding: 2%;
        z-index:23322222222211111111114444444444441;
        background-color: red;
        position: absolute;
        margin-bottom: 0%;
        width: 5%;
        height: 30%;
        margin-left: 0;
        left: -10%;
        display: inline-block;
    }


    .post-overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: .5s ease;
      background-color: black;
    }


    .Guide-Posts div:hover .post-image {
    transform: scale(1.2);
   
    }

    .Guide-Posts div:hover .post-image {
    transition: 0.8s ease;
    opacity: 0.2;
     transition: transform 4.5s;
    }


    .Posted-by h2 {
        font-size: 1.5vw;
        margin-left: 2%;
    }


    .post-description h2 {
        position: absolute;
        overflow-wrap: break-word;
        width: 100%;
    }


    .post-description {
         overflow-wrap: break-word;
         max-width: 90%;
         top: 150%;
         margin-left: 3%;
    }

    .post-date {
        position: absolute;
        top: 35%;
    }

    .Posted-by {
         overflow-wrap: break-word;
         font-size: 1vw;
    }


    .post-title {
        top: -4%;
        margin-left: 3%;
    }

   



/***************************************************/


/****************DROPDOWN-MENU**********************/

  .dropdown-menu a {
  text-decoration: none;
}

  .dropdown-menu {
    font-size: 2vw;
  }

 .dropdown-menu ul {
    list-style: none;
    margin: 0;
    border-radius: 10%;
}

.dropdown-menu li {
    z-index: 23323223;
    color: #fff;
  background: rgb(55, 66, 88);
    display: block;
    float: left;
    position: relative;
    text-decoration: none;
  transition-duration: 0.5s;
  border-radius: 10%;
  border: 2px solid white;
   padding-right: 6.2%;
   padding-left: 6.2%;
   padding-bottom: 5.3%;
   padding-top: 5.3%;
}
  
.dropdown-menu li ul li a {
  color: rgb(253, 253, 253);
  top:10%;
     padding: 6.5%;
}

.dropdown-menu li a h3 {
    top: 13%;
}

.dropdown-menu li:hover,
.dropdown-menu li:focus-within {
     background-color: rgb(109, 153, 242);
    cursor: pointer;
}

.dropdown-menu li:focus-within a {
  outline: none;
}

.dropdown-menu li ul {
    background: rgb(55, 66, 88);
    visibility: hidden;
  opacity: 0;
  width: 100%;
    position: absolute;
  transition: all 0.5s ease;
  margin-top: 12%;
    left: 0;
  display: none;
}

.dropdown-menu  li:hover > ul,
.dropdown-menu  li:focus-within > ul,
.dropdown-menu  li ul:hover,
.dropdown-menu  li ul:focus {
   visibility: visible;
   opacity: 1;
   display: block;
}

.dropdown-menu li ul li {
    clear: both;
  width: 100%;
  padding-bottom: 10%;
}

.dropdown-menu li a h3 {
    width: 100%;
    left: -8%;
    padding-bottom: 10%;
    margin-left: 0;

         }


    #dropdown-menu {
        margin-right: 24.2%;

    }



/***************************************************/


/***********************SORT-BUTTONS****************/




    .Guide-Sort {
        position: relative;
        display: flex;
        width: 98%;
        padding-right: 1%;
        padding-left: 1%;
        background-color: transparent;
        flex-wrap: wrap;
    }


      .Guide-Sort div {
        box-sizing: border-box;
        position: relative;
        flex: 46%;
        margin-right: 2%;
        margin-left: 2%;
        border-radius: 10% 0% 10% 10%;
        text-align: center;
    }

      .Guide-Sort button {
      transition: ease-in-out 0.2s;
      border-radius: 14%;
      cursor: pointer;
       border: solid 2px white;
      }

    .Guide-Sort button:hover {
        background-color: rgb(109, 153, 242);
    }



    .Guide-Sort button:target {
            background-color: rgb(109, 153, 242);
    }



    .Recent-top-div button, h2, h1 {
        display: inline-block;
        color: rgb(253, 253, 253);
        outline: none;
        font-size: 100%;
        margin-right: 0%;
        margin-left: 0;
    }


    .Recent-top-div button {
            background: rgb(55, 66, 88);
    }


    .By-Category-button{
    background: rgb(55, 66, 88);
    color: rgb(253, 253, 253);
    border-radius: 14%;
    padding-right: 4%;
    padding-left: 4%;
    margin-right: 5%;
    outline-style: none;
    border: solid 2px white;
    }



    .Recent-top-div {
        background: transparent;
        right: 0%;
    }

    .By-Category-div  {
        background-color: transparent;
    }


    .Recent-top-div h2 {
        font-size: 2vw;
        margin-right: 2%;
    }


    .guide-slash {
        background:  transparent;
        padding: 2%;
        margin-left: 20%;
        top: 0;
        padding-bottom: 0.3%;
        padding-top: 0.3%;
    }
  
    

/***************************************************/

/*********************MEDIA-QUERIES*****************/


@media only screen and (max-width: 1024px){
  
    .post-section-1 {
        position: relative;
        left: 0%;
        padding-top: 10%;
    }

    .post-section-2 {
        position: relative;
        margin-top: 38%;
        bottom: 36%;
        left: 0%;
        padding-bottom: 20%;
    }

    .guide-button button {
        position: absolute;
        margin-top: 10%;
        }
         .pinned-post-section-1 {
        position: relative;
        left: 5%;
    }
    .pinned-post-section-2 {
        position: relative;
        left: 10%;
        padding: 20%;
        padding-top: 20%;
        z-index: 1322222222222222222222222222222222222222222222222222222222222222222222222222222222222222;
    }
   }




@media only screen and (max-width: 768px){
  
        .post-section-2 {
        position: relative;
        margin-top: 55%;
        bottom: 36%;
        left: 0%;
        padding-bottom: 20%;
    }

    .pinned-post-title {
        top: 45%;
    }

    .guide-button {
        width: 100%;
        left: -25;
    }

  .guide-button button {
        position: absolute;
        margin-top: 10%;
        }
         .pinned-post-section-1 {
        position: relative;
        left: 5%;
    }
    .pinned-post-section-2 {
        position: relative;
        left: 10%;
        padding: 15%;
        padding-top: 15%;
        z-index: 1322222222222222222222222222222222222222222222222222222222222222222222222222222222222222;
    }
    .pinned-post-banner {
        display: block;
        position: absolute;
        right: 0%;
        background: red;
        padding: 7%;
        padding-right: 40%;
        top: 0%;
        z-index: 238973278237873282372378327333333333338;
        text-align: center;
    }

    .pinned-post-description {
    display: none;
    }

   }



   @media only screen and (max-width: 415px){
   
    .guides {
        font-size: 10vw;
    }


    body {
        width: 100vw;
        overflow: hidden;
    }

    .guide-button {
        top: -15%;
        margin-top: -15%;
        padding-botton: 10%;
        left: -25;
    }


    post-image {
         background-size: cover;
    background-size: 100% 100%;
    background-image: url('https://i.ibb.co/cxSQngT/jack-young-143113-unsplash.jpg');
    z-index: 32322;
      border-radius: 10% 0% 10% 10%;
      transition: transform 0.1s;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: -1;
      transform: scale(1);
      margin: -5%;
      opacity: 0.6;
    }


    .pinned-post-section-1 figure h1, h2, h3 {
        font-size: 8vw;
    }

    .pinned-post-section-2 {
        padding-bottom: 30%;
        
    }

    .post-description  {
        position: absolute;
        top: 245%;
        font-size: 7vw;
    }


    .post-description h2 {
        position: absolute;
        top: 245%;
        font-size: 6vw;
    }


    .post-title h1, h2{
        font-size: 10vw;
    }

    .pinned-post-banner {
        display: block;
        position: absolute;
        right: 0%;
        background: red;
        padding: 10%;
        padding-right: 45%;
        top: 0%;
        z-index: 238973278237873282372378327333333333338;
        text-align: center;
    }



     .Posted-by h2 {
        font-size: 10vw;
    }


    .Guide-Sort h2, h1, h3{
        font-size: 10vw;
    }

    .Guide-Sort button h1, h2, h3{
        font-size: 10vw;
    }


      .post-section-1 {
        position: relative;
        left: 0%;
        padding-top: 10%;
    }

    .post-section-2 {
        position: relative;
        margin-top: 78%;
        bottom: 36%;
        left: 0%;
        padding-bottom: 10%;
    }
    
    .Guide-Posts {
        flex-direction: column;
        flex: 1;
    }

    
    .Pinned-Guides {
        flex-direction: column;
        flex: 1;
    }



    .Guide-Posts div {
        position: relative;
        background-color: black;
        cursor: pointer;
        flex: 46%;
         padding-bottom: 100%;
         height: 100%;
        padding-top: 0%;
        border-radius: 10% 10% 10% 10%;
        overflow: hidden;
    }

    .Guide-Posts div figure {

    }


    .dropdown-menu {
    font-size: 10vw;
    width: 100vw;
    display: block;
  }

  .dropdown-menu h3{
    font-size: 10vw;

    }



    .Guide-Sort {
        position: relative;
        display: flex;
        width: 98%;
        padding-right: 1%;
        padding-left: 1%;
        padding-bottom: -10%;
        background-color: transparent;
        flex-wrap: wrap;
        font-size: 10vw;
    }


      .Guide-Sort div {
        box-sizing: border-box;
        position: relative;
        margin-right: 2%;
        margin-left: 2%;
        border-radius: 10% 0% 10% 10%;
        text-align: center;
        font-size: 10vw;
        padding-bottom: 0%;
        padding-top: 75%;
    }

          .Guide-Sort div h2 {
         font-size: 10vw;
         display: none;
    }

      .Guide-Sort button {
      transition: ease-in-out 0.2s;
      border-radius: 14%;
      cursor: pointer;
      }


    .Guide-Sort button:hover {
        background-color: rgb(109, 153, 242);
    }



    .Guide-Sort button:target {
            background-color: rgb(109, 153, 242);
    }



    .Recent-top-div button, h2, h1 {
        display: inline-block;
        color: rgb(253, 253, 253);
        outline: none;
        font-size: 100%;
        margin-right: 0%;
        margin-left: 0;
    }


    .Recent-top-div button {
            background: rgb(55, 66, 88);
            display: block;
            width: 100%;
            left: 0;
            margin-bottom: 0%;
            top: -50%;
    }


    .Recent-top-div {
        background: transparent;
        left: 0;
         width: 50%;
    position: absolute;
     clear: both;
     display: block;
    }

    .By-Category-div  {
        background-color: transparent;
    }


    .Recent-top-div h2 {
        font-size: 2vw;
        margin-right: 2%;
    }


    .guide-slash {
        background:  transparent;
        padding: 2%;
        margin-left: 18%;
        top: 0;
        padding-bottom: 0.3%;
        padding-top: 0.3%;
        display: inline-block;
    }


        .dropdown-menu {

        }

        .dropdown-menu li {
        z-index: 23323223;
        color: #fff;
        background: rgb(55, 66, 88);
        display: block;
        float: left;
        padding: 1%;
        width: 90%;
        left: 0;
        padding-bottom:0;
        position: relative;
        text-decoration: none;
        transition-duration: 0.5s;
        border-radius: 10%;
        font-size: 10vw;
        margin-top: -6%;
        padding-bottom: 10%;
        padding-top: 10%;
    }
      
    .dropdown-menu li a {
      color: rgb(253, 253, 253);
      padding: 4.1%;
      padding-bottom: 0;
      top:18%;
      font-size: 10vw;
      margin: 5%;
      margin-bottom: 15%;
      width: 80%;
    }


    .dropdown-menu li a h3 {
        top: 25%;
        left: -15%;
        width: 90%;
        margin-bottom: 15%;
        font-size: 7.5vw;
         }



    .Guide-Sort {
        padding-bottom: -30%;
    }

    .Recent-button{
        position: absolute;
        top: 10%;
        margin-bottom: 10%;
        width: 100vw;
    }

    .Top-button{
        position: absolute;
        padding: 5;
        top: 40%;
    }


        .dropdown-menu li ul {
            background: rgb(55, 66, 88);
            visibility: hidden;
          opacity: 0;
          width: 100%;
            position: absolute;
          transition: all 0.5s ease;
          margin-top: 18%;
            left: 0;
          display: none;
          margin-bottom: -50%;
        }


        #recent-button {
            position: absolute;
            top: 0%;
            padding-top: 3%;
            padding-bottom: 3%;
            border: solid 2px white;
        }

        #top-button {
            position: absolute;
            top: 46%;
            border: solid 2px white;
            padding: 10%;
            padding-top: 3%;
            padding-bottom: 3%;

        }

         #top-button:hover {
        background-color: rgb(109, 153, 242);
        }

        .guide-slash {
        display: none;
        }

        .post-date{
            top: 70%;
            font-size: 10vw;
        }

        .post-date h3{
            font-size: 6vw;
        }

        #By-Category-div {
            padding-top: 0;
        }


        #dropdown-menu li {
            top: 35%;
        }

        .dropdown li {
        padding-right: -6%;
        width: 90%;
        }


        .dropdown-menu li ul li {
        margin-top: 0%;
        top: -15%;
        }


        #dropdown {
        margin-bottom: 0%;
        margin-top: 13%;
        left: 0%;
        width: 97%;
        }



}

   




@media only screen and (max-width: 375px){
   


      
    
    html {
      height: 100%;
      overflow-x: hidden;
      max-width: 300px
    }
    body {
      padding: 0;
      margin: 0;
      max-width: 300px; 
    }



    .guides {
        font-size: 10vw;
    }


    body {
        width: 100vw;
        overflow: hidden;
    }

    .guide-button {
        top: -15%;
        margin-top: -15%;
        padding-botton: 10%;
        left: -25;
    }


    post-image {
         background-size: cover;
    background-size: 100% 100%;
    background-image: url('https://i.ibb.co/cxSQngT/jack-young-143113-unsplash.jpg');
    z-index: 32322;
      border-radius: 10% 0% 10% 10%;
      transition: transform 0.1s;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: -1;
      transform: scale(1);
      margin: -5%;
      opacity: 0.6;
    }


    .pinned-post-section-1 figure h1, h2, h3 {
        font-size: 8vw;
    }

    .pinned-post-section-2 {
        padding-bottom: 30%;
        
    }

    .post-description  {
        position: absolute;
        top: 245%;
        font-size: 7vw;
    }


    .post-description h2 {
        position: absolute;
        top: 245%;
        font-size: 6vw;
    }


    .post-title h1, h2{
        font-size: 10vw;
    }

    .pinned-post-banner {
        display: block;
        position: absolute;
        right: 0%;
        background: red;
        padding: 10%;
        padding-right: 45%;
        top: 0%;
        z-index: 238973278237873282372378327333333333338;
        text-align: center;
    }



     .Posted-by h2 {
        font-size: 5vw;
        word-wrap: break-word;
    }


    .Guide-Sort h2, h1, h3{
        font-size: 10vw;
    }

    .Guide-Sort button h1, h2, h3{
        font-size: 10vw;
    }


      .post-section-1 {
        position: relative;
        left: 0%;
        padding-top: 10%;
    }

    .post-section-2 {
        position: relative;
        margin-top: 78%;
        bottom: 36%;
        left: 0%;
        padding-bottom: 10%;
    }
    
    .Guide-Posts {
        flex-direction: column;
        flex: 1;
    }

    
    .Pinned-Guides {
        flex-direction: column;
        flex: 1;
    }



    .Guide-Posts div {
        position: relative;
        background-color: black;
        cursor: pointer;
        flex: 46%;
         padding-bottom: 100%;
         height: 100%;
        padding-top: 0%;
        border-radius: 10% 10% 10% 10%;
        overflow: hidden;
    }

    .Guide-Posts div figure {

    }


    .dropdown-menu {
    font-size: 10vw;
    width: 100vw;
    display: block;
  }

  .dropdown-menu h3{
    font-size: 10vw;

    }



    .Guide-Sort {
        position: relative;
        display: flex;
        width: 98%;
        padding-right: 1%;
        padding-left: 1%;
        padding-bottom: -10%;
        background-color: transparent;
        flex-wrap: wrap;
        font-size: 10vw;
    }


      .Guide-Sort div {
        box-sizing: border-box;
        position: relative;
        margin-right: 2%;
        margin-left: 2%;
        border-radius: 10% 0% 10% 10%;
        text-align: center;
        font-size: 10vw;
        padding-bottom: 0%;
        padding-top: 75%;
    }

          .Guide-Sort div h2 {
         font-size: 10vw;
         display: none;
    }

      .Guide-Sort button {
      transition: ease-in-out 0.2s;
      border-radius: 14%;
      cursor: pointer;
      }


    .Guide-Sort button:hover {
        background-color: rgb(109, 153, 242);
    }



    .Guide-Sort button:target {
            background-color: rgb(109, 153, 242);
    }



    .Recent-top-div button, h2, h1 {
        display: inline-block;
        color: rgb(253, 253, 253);
        outline: none;
        font-size: 100%;
        margin-right: 0%;
        margin-left: 0;
    }


    .Recent-top-div button {
            background: rgb(55, 66, 88);
            display: block;
            width: 100%;
            left: 0;
            margin-bottom: 0%;
            top: -50%;
    }


    .Recent-top-div {
        background: transparent;
        left: 0;
         width: 50%;
    position: absolute;
     clear: both;
     display: block;
    }

    .By-Category-div  {
        background-color: transparent;
    }


    .Recent-top-div h2 {
        font-size: 2vw;
        margin-right: 2%;
    }


    .guide-slash {
        background:  transparent;
        padding: 2%;
        margin-left: 18%;
        top: 0;
        padding-bottom: 0.3%;
        padding-top: 0.3%;
        display: inline-block;
    }


        .dropdown-menu {

        }

        .dropdown-menu li {
        z-index: 23323223;
        color: #fff;
        background: rgb(55, 66, 88);
        display: block;
        float: left;
        padding: 1%;
        width: 90%;
        left: 0;
        padding-bottom:0;
        position: relative;
        text-decoration: none;
        transition-duration: 0.5s;
        border-radius: 10%;
        font-size: 10vw;
        margin-top: -6%;
        padding-bottom: 10%;
        padding-top: 10%;
    }
      
    .dropdown-menu li a {
      color: rgb(253, 253, 253);
      padding: 4.1%;
      padding-bottom: 0;
      top:18%;
      font-size: 10vw;
      margin: 5%;
      margin-bottom: 15%;
      width: 80%;
    }


    .dropdown-menu li a h3 {
        top: 25%;
        left: -15%;
        width: 90%;
        margin-bottom: 15%;
        font-size: 7.5vw;
         }



    .Guide-Sort {
        padding-bottom: -30%;
    }

    .Recent-button{
        position: absolute;
        top: 10%;
        margin-bottom: 10%;
        width: 100vw;
    }

    .Top-button{
        position: absolute;
        padding: 5;
        top: 40%;
    }


        .dropdown-menu li ul {
            background: rgb(55, 66, 88);
            visibility: hidden;
          opacity: 0;
          width: 100%;
            position: absolute;
          transition: all 0.5s ease;
          margin-top: 18%;
            left: 0;
          display: none;
          margin-bottom: -50%;
        }


        #recent-button {
            position: absolute;
            top: 0%;
            padding-top: 3%;
            padding-bottom: 3%;
            border: solid 2px white;
        }

        #top-button {
            position: absolute;
            top: 46%;
            border: solid 2px white;
            padding: 10%;
            padding-top: 3%;
            padding-bottom: 3%;

        }

         #top-button:hover {
        background-color: rgb(109, 153, 242);
        }

        .guide-slash {
        display: none;
        }

        .post-date{
            top: 80%;
            font-size: 10vw;
        }

        .post-date h3{
            font-size: 6vw;
        }

        #By-Category-div {
            padding-top: 0;
        }


        #dropdown-menu li {
            top: 35%;
        }

        .dropdown li {
        padding-right: -6%;
        width: 90%;
        }


        .dropdown-menu li ul li {
        margin-top: 0%;
        top: -15%;
        }


        #dropdown {
        margin-bottom: 0%;
        margin-top: 13%;
        left: 0%;
        width: 97%;
        }


        .post-date {
        position: absolute;
        top: 36%;
    }


      .post-date h3{
            top: 80%;
            font-size: 8vw;
        }

}

/***************************************************/


</style>

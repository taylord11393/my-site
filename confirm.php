<!DOCTYPE html>

<html lang="en-US">

<head>

<title>Interests Page</title>

<link rel="stylesheet" type="text/css" href="main.css" />

</head>

<body>

<header>

<div class="top">

<a class="logo" href="index.html">CapellaVolunteers

<span class="dotcom">.org</span>

</a>

</div>

<nav>

<ul class="topnav">

<li>

<a href="index.html">Home</a>

</li>

<li>

<a href="invitation.html">Invitation</a>

</li>

<li>

<a href="volunteer.html">Volunteers</a>

</li>

<li>

<a href="gallery.html">Gallery</a>

</li>

<li>

<a href="registration.html" class="active">Registration</a>

</li>

</ul>

</nav>

</header>

<section id="pageForm()">
    <form action="#">
        <form onsubmit = "checkPageForm()">
    <label for = "Interest"> Enter Interest:</label>
    <input type = "checkbox" name = "Painting"placeholder ="Painting" />
            <label for="Painting">Painting:
                <input type = "checkbox" name = "Drawing"placeholder ="Drawing" />
                <label for="Drawing">Drawing:
                    <input type = "checkbox" name = "Writing"placeholder ="Writing" />
                    <label for="Writing">Writing:
                        <label for="signUpNewsletter">Sign up for newsletter:
                        </label>
                        <input type="radio" name="signUpNewsletter" value="yes" checked /> Yes
                        <input type="radio" name="signUpNewsletter" value="No"> No
                        <label for = "Comments">Comments:</label>
                            <input type="freeform text" name="Comments" placeholder="Comments" />
                            <label for = "Referred by">Referred by:</label>
                            <input type="text" name="Referred by" placeholder="Referred by" />
                            <input type="hidden" name="userName"/>
                            <input type="hidden" name="password"/>
                            <input type="hidden" name="passwordVerify"/>
                            <input type="hidden" name="firstName"/>
                            <input type="hidden" name="lastName"/>
                            <input type="hidden" name="email"/>
                            <input type="hidden" name="lastName"/>
                            <input type="hidden" name="signUpNewsletter"/>
                            <input type="submit" value="Confirm">
                    </label>
                </label>
            </label>
        </form>
    </form>
    </section>
    </body>
</html>

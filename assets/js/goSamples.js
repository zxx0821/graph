/* Copyright (C) 1998-2018 by Northwoods Software Corporation. All Rights Reserved. */

// When adding samples or extensions, modify this file, samples/all.html, and samples/indexList.js
// along with adding a 400x400 screenshot in assets/images/screenshots.

// Load necessary scripts:
if (window.require) {
    // declare required libraries and ensure Bootstrap's dependency on jQuery
    require.config({
        paths: {
            "highlight": "../../assets/js/highlight.js",
            "jquery": "../../assets/js/jquery.min.js", // 1.11.3
            "bootstrap": "../../assets/js/bootstrap.min.js"
        },
        shim: {
            "bootstrap": ["jquery"]
        }
    });
    require(["highlight", "jquery", "bootstrap"], function() {});
} else {
    function goLoadSrc(filenames) {
        var scripts = document.getElementsByTagName("script");
        var script = null;
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src.indexOf("goSamples") > 0) {
                script = scripts[i];
                break;
            }
        }
        for (var i = 0; i < arguments.length; i++) {
            var filename = arguments[i];
            if (!filename) continue;
            var selt = document.createElement("script");
            selt.async = false;
            selt.defer = false;
            selt.src = "../assets/js/" + filename;
            script.parentNode.insertBefore(selt, script.nextSibling);
            script = selt;
        }
    }
    goLoadSrc("highlight.js", (window.jQuery ? "" : "jquery.min.js"), "bootstrap.min.js");
}

var head = document.getElementsByTagName("head")[0];

var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "../assets/css/bootstrap.min.css";
head.appendChild(link);

link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "../assets/css/highlight.css";
head.appendChild(link);

link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "../assets/css/main.css";
head.appendChild(link);
function goSamples() {}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-1506307-5', 'auto');
ga('send', 'pageview');

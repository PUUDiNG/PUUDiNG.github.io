

function showSpacesVideo()
{
    document.getElementById("spacesOrTabsVideo").style = "visibility: visible;";
    document.getElementById("spacesVideo").style = "visibility: visible";
}




function showTabsVideo()
{
    document.getElementById("spacesOrTabsVideo").style = "visibility: visible;";
    document.getElementById("tabsVideo").style = "visibility: visible";
}

function hideVideo()
{
    document.getElementById("spacesOrTabsVideo").style = "visibility: hidden;";
    document.getElementById("spacesVideo").style = "visibility: hidden";
    document.getElementById("tabsVideo").style = "visibility: hidden";


}

$('a.stop-video').click(function(){
    $('.tabsVideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});
